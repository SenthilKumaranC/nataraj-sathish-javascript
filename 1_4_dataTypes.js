let shareValue = 400;
let newShareValue = shareValue; //(data is shared and duplicated)
newShareValue = 450;
console.log(shareValue,newShareValue);

let shareValues = [400,300,200];
let newShareValues = [...shareValues]; //(sharing the refer and data is not duplicated)
newShareValues[0] =450;
console.log(shareValues,newShareValues);

let employeeData = {name:"Raja",exp:15,salary:5};
let newEmployeeData = {...employeeData};
newEmployeeData.salary = 6;
console.log(employeeData,newEmployeeData);

//Destructring
const {name,exp}   = employeeData

console.log(name,exp)