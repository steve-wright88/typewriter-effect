const textDisplay = document.getElementById(`text`);
const phrases = [`Hello there`, `Hey you`, `Hi, my name is Steve`];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  textDisplay.innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    isEnd = false;
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      textDisplay.innerHTML = currentPhrase.join("");
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
    }

    if (j == phrases[i].length) {
      isDeleting = true;
      isEnd = true;
    }

    if (isDeleting && j === 0) {
      // currentPhrase = [];
      isDeleting = false;
      i++;

      if (i == phrases.length) {
        textDisplay.innerHTML = phrases[2];
        // i = 0;
      }
    }
  }
  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200) + 200;
  const time = isEnd ? 1500 : isDeleting ? spedUp : normalSpeed;
  setTimeout(loop, time);
}

loop();
