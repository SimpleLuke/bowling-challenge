const Frame = require("./frame");

describe("Frame", () => {
  let frame;
  beforeEach(() => {
    frame = new Frame();
  });

  it("returns the number of pins before first try", () => {
    expect(frame.showFirstKnock()).toEqual(undefined);
  });

  it("returns the number of pins before second try", () => {
    expect(frame.showSecondKnock()).toEqual(undefined);
  });

  it("modifies the firstKnock pins number", () => {
    frame.inputFirstKnock(8);
    expect(frame.showFirstKnock()).toEqual(8);
  });

  it("modifies the secondKnock pins number", () => {
    frame.inputSecondKnock(8);
    expect(frame.showSecondKnock()).toEqual(8);
  });

  it("checks if it is a Strikes", () => {
    frame.inputFirstKnock(10);
    expect(frame.checkIsStrikes()).toEqual(true);
  });

  it("checks if it is a Spares", () => {
    frame.inputFirstKnock(8);
    frame.inputSecondKnock(2);
    expect(frame.checkIsSpares()).toEqual(true);
  });

  it("calculates the base score after two tries", () => {
    frame.inputFirstKnock(5);
    frame.inputSecondKnock(4);
    expect(frame.showBaseScore()).toEqual(9);
  });

  it("updates bonus score with bonus pins", () => {
    frame.updateBonusScore(5);
    expect(frame.showBonusScore()).toEqual(5);
  });

  it("updates bonus score and sum it up with the base score", () => {
    frame.inputFirstKnock(5);
    frame.inputSecondKnock(5);
    frame.updateBonusScore(5);
    expect(frame.showSumScore()).toEqual(15);
  });

  it("checks the frame is not done with point calculation when strikes", () => {
    frame.inputFirstKnock(10);
    expect(frame.checkIsDone()).toEqual(false);
  });

  it("checks the frame is done with point calculation when strikes and bonus", () => {
    frame.inputFirstKnock(10);
    frame.updateBonusScore(5);
    expect(frame.checkIsDone()).toEqual(true);
  });

  it("checks the frame is not done with point calculation when spares", () => {
    frame.inputFirstKnock(8);
    frame.inputSecondKnock(2);
    expect(frame.checkIsDone()).toEqual(false);
  });

  it("checks the frame is done with point calculation when spares and bonus", () => {
    frame.inputFirstKnock(8);
    frame.inputSecondKnock(2);
    frame.updateBonusScore(5);
    expect(frame.checkIsDone()).toEqual(true);
  });

  it("returns undefined sum score when point calculation is not finished", () => {
    frame.inputFirstKnock(8);
    frame.inputSecondKnock(2);
    expect(frame.showSumScore()).toEqual(undefined);
  });

  it("returns sum score when point calculation is finished", () => {
    frame.inputFirstKnock(8);
    frame.inputSecondKnock(2);
    frame.updateBonusScore(10);
    expect(frame.showSumScore()).toEqual(20);
  });
});
