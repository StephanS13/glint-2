console.log("hello from navbar.js")


// MENU BACKGROUND APPEAR ON SCROLL DOWN
const menuBackground = () => {
  const menu = document.querySelector(".menu");
  if (menu) {
    window.addEventListener('scroll', () => {
      if (window.scrollY <= window.innerHeight) {
        menu.classList.add("bg-black");
      }
      if (window.scrollY <= 200) {
        menu.classList.remove("bg-black");
      }
    })
  } 
};

menuBackground();

// LOGO DISAPPEAR ON SCROLL DOWN
const logoDisappear = () => {
  const logo = document.querySelector("#logo-id");

  if (logo) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        logo.classList.add("logo");
      }
      if (window.scrollY <= 50) {
        logo.classList.remove("logo");
      }
    })
  } 
};

logoDisappear();