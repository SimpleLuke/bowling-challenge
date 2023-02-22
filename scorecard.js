class ScoreCard {
  constructor() {
    this.currentRoll = 0;
    this.frames = [];
    this.totalScore = 0;
  }

  addFrame(frame) {
    this.frames.push(frame);
  }

  showFrames() {
    return this.frames;
  }
}

module.exports = ScoreCard;
