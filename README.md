# Data Generator
Use this nodejs program to generate random data according to distribution (uniform | normal), sequence, categorical or join. 

## Scope
You may find open dataset to use for Machine Learning test such us this one (https://www.kaggle.com/datasets/shivamb/machine-predictive-maintenance-classification) but usually they are only training dataset, this force to use the same dataset as training and apply. This program may help you to generate a similar dataset base on the common distribution

## Prerequisites
You need nodejs ver. 14.x or newer and npm ver. 8.x or newer (older version may work, but not tested)

# Installation
Download the zip file or clone di repo, then from the project folder in a console type

```
npm install
```

## How to use it
You have to edit the Descriptor.json file, there are 3 first level section which are:
- Fields
- Output
- Format

Once you set up the descriptor.json, from the command line just type 
```
        node index.js <record to produce>
```


## Descriptor.json - configuration

### Output
Output contain the array of the output field to print. You may want to generate more fields and join some of them, but then print only a subset (e.g. print the joined result but not the single filed used in the join)

### Format 
Here you can specify the output format
- CSV
- JSON
- ARRAY
- 
### Fields
Fields contains the information on the output to generate. You need to add a section for each field you want to generate, the name of the section in the actual field name. The section need to contain the mandatory property "type" which can be:
- counter
- categorical
- normal
- uniform
- join

#### Counter
If type is counter, you also need to specify the property start. Counter produce a progressive number starting from the property "start"

#### Nategorical
If type is categorical, you need to specify other 2 properties: "values" and "likelihood".  Categorical produce a list of string in output. The property Values is an array of the string to produce in output, the property likelihood is an array (same dimension of values) which specify the probability for each values:
E.g.


```
        "Class" : {
            "type" : "categorical",
            "values" : ["L","M","H"],
            "likelihood" : [20,30,100]
        }
   
```
   Produce for the field called Class the output L or H ot M
   Print out L with the probability of 20%
   Print out M with the probability of 10% (30 - 20)
   Print out H with the probability of 70% (70 - 30)
   
#### Normal
If type is normal you need to specify the decimal position the mean and the variance. Normal print out a random number with the normal (or Gaussian) distribution.

E.g.
```
        "Air temperature [K]" : {
            "type" : "normal",
            "decimal" : 1,
            "distribution" : {
                "mean" : 300,
                "variance" :4
            }
        }
   ```
Produce for the field called "Air temperature [K]" a random number with 1 decimal with the mean of 300 and a variance (standard deviation) of 4.

#### Uniform
If type is uniform you need to specify the decimal position the from and the to properties. Uniform print out a random number with the uniform distribution (all the number have the same probability)

E.g.
```
        "Tool wear [min]" :{
            "type" : "uniform",
            "decimal" : 0,
            "distribution" : {
                "from" : 0,
                "to" :250
                
            }
   ```
   Produce for the field called "Tool wear [min]" a random number between 0 and 250. All the number with the same probability.


#### Join
If type is join you need to specify "fields" as property. Fields is an array of the fields to join.

E.g.
```
        "Product ID" : {
            "type" : "join",
            "fields" : ["Type","Prod id num"]
        }
   ```
Produce a the field called "Product ID" as concatenation of "Type" and "Prod id num"
