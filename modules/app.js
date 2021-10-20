import { fetchQuestions, preformResults, fetchResults } from './functions.js';
import { loadCookies, saveCookies, unloadListener, showResults } from './utils.js';

const vitaminsKeys = ['A', 'D', 'E', 'C', 'B1', 'B2', 'B3', 'B5', 'B6', 'B12', 'B9', 'B7', 'O3', 'O6', 'Cz', 'Mg', 'Fe', 'Zn', 'Mn', 'Se', 'Cr'];

export const appComp = {
    el: '#app',
    data() {
        return {
            questions: [],
            phase: 'intro',     // intro / test / results / fetching / error
            questionNumber: null,
            results: {
                data: {},
                mappedResults: [],
                vitamins: vitaminsKeys.reduce((obj, key) => {
                    obj[key] = 0;
                    return obj;
                }, {})
            },
            emailResult: null,
            errorParams: {
                status: 'error',
                title: '',
                text: '',
                optionBack: {
                    text: '',
                    handler: () => {}
                },
                optionForwards: {
                    text: '',
                    handler: () => {}
                }
            },
            isResettingEmail: false
        }
    },
    async mounted() {
        loadCookies(this);
        if (this.results.mappedResults.length) {
            window.removeEventListener('beforeunload', unloadListener);
            showResults();
        } else {
            const fetchedQuestions = await fetchQuestions(this);
            if (fetchedQuestions.errorCode) {
                this.setErrorParams({
                    status: 'error',
                    title: 'Что-то пошло не так: не удалось загрузить тест.',
                    text: 'Попробуйте еще раз или обратитесь за помощью.',
                    optionBack: {
                        text: 'Перезагрузить тест',
                        handler: () => location.reload()
                    },
                    optionForwards: null
                });
                this.setPhase('error');
            } else {
                window.addEventListener('beforeunload', unloadListener);
                console.log(fetchedQuestions);
                this.questions = fetchedQuestions;
                this.questions.forEach((q, i) => {
                    switch(q.type) {
                        case 'input':
                            this.$set(this.questions[i], 'res', '');
                            break;
                        case 'radio':
                            this.$set(this.questions[i], 'res', null);
                            break;
                        case 'checkbox':
                            this.$set(this.questions[i].options, [q.options.length], {
                                text: 'Ни один из перечисленных вариантов',
                                value: 0
                            });
                            q.options.forEach((o, j) => {
                                this.$set(this.questions[i].options[j], 'res', j === q.options.length - 1);
                            });
                            break;
                    }
                });
            }
        }
    },
    computed: {
        isIntro: function() {
            return this.phase === 'intro';
        },
        isTest: function() {
            return this.phase === 'test' && this.questions && this.questions.length;
        },
        isResults: function() {
            return this.phase === 'results' && this.results && this.results.mappedResults && this.results.mappedResults.length;
        },
        isLoading: function() {
            return this.phase === 'fetching' || !(this.isIntro || this.isTest || this.isResults || this.isError);
        },
        isError: function() {
            return this.phase === 'error';
        },
        questionBlock: function() {
            return this.questions[this.questionNumber];
        },
        totalSteps: function() {
            return this.questions.length;
        },
        startEnabled: function() {
            return this.questions && this.questions.length;
        }
    },
    methods: {
        setPhase: function(phase) {
            this.phase = phase;
        },
        setQuestion: function(index) {
            if (index < 0) {
                this.phase = 'intro';
            } else if (index >= this.questions.length) {
                this.calculateResults();
                this.phase = 'results';
            }
            this.questionNumber = index;
        },
        setAnswer: function(type, key, index = null, value = null) {
            const question = this.questions.find(q => q.id === key);
            const questionIndex = this.questions.findIndex(q => q.id === key);
            switch (type) {
                case 'input':
                    question.res = value;
                    break;
                case 'radio':
                    question.res = index;
                    break;
                case 'checkbox':
                    const options = question.options;
                    const reset = options.length - 1 === index;
                    if (reset) {
                        options.forEach((o, i) => {
                            o.res = i === index;
                        });
                    } else {
                        options[index].res = !options[index].res;
                        if (options.find(o => o.res)) {
                            options[options.length - 1].res = false;
                        } else {
                            options[options.length - 1].res = true;
                        }
                    }
                    break;
            }
        },
        calculateResults: async function() {
            const answers = preformResults(this);
            this.setPhase('fetching');
            const calculationResults = await fetchResults(answers);
            if (calculationResults.errorCode) {
                this.setErrorParams({
                    status: 'error',
                    title: 'Что-то пошло не так: не удалось загрузить результаты',
                    text: 'Попробуйте отправить запрос еще раз или пройти тест заново.',
                    optionBack: {
                        text: 'Начать заново',
                        handler: () => {
                            deleteCookie('mnic');
                            this.setPhase('intro');
                        }
                    },
                    optionForwards: {
                        text: 'Отправить запрос',
                        handler: () => this.calculateResults()
                    },
                });
                this.setPhase('error');
            } else {
                this.results.mappedResults = calculationResults.body;
                this.emailResult = calculationResults.emailRes;
                if (this.emailResult.statusCode !== 200) {
                    this.setErrorParams({
                        status: 'error',
                        title: 'Что-то пошло не так. Мы не смогли отправить результаты на указанную почту',
                        text: 'Попробуйте ввести почту еще раз или скачайте результаты тестирования с сайта к себе на устройство.',
                        optionBack: {
                            text: 'ввести новую почту',
                            handler: () => {
                                this.setIsResettingEmail(true);
                                this.setQuestion(this.questions.length - 1);
                                this.setPhase('test');
                            }
                        },
                        optionForwards: {
                            text: 'перейти к результатам',
                            handler: () => this.setPhase('results')
                        },
                    });
                    this.setPhase('error');
                } else {
                    this.setErrorParams({
                        status: 'success',
                        title: 'Результаты успешно направлены на вашу почту',
                        text: this.questions.find(q => q.id === 'email').res || '',
                        optionBack: {
                            text: 'ввести новую почту',
                            handler: () => {
                                this.setQuestion(this.questions.length - 1);
                                this.setIsResettingEmail(true);
                                this.setPhase('test');
                            }
                        },
                        optionForwards: {
                            text: 'перейти к результатам',
                            handler: () => {
                                this.setPhase('results');
                                showResults();
                            }
                        },
                    });
                    this.setPhase('error');
                }
                saveCookies(this.results);
            }
        },
        setErrorParams(params) {
            this.errorParams = params;
        },
        setIsResettingEmail(isResettingEmail) {
            this.isResettingEmail = isResettingEmail;
        }
    }
};