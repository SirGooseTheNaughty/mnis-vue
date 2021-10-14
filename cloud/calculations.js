class Calculator {
    constructor(answers) {
        this.answers = answers;
        this.results = Object.keys(vitaminsDict).reduce((obj, key) => {
            obj[key] = 0;
            return obj;
        }, {});

        this.calculateVitaminPoints = this.calculateVitaminPoints.bind(this);
        this.addTo = this.addTo.bind(this);
        this.calculateAdditionalPoints = this.calculateAdditionalPoints.bind(this);
        this.calculatePointsByAge = this.calculatePointsByAge.bind(this);
        this.performCalculations = this.performCalculations.bind(this);
        this.mapResults = this.mapResults.bind(this);
    }

    calculateVitaminPoints() {
        vitaminKeys.forEach(key => {
            this.answers[key].forEach((answer, i) => {
                if (answer) {
                    this.results[key] += questions[key].options[i].value;
                    if (questions[key].options[i].addingTo) {
                        this.addTo(addingTo);
                    }
                }
            });
        });
    }

    addTo(addingTo) {
        addingTo.forEach(({ id, value }) => {
            this.results[id] += value;
        });
    }

    calculateAdditionalPoints() {
        addKeys.forEach(key => {
            if (this.answers[key] >= 5) {
                Object.keys(pointsByQs[key]).map(qId => {
                    this.results[qId] += pointsByQs[key][qId];
                });
            }
        })
    }

    calculatePointsByAge() {
        const points = pointsByAge[answers.age];
        Object.keys(points).map(qId => {
            this.results[qId] += points[qId];
        });
    }

    performCalculations() {
        this.calculateVitaminPoints();
        this.calculateAdditionalPoints();
        this.calculatePointsByAge();
    }

    mapResults() {
        const mappedResults = [];
        Object.keys(this.results).forEach(resId => {
            if (!doses[resId]) {
                return;
            }
            let severity = 0, dosage = null;
            const res = this.results[resId];
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
            mappedResults.push({
                name: vitaminsDict[resId],
                severity,
                dosage: doses[resId][dosage]
            });
        });
        return mappedResults;
    }
}

module.exports = { Calculator };