const colors = ["red", "green", "blue", "yellow", "pink", "purple", "white"];

const colorValue = document.querySelector(".color-value");
const flipColor = document.querySelector(".color-flip");

flipColor.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  colorValue.textContent = colors[randomNumber];
});

getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
