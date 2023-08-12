const books = ["Maths","Science","English","Tamil"];
const newBooks = ["Hindi","French","Social","History"];

const allBooks = books.concat(newBooks);

console.log(`Books=${books} newBooks=${newBooks} allbooks=${allBooks}`);

const a = {name:"raja"}

const b = {age:25}

Object.assign(a,b);
//a = {name:"raja",age:25}
//b = {age:25}

const c = {...a,...b}

console.log(a); // mutable
console.log(c);
//name sharemarketvalue profit
const shareMarketValues = [
    {name: "Wipro", value: 200, dividend: 25},
    {name: "TCS", value: 400, dividend: 25},
    {name: "HCL", value: 600, dividend: 50}];
    