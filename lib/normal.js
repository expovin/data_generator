const rnd = require('randtools')


class NORMAL {

    normaldist = [];

    constructor(n, mean, dev, dec) {

        for (let i = 0; i < n; i++) {
            let normalDistNum = rnd.normal.mean(mean, dev, dec);
            this.normaldist.push(normalDistNum);
        }   
    }
      
    getNext() { return this.normaldist.pop()}
    getLast(i=0) { return this.normaldist[i]}

}

module.exports = NORMAL;