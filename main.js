const items = document.querySelectorAll(".boxes p");
// console.log(items);

// items.insertAdjacentHTML("afterbegin", "<p>Salope!</p>");
items.forEach( (item) => {
  console.log(item.innerText)
})