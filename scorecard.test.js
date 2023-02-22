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
});
