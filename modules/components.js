import { saveToFile } from './utils.js';

let confLink = '#';
try {
    confLink = confidentialLink;
} catch(e) {
    console.log(e);
}

export const introPageComp = {
    template: `
        <div class="container firstPage">
            <h1>Начни свой путь к хорошему самочувствию</h1>
            <div class="welcomeText">
            Тестирование займет 5-7 минут. На основании ваших ответов алгоритм
            платформы обработает информацию и определит ваши дефициты
            микронутриентов, а также составит персонализированную программу с
            дневной рекомендованной дозировкой для 20 необходимых питательных
            веществ.
            <p>
                Тест не предназначен для диагностики заболеваний, а также для
                назначения лечения или замены консультации у специалиста. Если у вас
                есть значительные симптомы, вам следует немедленно обратиться к врачу.
            </p>
            </div>
            <button class="forwards begin" v-on:click="startTest">начать тестирование</button>
            <div class="welcomeText confidential">Информация строго <a href='${confLink}' target="_blank">конфиденциальна</a> и не передается третьим лицам.</div>
        </div>
    `,
    methods: {
        startTest: function() {
            this.$root.setQuestion(0);
            this.$root.setPhase('test');
        },
    }
};

export const testPageComp = {
    props: ['question-number', 'question-block', 'total-steps'],
    data() {
        return {
            isInputValid: false
        }
    },
    template: `
        <div class="container">
            <div id="progress">
                <p>{{ questionNumber + 1 }}/{{ totalSteps }} вопросов</p>
                <div class="bar"><div :style="{ width: progress }"></div></div>
            </div>
            <h2>{{ questionBlock.text }}</h2>
            <div class="questionBlock">
                <input-text
                    v-if="isInput"
                    :placeholder="questionBlock.placeholder"
                    :id="questionBlock.id"
                    :answer="questionBlock.res"
                ></input-text>
                <input-radio
                    v-if="isRadio"
                    v-for="(option, index) in questionBlock.options"
                    :option="option"
                    :id="questionBlock.id"
                    :index="index"
                    :answer="questionBlock.res"
                ></input-radio>
                <input-checkbox
                    v-if="isCheckbox"
                    v-for="(option, index) in questionBlock.options"
                    :option="option"
                    :id="questionBlock.id"
                    :index="index"
                    :answer="option.res"
                ></input-checkbox>
            </div>
            <div class="buttonBlock">
                <button v-on:click="prevQuestion" class="backwards">назад</button>
                <button v-on:click="nextQuestion" class="forwards" :class="{ disabled: !isInputValid }">далее</button>
            </div>
        </div>
    `,
    methods: {
        nextQuestion: function() {
            if (this.isInputValid) {
                this.$root.setQuestion(this.questionNumber + 1);
            }
        },
        prevQuestion: function() {
            this.$root.setQuestion(this.questionNumber - 1);
        }
    },
    computed: {
        isInput: function() { return this.questionBlock.type === 'input'; },
        isRadio: function() { return this.questionBlock.type === 'radio'; },
        isCheckbox: function() { return this.questionBlock.type === 'checkbox'; },
        progress: function() { return `${100 * (this.questionNumber + 1) / this.totalSteps}%`; }
    },
    watch: {
        questionBlock: {
            handler: function() {
                switch(this.questionBlock.type) {
                    case 'input':
                        this.isInputValid = Boolean(this.questionBlock.res);
                        break;
                    case 'radio':
                        this.isInputValid = this.questionBlock.res !== null;
                        break;
                    case 'checkbox':
                        this.isInputValid =  true;
                        break;
                }
            },
            deep: true
        }
    }
};

export const inputTextComp = {
    props: ['placeholder', 'id', 'answer'],
    data() {
        return {
            value: this.answer
        }
    },
    template: '<input type="text" class="answer" :placeholder="placeholder" v-model="value" v-on:input="setAnswer">',
    methods: {
        setAnswer: function() {
            this.$root.setAnswer('input', this.id, null, this.value);
        },
    }
};

export const inputRadioComp = {
    props: ['option', 'id', 'index', 'answer'],
    template: `
        <label class="answer radio" :key="key">{{ option }}
          <input type="radio" :name="id" :checked="checkedValue" v-on:click="setAnswer">
          <span class="checkmark">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.03028 9.75539C4.35365 10.0827 5.07387 9.9742 5.15141 9.45956C5.63388 6.26445 8.04808 3.56895 9.87502 1.02899C10.3816 0.32514 9.21682 -0.343497 8.71685 0.351978C7.04735 2.67279 4.94312 5.11487 4.11992 7.93106C3.17919 6.96965 2.23467 6.01736 1.17957 5.17256C0.511368 4.63732 -0.444456 5.58028 0.230944 6.12114C1.60562 7.22223 2.7936 8.50622 4.03028 9.75539Z" fill="white"/>
            </svg>              
          </span>
        </label>
    `,
    computed: {
        checkedValue: function() {
            return this.answer === this.index ? 'checked' : '';
        },
        key: function() {
            return `${this.id}-${this.index}`;
        }
    },
    methods: {
        setAnswer: function() {
            this.$root.setAnswer('radio', this.id, this.index);
        }
    }
};

export const inputCheckboxComp = {
    props: ['option', 'id', 'index', 'answer'],
    template: `
        <label class="answer checkbox" :key="key">
            <span class="label">{{ option.text }}</span>
            <input type="checkbox" :checked="checkedValue" v-on:click="setAnswer">
            <span class="checkmark">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.03028 9.75539C4.35365 10.0827 5.07387 9.9742 5.15141 9.45956C5.63388 6.26445 8.04808 3.56895 9.87502 1.02899C10.3816 0.32514 9.21682 -0.343497 8.71685 0.351978C7.04735 2.67279 4.94312 5.11487 4.11992 7.93106C3.17919 6.96965 2.23467 6.01736 1.17957 5.17256C0.511368 4.63732 -0.444456 5.58028 0.230944 6.12114C1.60562 7.22223 2.7936 8.50622 4.03028 9.75539Z" fill="white"/>
                </svg>              
            </span>
        </label>
    `,
    computed: {
        checkedValue: function() {
            return this.answer ? 'checked' : '';
        },
        key: function() {
            return `${this.id}-${this.index}`;
        }
    },
    methods: {
        setAnswer: function() {
            this.$root.setAnswer('checkbox', this.id, this.index);
        },
    }
};

export const resultsPageComp = {
    props: ['results'],
    computed: {
        okResults: function() {
            return this.results.filter(res => res.severity === 0);
        },
        lackResults: function() {
            return this.results.filter(res => res.severity === 1);
        },
        badResults: function() {
            return this.results.filter(res => res.severity === 2);
        },
        hasOkResults: function() {
            return this.results.find(res => res.severity === 0);
        },
        hasLackResults: function() {
            return this.results.find(res => res.severity === 1);
        },
        hasBadResults: function() {
            return this.results.find(res => res.severity === 2);
        }
    },
    methods: {
        saveToFile: function() {
            saveToFile();
        }
    },
    template: `
    <div class="container">
      <h1>Ваши персональные рекомендации</h1>
      <div class="welcomeText">На основании предоставленной информации, 
        вам рекомендовано дополнительно включить в ваш рацион питания продукты и добавки содержащие данные микронутриенты:
      </div>
      <div class="resultsList">
        <div v-if="hasOkResults" class="resultGroup ok">
          <h3>Достаточное содержание микронутриентов</h3>
          <result
            v-for="option in okResults"
            :name="option.name"
            :dosage="option.dosage"
          ></result>
        </div>
        <div v-if="hasLackResults" class="resultGroup lack">
          <h3>недостаток микронутриентов</h3>
          <result
            v-for="option in lackResults"
            :name="option.name"
            :dosage="option.dosage"
          ></result>
        </div>
        <div v-if="hasBadResults" class="resultGroup bad">
          <h3>Выраженный дефицит микронутриентов</h3>
          <result
            v-for="option in badResults"
            :name="option.name"
            :dosage="option.dosage"
          ></result>
        </div>
      </div>
      <div class="buttonBlock">
        <button class="forwards results" v-on:click="saveToFile">
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
            <path d="M14.3279 9.16992V13.2422C14.3279 13.5653 14.062 13.8281 13.7351 13.8281H2.11671C1.78985 13.8281 1.52393 13.5653 1.52393 13.2422V9.16992H0.338379V13.2422C0.338379 14.2114 1.13614 15 2.11671 15H13.7351C14.7157 15 15.5135 14.2114 15.5135 13.2422V9.16992H14.3279Z" fill="white"/>
            <path d="M10.7712 6.90574L8.5186 9.13231V0H7.33305V9.13231L5.08049 6.90574L4.24219 7.73438L7.92582 11.3755L11.6095 7.73438L10.7712 6.90574Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0">
            <rect width="15.1751" height="15" fill="white" transform="translate(0.338379)"/>
            </clipPath>
            </defs>
          </svg>            
          СКАЧАТЬ РЕЗУЛЬТАТЫ
        </button>
      </div>
    </div>
    `
};

export const resultComp = {
    props: ['name', 'dosage'],
    computed: {
        content: function() {
            return `${this.name}: ваша дневная дозировка ${this.dosage}`
        }
    },
    template: `
    <div class="result">
        <div class="marker"></div>
        <p v-html="content"></p>
    </div>
    `
};