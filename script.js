import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js'
import { appComp } from './modules/app.js';
import { introPageComp, testPageComp, inputTextComp, inputRadioComp, inputCheckboxComp, resultsPageComp, resultComp } from './modules/components.js';

Vue.component('intro-page', introPageComp);
Vue.component('test-page', testPageComp);
Vue.component('input-text', inputTextComp);
Vue.component('input-radio', inputRadioComp);
Vue.component('input-checkbox', inputCheckboxComp);
Vue.component('results-page', resultsPageComp);
Vue.component('result', resultComp);

const app = new Vue(appComp);