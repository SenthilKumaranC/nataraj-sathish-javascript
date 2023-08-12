const uuid = require("uuid");

const shareMarketValues = [
    {id: "1", name: "Wipro", value: 200, dividend: 25},
    {id: "2",name: "TCS", value: 400, dividend: 25},
    {id: "3",name: "HCL", value: 600, dividend: 50}];

    //Add data
   /* const addItem = (data)=>{
        const newId = uuid.v4();
        shareMarketValues.push({...data,id:newId})
    }

    addItem({name:"Infy",value:456,dividend:36});

    console.log(shareMarketValues);*/

//Add multi data
const addMultiItem = (data)=>{
    data.forEach(element => {
        const newId = uuid.v4();
        shareMarketValues.push({...element,id:newId})
    });
}

addMultiItem([{name:"LTE",value:496,dividend:89},{name:"Citi",value:987,dividend:45}]);

console.log(shareMarketValues);