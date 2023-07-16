//primitive and reference
//arrays and objects
const {produce} = require("immer"); 

const key = "carType";
const value = "Sedan";
const carDetails = {[key]:value, brandName:"Honda", carMake:2001, carModel:"city civic"};
console.log(carDetails.carModel);

console.log(carDetails["carMake"]);
console.log(carDetails);
const changes = {carModel:"Accord",carType:"Luxury", carPrice:"15 lakhs"};
//const newCarDetails = {...carDetails,...changes};
const newCarDetails = produce(carDetails,(draft)=>{
draft.carModel="Accord"
  } );

//newCarDetails.carModel="Accord";
 
console.log(carDetails);
const carModel = "Jazz";
const {carModel:newCarModel,brandName}= carDetails;
console.log("line 23",newCarModel,carModel);
console.log(newCarDetails);


//substring