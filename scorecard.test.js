const ScoreCard = require("./scorecard");
const Frame = require("./frame");

jest.mock("./frame");

describe("ScoreCard", () => {
  let scorecard;
  let mockFrame;
  beforeEach(() => {
    Frame.mockClear();
    scorecard = new ScoreCard();
    mockFrame = new Frame();
  });

  it("adds a Frame object into the frames array", () => {
    mockFrame.showFirstKnock.mockImplementation(() => 10);
    scorecard.addFrame(mockFrame);
    expect(scorecard.showFrames().length).toEqual(1);
    expect(scorecard.showFrames()[0].showFirstKnock()).toEqual(10);
  });

  it("updates the latest frame knock when first try on roll 1", () => {
    scorecard.addFrame(mockFrame);
    scorecard.updateFrame(1, 7);
    mockFrame.showFirstKnock.mockImplementation(() => 7);
    expect(scorecard.showFrames()[0].showFirstKnock()).toEqual(7);
  });

  it("updates the latest frame knock when second try on roll 1", () => {
    scorecard.addFrame(mockFrame);
    scorecard.updateFrame(1, 7);
    scorecard.updateFrame(1, 2);
    mockFrame.showFirstKnock.mockImplementation(() => 7);
    mockFrame.showSecondKnock.mockImplementation(() => 2);
    expect(scorecard.showFrames()[0].showFirstKnock()).toEqual(7);
    expect(scorecard.showFrames()[0].showSecondKnock()).toEqual(2);
  });

  it("shows current roll after first try", () => {
    scorecard.addFrame(mockFrame);
    scorecard.updateFrame(1, 7);
    mockFrame.showFirstKnock.mockImplementation(() => 7);
    expect(scorecard.showCurrentRoll()).toEqual(1.5);
  });

  it("shows current roll after second try", () => {
    scorecard.addFrame(mockFrame);
    scorecard.updateFrame(1, 7);
    scorecard.updateFrame(1, 2);
    mockFrame.showFirstKnock.mockImplementation(() => 7);
    mockFrame.showSecondKnock.mockImplementation(() => 2);
    expect(scorecard.showCurrentRoll()).toEqual(2);
  });

  it("moves to next roll after first strikes", () => {
    mockFrame.showFirstKnock.mockImplementation(() => 10);
    mockFrame.checkIsStrikes.mockImplementation(() => true);
    scorecard.addFrame(mockFrame);
    scorecard.updateFrame(1, 10);
    expect(scorecard.showCurrentRoll()).toEqual(2);
  });
});
