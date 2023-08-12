const uuid = require("uuid");

const shareMarketValues = [
  { id: "1", name: "TCS", value: 855, dividend: 10 },
  { id: "2", name: "WIPRO", value: 800, dividend: 7.55 },
  { id: "3", name: "INFOSYS", value: 1000, dividend: 12.5 },
];
//create
const addItem = (data) => {
  const newId = uuid.v4();
  console.log(newId);
  shareMarketValues.push({ ...data, id: newId });
  return newId;
};

addItem({ name: "Zoho", value: 7879, dividend: 40 });

console.log(shareMarketValues);

/* const addItems = (multipleData) => {
const noOfItems = multipleData.length;
for (let index=0; index <noOfItems; index++) {
   // const newId = uuid.v4();
  //shareMarketValues.push({...multipleData[index],newId});    
  addItem(multipleData[index]);
}
} */

const addItems = (newItems) =>
  newItems.forEach((newItem, index, array) => {
    console.log("index", index);
    console.log(array);
    addItem(newItem);
  });

const sendMailToAllEmployees = (employees) =>
  employees.forEach((employee, index, array) => {
    console.log("index", index);
    console.log(array);
    sendMail(employee);
  });

addItems([
  { name: "HCL", value: 5000, dividend: 140 },
  { name: "Accenture", value: 7877, dividend: 120 },
]);
console.log(shareMarketValues);
