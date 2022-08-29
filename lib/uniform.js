const rnd = require('randtools')


class UNIFORM {

    uniformDist = [];

    constructor(n, from, to, dec) {

        for (let i = 0; i < n; i++) {
            let rndNum = rnd.uniform.range(from, to, dec);
            this.uniformDist.push(rndNum);
        }   
    }
      
    getNext() { return this.uniformDist.pop()}
    getLast(i=0) { return this.uniformDist[i]}

}

module.exports = UNIFORM;