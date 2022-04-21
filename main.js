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
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

reveal();

// HOVER ON IMAGES
// const images = document.querySelectorAll(".images-container i")

// images.addEventListener("mouseover", hover)

// function hover(){
//   images.forEach((image) => {
//     image.classList.add('hovered')
//   })
// }
// hover();