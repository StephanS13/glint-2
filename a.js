const capitalize = (word) => {
  const first = word[0].toUpperCase();
  const rest = word.substring(1).toLowerCase();
  return first + rest;
};

console.log(capitalize("sAlUt"));