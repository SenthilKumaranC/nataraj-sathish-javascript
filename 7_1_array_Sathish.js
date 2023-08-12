const fruits = ["apple","orange","banana"];
const importedFruits = ["pear","strawberry"];
//const allFruits = fruits.concat(importedFruits);
console.log(fruits);
console.log(importedFruits);
//console.log(allFruits);

const allFruits = [...fruits,...importedFruits,...fruits]
console.log(allFruits);

const a = {name:"raja"}

const b = {age:25}

Object.assign(a,b);
//a = {name:"raja",age:25}
//b = {age:25}

const c = {...a,...b}

console.log(a); // mutable
console.log(c);

//const address = {"door no":15, "ho"}
const shareMarketValues = [
    {name:"TCS", value:855, dividend:10},
    {name:"WIPRO", value:800, dividend:7.55},
    {name:"INFOSYS", value:1000, dividend:12.5}
]


