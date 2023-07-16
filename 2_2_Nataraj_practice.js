const {produce} = require("immer");
//Primitive
//Reference
//Array, Object
const key = 'weekHighLow';
const value = 650;
const companyData = {[key]: value,company: 'HCL',shareValue: 400, deltaChange: 25};
//console.log(companyData.company);
//console.log(companyData['shareValue']);
//console.log(companyData);
//const changes = {shareValue: 480, deltaChange: 96};
//const newCompanyData = {...companyData,...changes,marketClose: '5 PM'};
//newCompanyData.shareValue = 480;
const newCompanyData = produce(companyData, (draft)=> {
    draft.company = 'Wipro';
})
console.log(companyData,newCompanyData);
const deltaChange = 95;
const {company,deltaChange:newDeltaValue} = companyData;
console.log(newDeltaValue);
