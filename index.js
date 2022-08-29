let counters = require("./lib/counter");
let normalDist = require("./lib/normal");
let uniformDist = require("./lib/uniform");
let categorical = require("./lib/categorical");
let join_field = require("./lib/join");
let descriptor = require('./descriptor');


if(process.argv.length != 3){
    console.log("HOW TO USE IT");
    console.log("--------------");
    console.log("node "+process.argv[1]+" <num_record>");
    console.log("              <num_record> : Number of record to generate");
    console.log(" ");
    console.log("Please check the descriptor.json match the output structure");
}

let output_JSON = [];
let output_CSV = [];

let classes = {};
for(var field in descriptor.fields){
    
    switch(descriptor.fields[field].type) {

        case 'counter':
            classes[field] = new counters(  parseInt(process.argv[2]), 
                                            descriptor.fields[field].start);
            break;

        case 'normal':
            classes[field] = new normalDist(parseInt(   process.argv[2]), 
                                                    descriptor.fields[field].distribution.mean, 
                                                    descriptor.fields[field].distribution.variance, 
                                                    descriptor.fields[field].decimal)
            break;

        case 'uniform':
            classes[field] = new uniformDist(parseInt(   process.argv[2]), 
                                                        descriptor.fields[field].distribution.from, 
                                                        descriptor.fields[field].distribution.to, 
                                                        descriptor.fields[field].decimal)
            break;
        
        case 'categorical':
            classes[field] = new categorical(   parseInt(process.argv[2]), 
                                                descriptor.fields[field].values, 
                                                descriptor.fields[field].likelihood);
            break;

        case 'join':
            classes[field] = new join_field( parseInt(process.argv[2]), classes, descriptor.fields[field].fields)
            break;
    }
}

for (let i = 0; i < parseInt(process.argv[2]); i++) {
    let record={};

    descriptor.Output.forEach(field => record[field] = classes[field].getNext())
    output_JSON.push(record);
}

header=[];
for(var field in output_JSON[0])
header.push(field);    

output_CSV = output_JSON.map (row => {
    let csvrow = [];
    
    for(var field in row)
        csvrow.push(row[field]);
    return(csvrow);
})

output_CSV.unshift(header);

switch ( descriptor.Format) {
    case 'JSON': console.log(output_JSON); break;
    case 'ARRAY': console.log(output_CSV); break;
    case 'CSV': console.log(output_CSV.join('\n'));break;
    default: console.log("Select the correct output format : JSON | ARRAY | CSV")
}

