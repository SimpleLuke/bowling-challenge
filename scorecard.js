const Frame = require("./frame");

class ScoreCard {
  constructor() {
    this.currentRoll = 1;
    this.frames = [];
    this.totalScore = 0;
  }

  showCurrentRoll() {
    return this.currentRoll;
  }

  addFrame(frame) {
    this.frames.push(frame);
  }

  showFrames() {
    return this.frames;
  }

  updateFrame(roll, pins) {
    const currentFrame = this.frames[this.frames.length - 1];
    if (!currentFrame.showFirstKnock()) {
      currentFrame.inputFirstKnock(pins);
      this.currentRoll += 0.5;
    } else if (!currentFrame.showSecondKnock()) {
      currentFrame.inputSecondKnock(pins);
      this.currentRoll += 0.5;
    }

    if (currentFrame.showFirstKnock() && currentFrame.showSecondKnock()) {
      currentFrame.checkIsStrikes(); //check and change to true if strikes
      currentFrame.checkIsSpares(); //check and changes to true if spares
    }

    if (currentFrame.checkIsStrikes()) {
      this.currentRoll = Math.ceil(this.currentRoll);
    }
  }
}

module.exports = ScoreCard;

// const scoreCard = new ScoreCard();
// const frame = new Frame();
//
// scoreCard.addFrame(frame);
// scoreCard.updateFrame(1, 6);
// scoreCard.updateFrame(1, 4);
// console.log(scoreCard.showFrames());
