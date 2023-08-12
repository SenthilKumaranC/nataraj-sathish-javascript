const uuid = require("uuid");

const shareMarketValues = [
  { id: "1", name: "TCS", value: 855, dividend: 10 },
  { id: "2", name: "WIPRO", value: 800, dividend: 7.55 },
  { id: "3", name: "INFOSYS", value: 1000, dividend: 12.5 },
];

//Create
const addItem = (data) => {
  const newId = uuid.v4();
  //console.log(newId);
  shareMarketValues.push({ ...data, id: newId });
  return newId;
};

addItem({ name: "Zoho", value: 7879, dividend: 847569 });
addItem({ name: "Microsoft", value: 7879, dividend: 847569 });

//console.log(shareMarketValues)

//Read
//

const getItemsMoreThanDividend = (requiredDividend) => {
  const filteredShareMarketValues = shareMarketValues.filter(
    (shareMarketValue, index) => {
      console.log(index, shareMarketValue);

      if (shareMarketValue.dividend >= requiredDividend) {
        return true;
      } else {
        return false;
      }
    }
  );

  return filteredShareMarketValues;
};

const getItemsMoreThanValue = (requiredValue) => {
  const filteredShareMarketValues = shareMarketValues.filter(
    (shareMarketValue, index) => {
      console.log(index, shareMarketValue);

      if (shareMarketValue.value >= requiredValue) {
        return true;
      } else {
        return false;
      }
    }
  );

  return filteredShareMarketValues;
};

const getFilteredItems = (filterLogic) => {
  const filteredItems = shareMarketValues.filter((shareMarketValue) => {
    return filterLogic(shareMarketValue);
  });
  return filteredItems;
};

getFilteredItems((student) => student.marks >= 35);
getFilteredItems((student) => student.present);
console.log(getItemsMoreThanDividend(100));

const getLastItem = () => shareMarketValues[shareMarketValues.length - 1];
const getFirst = () => shareMarketValues[0];

const getById = (inputId) =>
   shareMarketValues.find((shareMarketValue) => {
    return shareMarketValue.id === inputId
  });

console.log(getById("2"));

//Update

//Delete
