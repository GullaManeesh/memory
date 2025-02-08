let emojis = [
  "🦁",
  "🍷",
  "🎈",
  "👀",
  "🐼",
  "🐦‍⬛",
  "💖",
  "🦋",
  "🏀",
  "🚗",
  "👔",
  "🍉",
];

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let container = document.querySelector(".container");
let start = document.querySelector(".start");
let boxes = document.querySelectorAll(".box");
let i = document.querySelector(".i");
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

function generateEmojis() {
  let se = shuffleArray(emojis);
  let idx = shuffleArray(numbers);
  console.log(idx);
  console.log(se);
  container.innerHTML = `<div class="row1 row">
          <div class="box1 box">
            <div class="i">${se[0]}</div>
          </div>
          <div class="box2 box">
            <div class="i">${se[idx[11]]}</div>
          </div>
          <div class="box3 box">
            <div class="i">${se[idx[10]]}</div>
          </div>
          <div class="box4 box">
            <div class="i">${se[idx[0]]}</div>
          </div>
          <div class="box5 box">
            <div class="i">${se[1]}</div>
          </div>
        </div>
        <div class="row2 row">
          <div class="box1 box">
            <div class="i">${se[idx[8]]}</div>
          </div>
          <div class="box2 box">
            <div class="i">${se[11]}</div>
          </div>
          <div class="box3 box">
            <div class="i">${se[idx[1]]}</div>
          </div>
          <div class="box4 box">
            <div class="i">${se[2]}</div>
          </div>
          <div class="box5 box">
            <div class="i">${se[10]}</div>
          </div>
        </div>
        <div class="row3 row">
          <div class="box1 box">
            <div class="i">${se[idx[7]]}</div>
          </div>
          <div class="box2 box">
            <div class="i">${se[3]}</div>
          </div>
          <div class="box3 box">
            <div class="i">${se[idx[2]]}</div>
          </div>
          <div class="box4 box">
            <div class="i">${se[7]}</div>
          </div>
          <div class="box5 box">
            <div class="i">${se[4]}</div>
          </div>
        </div>
        <div class="row4 row">
          <div class="box1 box">
            <div class="i">${se[idx[6]]}</div>
          </div>
          <div class="box2 box">
            <div class="i">${se[idx[3]]}</div>
          </div>
          <div class="box3 box">
            <div class="i">${se[9]}</div>
          </div>
          <div class="box4 box">
            <div class="i">${se[idx[4]]}</div>
          </div>
          <div class="box5 box">
            <div class="i">${se[6]}</div>
          </div>
        </div>
        <div class="row5 row">
          <div class="box1 box">
            <div class="i">${se[8]}</div>
          </div>
          <div class="box2 box">
            <div class="i">${se[idx[9]]}</div>
          </div>
          <div class="box3 box">
            <div class="i">${se[idx[5]]}</div>
          </div>
          <div class="box4 box">
            <div class="i">${se[5]}</div>
          </div>
        </div>`;
}

start.addEventListener("click", () => {
  generateEmojis();
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.style.display = "block";
  });
});
