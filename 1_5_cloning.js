const {produce} = require("immer"); //node

//import immer from "immer" (module)
//<script src="immer.js"/> (normal js)

/*  let shareValues = [
  { companyName: "CTS", value: 400 },
  { companyName: "TCS", value: 300 },
  { companyName: "TATA", value: 400 },
];
let newShareValues = [...shareValues]; //(sharing the refer and data is not duplicated)
const newShareValue = {...newShareValues[0]}
//newShareValue = {companyName:"XXX",value:4555} not possible due to const restriction
newShareValue.value = 450;
newShareValues[0] = newShareValue;
console.log(shareValues, newShareValues);  */

let shareValues = [
    { companyName: "CTS", value: 400 },
    { companyName: "TCS", value: 300 },
    { companyName: "TATA", value: 400 },
  ];
  
const newShareValues = produce(shareValues,(draft)=>{
    draft[0].value = 450;
})

console.log(shareValues,newShareValues);
