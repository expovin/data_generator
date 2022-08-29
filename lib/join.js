

class JOIN {

    join_field = [];

    constructor(n, classes, fields) {
        
        for (let i = 0; i < n; i++) {
            let output="";
            fields.forEach(field => output += classes[field].getLast(i))
            this.join_field.push(output);
        }   
    }

    getNext() { return this.join_field.pop()}
}

module.exports = JOIN;