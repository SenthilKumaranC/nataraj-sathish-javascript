//function key word , function name , arguments , function scope brackets , function logic , return
function isPalindrom(word) {
  return true;
}
//named arrow function
//function key word  -> const,let
// add equal sign after function name
//after arguments add fat arrow =>

const isPalindrom2 = (word) => {
  return true;
};

/* const student = {
    name : "Raja",
    changeName : function (newName){
       this.name = newName
    }
}

console.log(student.name);
student.changeName("Kumar")
console.log(student.name); */

/* const student = {
    name : "Raja",
    changeName :  (newName)=>{
        console.log(this);
       //this.name = newName
    }
}

console.log(student.name);
student.changeName("Kumar")
console.log(student.name); */

const student = {
  name: "Raja",
  changeName: function (newName) {
    console.log("setting new name");
    this.name = newName;
    console.log(this.name);
  },
};

console.log(student.name);
const changeName = student.changeName;
setTimeout(function() { changeName("Kumar")}, 2000);

