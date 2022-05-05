
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

// MAKE BG-MENU APPEAR BY DEFAULT IF LOWER THAN 350
const menuByDefault = () => {
  const menu = document.querySelector(".menu");
  window.onload = function() {
    if (window.scrollY > 350) {
      menu.classList.add("bg-black");
    }
  };
  const pages = document.querySelector(".sidenav a");
  pages.addEventListener("click", () => {
    menu.classList.add("bg-black");
  });
};
menuByDefault();





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
