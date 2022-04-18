const capitalize = (word) => {
  const first = word[0].toUpperCase();
  const rest = word.substring(1).toLowerCase();
  return first + rest;
};

console.log(capitalize("sAlUt"));

// FOR LIST
const items = document.querySelector("#fifa-wins");
console.log(items);

// items.insertAdjacentHTML("afterbegin", "<p>Salope!</p>");
// items.forEach( (item) => {
//   console.log(item.innerText)
// })

setTimeout (() => {
  items.insertAdjacentHTML("beforeend", "<li>France</li>");
  items.classList.add("red")
}, 3000);

// FOR LINK
const link = document.getElementById("home");

link.style.textDecoration = "none";

console.log(link.innerText);
console.log(link.innerHTML);
console.log(link.attributes.href.value);

link.innerHTML = "Le wagon <strong>rocks</strong>"

//FOR IMAGE
const images = document.querySelectorAll(".image");

images.forEach((image) => {
  image.addEventListener("click", (event) => {
    debugger
    // console.log(event.currentTarger)
    event.currentTarget.classList.toggle("img-circle");
  });
});
