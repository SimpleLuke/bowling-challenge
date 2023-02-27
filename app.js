import ScoreCard from "./helpers/scorecard.js";
import Frame from "./helpers/frame.js";

// const frame = new Frame();
const scoreCard = new ScoreCard(Frame);

const createButtons = () => {
  for (let i = 0; i < 11; i++) {
    const pinButton = document.createElement("button");
    pinButton.setAttribute("content", i);
    pinButton.setAttribute("class", "btn");
    pinButton.textContent = i;
    pinButton.addEventListener("click", () => {
      console.log("click");
      scoreCard.updateFrame(1, i);
      console.log(scoreCard.showCurrentFrame());
      console.log(scoreCard.showCurrentRoll());
      scoreCard.generateScore();
      // console.log(scoreCard.showCurrentFrame());
      // console.log(scoreCard.showFrames());
      // console.log(scoreCard.scores);
      printPins();
      scoreCard.check();
      printRollSum();
      console.log(scoreCard.scores);
    });
    const btnDiv = document.getElementById("pins_btn");
    btnDiv.appendChild(pinButton);
  }
};

const printPins = () => {
  const points = document.querySelectorAll(".points");
  points.forEach((el) => {
    // console.log(el.id);
    let roll = scoreCard.showCurrentRoll();
    // console.log("roll", roll);
    let pin = 0;
    if (parseFloat(el.id) % 1 === 0) {
      pin = 0;
    } else {
      pin = 1;
    }
    // console.log("pin", pin);
    const score = scoreCard.generateScore()[Math.floor(roll - 1)][pin];
    console.log("score", score);
    // console.log("Score", score);
    console.log("roll", roll - 0.5);
    console.log("id", el.id);

    if (el.id == roll - 0.5) {
      el.textContent = score;
    }
  });
};

const printRollSum = () => {
  const rollSum = document.querySelectorAll(".rollSum");
  let roll = scoreCard.showCurrentRoll() - 0.5;

  rollSum.forEach((el) => {
    const sum = scoreCard.scores[0][0] + scoreCard.scores[0][1];
    console.log("SumRoll", Math.floor(roll));
    if (!isNaN(sum)) {
      if (el.id == `roll-${Math.floor(roll)}`) {
        el.textContent = sum;
      }
    }
  });
};

const run = () => {
  // console.log(scoreCard.showCurrentRoll());
  scoreCard.addFrame();
  // console.log(scoreCard.showCurrentFrame());
  // console.log(scoreCard.showFrames());
  createButtons();
  //   scoreCard.updateFrame(1, 2);
  //   printPins();
};

document.onload = run();
