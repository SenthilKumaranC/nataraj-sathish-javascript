function StudentFunc() {
  let name = "Raja";
  let age = 17;
  function changeAge(newAge){
    if(newAge<0){
        throw  new Error("Age cannot be lesss than 0")
    }
    age = newAge;

  }
  function increaseVolume() {}

  function decreaseVolume() {}

  function printName() {
    console.log(name);
  }

  return {increaseVolume,printName,changeAge}
}

const student = StudentFunc();
console.log(student.name)