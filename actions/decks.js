import {
  RECEIVE_DECKS,
  RECEIVE_DECK,
  ADD_DECK,
  REMOVE_DECK,
  ADD_CARD,
  REMOVE_CARD
} from "./constants";

import { _getDecks } from "./../utils/_DATA";

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  };
}

export function receiveDeck(deck) {
  return {
    type: RECEIVE_DECK,
    deck
  };
}

export function addDeck(title) {
  return {
    type: ADD_DECK,
    title
  };
}
export function removeDeck(title) {
  return {
    type: REMOVE_DECK,
    title
  };
}

export function addCard(card) {
  return {
    type: ADD_CARD,
    card
  };
}

export function removeCard(deckQuestion) {
  return {
    type: REMOVE_CARD,
    deckQuestion
  };
}

export function handleInitialData() {
  return dispatch => {
    return _getDecks()
      .then(data => {
        dispatch(receiveDecks(data));
      })
      .catch(e => {
        console.error(e);
        console.log("Error: ", e);
      });
  };
}
