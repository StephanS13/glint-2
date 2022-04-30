// const { validate } = require("json-schema");

console.log("hello from main")


// EFFECT ON REVEAL
window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll(".appear");

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 130;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add("active");
    } 
  }
}

reveal();


// GREEN ON INPUT
const inputs = document.querySelectorAll(".input")

inputs.forEach((input) => {
  input.addEventListener("focusin", (event) =>{
  
    input.classList.remove("hl");
    input.classList.add("green");
   
    
    
  });
  // input.addEventListener("focusout", (event) =>{
  //   const horizontalLines = document.querySelectorAll(".hl");
  // horizontalLines.forEach((line) => {
  //   event.currentTarget.classList.remove("green");
  //   });
  // });
});
