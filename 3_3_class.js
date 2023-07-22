class Student {
  name = "Raja";
  age = 17;
  volume = 40;

  increaseVolume() {}

  decreaseVolume() {}

  printName(){
    console.log("printName")
    console.log(this.name);
  }
}

const student = new Student();
student.printName();


function printer(){
    setTimeout(function (){student.printName()},2000);
}

setTimeout(printer, 2000);


