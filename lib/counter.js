

class COUNTER {

    counters = [];

    constructor(n,s) {
        for (let i = s; i < n+s; i++) {
            this.counters.push(i);
        }   
    }

    getNext() { return this.counters.pop()}
    getLast(i=0) { return this.counters[i]}
}

module.exports = COUNTER;