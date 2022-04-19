console.log("hello from home-2")

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
