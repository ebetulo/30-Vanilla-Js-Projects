const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click", function () {
  // Get random number between 0 and 3
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  color.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});

//Alternative Solution
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   const randomNumber = getRandomNumber();
//   document.body.style.backgroundColor = colors[randomNumber];
//   color.textContent = colors[randomNumber];
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }
