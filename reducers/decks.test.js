import reducer from "./decks";
import { RECEIVE_DECKS } from "./../actions/constants";

describe("decks reducer", () => {
  describe("when initialising", () => {
    const decks = {};

    it("initialises the decks", () => {
      expect(reducer(undefined, { type: RECEIVE_DECKS, decks })).toEqual(decks);
    });
  });
});
