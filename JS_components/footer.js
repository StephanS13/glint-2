
// FOOTER DISAPPEAR ON SCROLL DOWN
const footerDisappear = () => {
  const footer = document.querySelector(".footer");

  if (footer) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        footer.classList.add("footer");
      }
      if (window.scrollY <= 350) {
        footer.classList.remove("footer");
      }
    })
  } 
};

footerDisappear();