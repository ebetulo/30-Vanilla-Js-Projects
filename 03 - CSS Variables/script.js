"use strict";

const inputs = document.querySelectorAll(".controls input"); //It returns NodeList, like an array. It has index items, it has a length and limited number of array methods.

function update() {
  if (this.dataset.sizing === "px") {
    var suffix = this.dataset.sizing;
  } else suffix = ""; //Because there is no suffix for the HEX code.
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", update));

inputs.forEach((input) => input.addEventListener("mousemove", update));
