console.log("hello from navbar.js")



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

const logoDisappear = () => {
  const logo = document.querySelector("#logo-id");

  if (logo) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        logo.classList.add("logo");
      }
      if (window.scrollY <= 200) {
        logo.classList.remove("logo");
      }
    })
  } 
};

logoDisappear();