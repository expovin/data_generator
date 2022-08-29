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

### Fields
Fields contains the information on the output to generate. You need to add a section for each field,

### Output
Output contain the array of the output field to print. You may want to generate more fields and join some of them, but then print only a subset (e.g. print the joined result but not the single filed used in the join)

### Format 
Here you can specify the output format
- CSV
- JSON
- ARRAY
