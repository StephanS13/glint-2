// const { validate } = require("json-schema");



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
// Name
const nam = document.getElementById("name");
nam.addEventListener('focusin', () => {
  
  const line = document.querySelector(".hl-name");
  line.classList.remove("hl");
  line.classList.add("green");
});
nam.addEventListener('focusout', () => {
  const line = document.querySelector(".hl-name");
  line.classList.remove("green");
  line.classList.add("hl");
});

// Email
const email = document.getElementById("email");
email.addEventListener('focusin', () => {
  
  const line = document.querySelector(".hl-email");
  line.classList.remove("hl");
  line.classList.add("green");
});
email.addEventListener('focusout', () => {
  const line = document.querySelector(".hl-email");
  line.classList.remove("green");
  line.classList.add("hl");
});

// Subject
const subject = document.getElementById("subject");
subject.addEventListener('focusin', () => {
  
  const line = document.querySelector(".hl-subject");
  line.classList.remove("hl");
  line.classList.add("green");
});
subject.addEventListener('focusout', () => {
  const line = document.querySelector(".hl-subject");
  line.classList.remove("green");
  line.classList.add("hl");
});

// Message
const message = document.getElementById("message");
message.addEventListener('focusin', () => {
  
  const line = document.querySelector(".hl-message");
  line.classList.remove("hl");
  line.classList.add("green");
});
message.addEventListener('focusout', () => {
  const line = document.querySelector(".hl-message");
  line.classList.remove("green");
  line.classList.add("hl");
});

// inputs.forEach((input) => {
//   input.addEventListener("focus", (event) =>{
  
//     const horizontalLines = document.querySelectorAll(".hl");
//     horizontalLines.forEach((line) => {
//       console.log(event.firstChild)
//       line.classList.add("green");
//       line.classList.remove("hl");
//       });
//   });
//   input.addEventListener("focusout", (event) =>{
//     const horizontalLines = document.querySelectorAll(".hl");
//   horizontalLines.forEach((line) => {
//     line.classList.remove("green");
//     });
//   });
// });
