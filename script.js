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
let checkBoxes = [];
let clicks = 0;
let selBoxes = [];
let iSel = [];
let selEmojis = [];
let openBoxes = [];
let turn = "p1";
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
        turnChange();
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

console.log(turn);
function turnChange() {
  if (clicks == 2) {
    if (turn === "p1") {
      turn = "p2";
      blueDis();
      redHide();
    } else {
      turn = "p1";
      redDis();
      blueHide();
    }
    console.log("Turn changed to:", turn);
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
      }, 350);
      selBoxes.splice(0, 2);
    }, 550);
  }
}

function checkMatch(box, selI) {
  selEmojis.push(selI.innerHTML);
  openBoxes.push(box);
  if (clicks == 2) {
    if (selEmojis[0] === selEmojis[1]) {
      console.log("match");
      matchedBoxes(openBoxes);
    } else {
      console.log("no match");
    }
    setTimeout(() => {
      openBoxes.splice(0, 2);
    }, 354);
    selEmojis.splice(0, 2);
  }
}
function matchedBoxes(openBoxes) {
  setTimeout(() => {
    openBoxes[0].style.scale = 0;
    openBoxes[1].style.scale = 0;
  }, 350);
}

function flipping(target) {
  target.style.transform = "rotateX(180deg)";
}

container.addEventListener("click", (event) => {
  target = event.target;
  if (target.classList.contains("box") || target.classList.contains("i")) {
  }
});
