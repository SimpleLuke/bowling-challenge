const ScoreCard = require("./scorecard");

class App {
  constructor(scorecard) {
    this.scorecard = scorecard;
  }

  run() {
    const scorecard = this.scorecard;
    console.log(
      `Roll ${scorecard.showCurrentRoll()} First try: What is your score?`
    );
    const pins = prompt(`(0 to 10)`);
  }
}

module.exports = App;

const app = new App(new ScoreCard());
app.run();
