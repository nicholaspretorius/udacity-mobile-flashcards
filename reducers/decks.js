import { RECEIVE_DECKS } from "./../actions/constants";

const decks = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    default:
      return state;
  }
};

export default decks;
