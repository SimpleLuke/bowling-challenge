const Frame = require("./frame");

class ScoreCard {
  constructor(frameModel) {
    this.currentRoll = 1;
    this.frames = [];
    this.scores = new Array(10).fill([null, null]);
    this.totalScore = 0;
    this.frameModel = frameModel;
  }

  showCurrentRoll() {
    return this.currentRoll;
  }

  addFrame() {
    this.frames.push(this.frameModel);
  }

  showFrames() {
    return this.frames;
  }

  showCurrentFrame() {
    return this.frames[this.frames.length - 1];
  }

  updateFrame(roll, pins) {
    const currentFrame = this.showCurrentFrame();
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
      this.addFrame(this.frameModel);
    }

    if (currentFrame.checkIsStrikes()) {
      this.currentRoll = Math.ceil(this.currentRoll);
    }
  }

  generateScore() {
    const currentFrame = this.showCurrentFrame();
    const currentFrameIndex = this.frames.length - 1;
    this.scores[currentFrameIndex][0] = currentFrame.showFirstKnock();
    this.scores[currentFrameIndex][1] = currentFrame.showSecondKnock();

    return this.scores;
  }
}

module.exports = ScoreCard;
// export default ScoreCard;

// const scoreCard = new ScoreCard();
// const frame = new Frame();
//
// scoreCard.addFrame(frame);
// scoreCard.updateFrame(1, 6);
// scoreCard.updateFrame(1, 4);
// console.log(scoreCard.showFrames());
// console.log(scoreCard.generateScore());
