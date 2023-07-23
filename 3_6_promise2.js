function init(){
    /*setTimeout(() => {
      console.log("Nataraj");
      setTimeout(() => {
        console.log("Sathish");
        setTimeout(() => {
          console.log("Senthil");
        }, 2000);
      }, 3000);
    }, 2000);*/

    timerPromise(1000)
      .then(()=>{
        console.log("timer 1 ended");
        return timerPromise(3000);
      })
      .then(()=>{
        console.log("timer 2 ended");
        return timerPromise();
      })
      .then(()=>{
        console.log("timer 3 ended")
      })

    console.log("Hi ")
   
    

  }
 
 
