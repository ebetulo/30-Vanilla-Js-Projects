"use strict";

let count = 0;
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn"); //Creates NodeList of 3 buttons

//Instead of selecting buttons one by one we are using ForEach method on NodeList!!
buttons.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const style = e.target.classList;
    if (style.contains("decrease")) {
      count--;
    } else if (style.contains("increase")) {
      count++;
    } else count = 0;
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else value.style.color = "black";
    value.textContent = count;
  });
});
