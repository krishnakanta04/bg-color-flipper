const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "c", "D", "E", "F"];

const colorValue = document.querySelector(".color-value");
const flipColor = document.querySelector(".color-flip");

flipColor.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  colorValue.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};
