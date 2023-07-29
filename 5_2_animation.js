function startAnimation(){
    const elem1 = document.getElementById("elem1") 
    elem1.classList.add("active")
  }

  function animationEnd(){
    console.log("animation end")
  }


const button = document.getElementById("animationButton")
button.addEventListener("click",startAnimation)
  