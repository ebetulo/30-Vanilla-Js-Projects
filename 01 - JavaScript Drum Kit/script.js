"use strict";

window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return; // Stop the function if one of the key is pressed except "a,s,d,f,g,h,j,k,l"
  audio.currentTime = 0; //Rewind it to the start -- From which second the audio playback once the play() function is called. Otherwise; when we hit the "F" button the openhat audio plays and it takes like 2-3 seconds to actually get the end. If you call play() on audio element that is already playing,it won't play it again. Because; it is like "I'm already playing it, why would I do that?"
  audio.play();
  key.classList.add("playing");
  getEventListeners(key);
  key.addEventListener("transitionend", function () {
    key.classList.remove("playing");
  });
});
