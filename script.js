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
let i = document.querySelector(".i");
let pa = document.querySelector(".pa");
let checkBoxes = [];
let clicks = 0;
let selBoxes = [];
let iSel = [];
let selEmojis = [];
let openBoxes = [];
let turn = "p1";
let p1s = 0;
let p2s = 0;
let wins = 0;
let p1score = document.querySelector(".p1score");
let p2score = document.querySelector(".p2score");
let res = document.querySelector(".result");
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

  let boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.addEventListener("click", function () {
      if (checkBoxes.length == 0 || checkBoxes.at(-1) !== box) {
        checkBoxes.push(box);
        let selI = box.childNodes[1];
        if (clicks == 0 || clicks == 1) {
          clicks += 1;
        } else {
          clicks = 1;
        }

        Btp(box, selI);
        checkMatch(box, selI);
        flipping(box);
        setTimeout(() => {
          selI.style.opacity = 1;
        }, 350);
      }
    });
  });
}

function startDis() {
  gsap.to(".start", {
    opacity: 0,
    display: "none",
    duration: 0.2,
  });
}

function boxDis() {
  gsap.to(".box", {
    scale: 1,
    duration: 0.5,
    delay: 0.2,
  });
}
function scoreDis() {
  gsap.to(".score", {
    top: "-7%",
  });
}

function scoreHide() {
  gsap.to(".score", {
    top: "-15%",
  });
}

function redDis() {
  gsap.to(".p1", {
    left: "-6%",
  });
}

function blueDis() {
  gsap.to(".p2", {
    right: "-6%",
  });
}

function redHide() {
  gsap.to(".p1", {
    left: "-15%",
  });
}

function blueHide() {
  gsap.to(".p2", {
    right: "-15%",
  });
}

start.addEventListener("click", () => {
  generateEmojis();
  boxDis();
  startDis();
  scoreDis();
  redDis();
});

function turnChange(desc) {
  if (!desc) {
    if (turn === "p1") {
      turn = "p2";
      blueDis();
      redHide();
      checkBoxes = [];
    } else {
      turn = "p1";
      redDis();
      blueHide();
      checkBoxes = [];
    }
  }
}

function Btp(boxSel, selI) {
  iSel.push(selI);
  selBoxes.push(boxSel);

  if (clicks == 2) {
    setTimeout(() => {
      selBoxes[0].style.transform = "rotateZ(-180deg)";
      selBoxes[1].style.transform = "rotateZ(-180deg)";
      setTimeout(() => {
        iSel[0].style.opacity = 0;
        iSel[1].style.opacity = 0;
        iSel.splice(0, 2);
      }, 300);
      selBoxes.splice(0, 2);
    }, 550);
  }
}

function checkMatch(box, selI) {
  selEmojis.push(selI.innerHTML);
  openBoxes.push(box);
  if (clicks == 2) {
    if (selEmojis[0] === selEmojis[1]) {
      turnChange(true);
      matchedBoxes(openBoxes);
      scoring();
      wins += 2;
      result();
    } else {
      turnChange(false);
    }
    setTimeout(() => {
      openBoxes.splice(0, 2);
    }, 354);
    selEmojis.splice(0, 2);
  }
}

function result() {
  setTimeout(() => {
    if (wins == 24) {
      if (p1s > p2s) {
        res.textContent = "RED WINS";
        res.style.color = "#fe3d3d";
      } else {
        res.textContent = "BLUE WINS";
        res.style.color = "#4242ff";
      }
      gameOver();
    }
  }, 700);
}
function resHide() {
  gsap.to(".res", {
    display: "none",
  });
}

function paDis() {
  gsap.to(".pa", {
    display: "block",
    delay: 0.5,
  });
}
function paHide() {
  gsap.to(".pa", {
    display: "none",
  });
}
function gameOver() {
  redHide();
  blueHide();
  scoreHide();
  setTimeout(() => {
    res.style.opacity = 0;
    paDis();
  }, 1000);
}

function scoring() {
  if (turn == "p1") {
    p1s += 1;
    p1score.textContent = p1s;
  } else if (turn == "p2") {
    p2s += 1;
    p2score.textContent = p2s;
  }
}

pa.addEventListener("click", () => {
  setTimeout(() => {
    generateEmojis();
    boxDis();
    startDis();
    scoreDis();
    redDis();
  }, 500);
  paHide();
  p1s = 0;
  p2s = 0;
  p1score.textContent = p1s;
  p2score.textContent = p2s;
  checkBoxes.pop();
  selBoxes = [];
  iSel = [];
  selEmojis = [];
  openBoxes = [];
  wins = 0;
  turn = "p1";
  clicks = 0;
  res.style.opacity = 1;
  res.textContent = "";
});

function matchedBoxes(openBoxes) {
  setTimeout(() => {
    openBoxes[0].style.scale = 0;
    openBoxes[1].style.scale = 0;
  }, 350);
}

function flipping(target) {
  target.style.transform = "rotateX(180deg)";
}
