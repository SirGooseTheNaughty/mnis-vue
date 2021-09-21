const app = new Vue({
    el: '#app',
    data() {
        return {
            questions: [...questions],
            pointsByQs: pointsByQs,
            pointsByAge: pointsByAge,
            doses: doses,
            vitaminsDict: vitaminsDict,
            phase: 'intro',     // intro / test / results
            questionNumber: null,
            results: {
                data: {},
                vitamins: {},
                mappedResults: []
            },
            emailResult: null
        }
    },
    mounted() {
        window.addEventListener('beforeunload', unloadListener);
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
        loadCookies(this);
        if (this.results.mappedResults.length) {
            window.removeEventListener('beforeunload', unloadListener);
        }
    },
    computed: {
        isIntro: function() {
            return this.phase === 'intro'
        },
        isTest: function() {
            return this.phase === 'test'
        },
        isResults: function() {
            return this.phase === 'results'
        },
        questionBlock: function() {
            return this.questions[this.questionNumber];
        },
        totalSteps: function() {
            return this.questions.length;
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
        calculateResults: function() {
            calculateResults(this);
            addPointsByQs(this);
            addPointsByAge(this);
            mapResults(this);
            saveCookies(this.results);
            sendEmail(this);
        }
    }
});