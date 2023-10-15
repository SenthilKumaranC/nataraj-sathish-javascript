const methods = {
    func1:()=>{
       console.log("func1")
    },
    func2(){
       this.func1()
    }
}

methods.func2()