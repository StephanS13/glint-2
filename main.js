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
  const horizontalLines = document.querySelectorAll(".hl");
  horizontalLines.forEach((line) => {
    line.classList.add("green") = currentTarget.classList.add("green");
  });
    
  });
  input.addEventListener("focusout", (event) =>{
    const horizontalLines = document.querySelectorAll(".hl");
  horizontalLines.forEach((line) => {
    line.classList.remove("green") = currentTarget.classList.remove("green");
    });
  });
});
