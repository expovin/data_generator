const rnd = require('randtools')

class CATEGORICAL {

    categoriesOut = [];

    constructor(n, categories, likelihood) {

        for (let i = 0; i < n; i++) {
            let randElem = rnd.custom.choose(categories, likelihood);
            this.categoriesOut.push(randElem)
        }

    }

    getNext() { return this.categoriesOut.pop()}
    getLast(i=0) { return this.categoriesOut[i]}

}

module.exports = CATEGORICAL;