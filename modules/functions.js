import { vitaminsDict } from "./steps.js";

export function calculateResults(context) {
    context.questions.forEach(question => {
        switch (question.type) {
            case 'input':
                context.results.data[question.id] = question.res;
                break;
            case 'radio':
                context.results.data[question.id] = {
                    index: question.res,
                    value: question.options[question.res]
                };
                break;
            case 'checkbox':
                context.results.vitamins[question.id] = 0;
                question.options.forEach(option => {
                    if (option.res) {
                        context.results.vitamins[question.id] += option.value;
                        if (option.addTo) {
                            addTo(context, option.addTo);
                        }
                    }
                });
                break;
        }
    });
}

function addTo(context, addingTo) {
    addingTo.forEach(({ id, value }) => {
        if (!context.results.vitamins[id]) {
            context.results.vitamins[id] = 0;
        }
        context.results.vitamins[id] += value;
    });
}

export function addPointsByQs(context) {
    const { pointsByQs, results } = context;
    Object.keys(pointsByQs).map(addId => {
        if (results.vitamins[addId] >= 5) {
            Object.keys(pointsByQs[addId]).map(qId => {
                results.vitamins[qId] += pointsByQs[addId][qId];
            });
        }
    });
}

export function addPointsByAge(context) {
    const { pointsByAge, results } = context;
    const points = pointsByAge[results.data.age.index];
    Object.keys(points).map(qId => {
        results.vitamins[qId] += points[qId];
    });
}

export function mapResults(context) {
    Object.keys(context.results.vitamins).forEach(resId => {
        if (!context.doses[resId]) {
            return;
        }
        let severity = 0, dosage = null;
        const res = context.results.vitamins[resId];
        if (res < 5) {
            severity = 0;
            dosage = 0;
        } else if (res < 7) {
            severity = 1;
            dosage = 1;
        } else if (res < 9) {
            severity = 1;
            dosage = 2;
        } else {
            severity = 2;
            dosage = 3;
        }
        context.results.mappedResults.push({
            name: context.vitaminsDict[resId],
            severity,
            dosage: context.doses[resId][dosage]
        });
    });
}

export async function sendEmail(context) {
    const {
        data: { email, name },
        vitamins
    } = context.results;
    const baseLink = 'https://functions.yandexcloud.net/d4erov5jt2tk19iea677';
    const vitaminsObj = {};
    Object.keys(vitamins).map(key => {
        if (vitaminsDict[key]) {
            vitaminsObj[key] = vitamins[key];
        }
    });
    const resLink = `${baseLink}?toName=${name}&toEmail=${email}&results=${JSON.stringify(vitaminsObj)}`;
    fetch(resLink, { method: 'GET', redirect: 'follow' })
        .then(response => response.text())
        .then(result => {
            console.log(result);
            if (result.includes('messageId')) {
                context.emailResult = 'success';
            } else {
                context.emailResult = 'failure';
            }
        })
        .catch(error => {
            console.log('error', error);
            context.emailResult = 'failure';
        });
}