class Frame {
  constructor() {
    this.firstKnock = 0;
    this.secondKnock = 0;
    this.isStrikes = false;
    this.isSpares = false;
    this.baseScore;
    this.bonusScore;
    this.sumScore;
    this.isDone = false;
  }

  showFirstKnock() {
    return this.firstKnock;
  }

  showSecondKnock() {
    return this.secondKnock;
  }

  inputFirstKnock(pins) {
    this.firstKnock = pins;
  }

  inputSecondKnock(pins) {
    this.secondKnock = pins;
  }

  checkIsStrikes() {
    if (this.firstKnock == 10 && this.secondKnock == 0) {
      this.isStrikes = true;
      return this.isStrikes;
    }
  }

  checkIsSpares() {
    if (this.firstKnock + this.secondKnock == 10) {
      this.isSpares = true;
      return this.isSpares;
    }
  }

  showBaseScore() {
    this.baseScore = this.showFirstKnock() + this.showSecondKnock();
    return this.baseScore;
  }

  showBonusScore() {
    return this.bonusScore;
  }

  updateBonusScore(bonusPins) {
    this.bonusScore = bonusPins;
  }

  showSumScore() {
    if (this.checkIsDone()) {
      this.sumScore = this.showBaseScore() + this.showBonusScore();
    }
    return this.sumScore;
  }

  checkIsDone() {
    if (this.checkIsStrikes() && this.showBonusScore()) {
      this.isDone = true;
    }
    if (this.checkIsSpares() && this.showBonusScore()) {
      this.isDone = true;
    }
    return this.isDone;
  }
}

module.exports = Frame;
