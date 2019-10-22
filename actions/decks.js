import {
  RECEIVE_DECKS,
  RECEIVE_DECK,
  ADD_DECK,
  REMOVE_DECK,
  ADD_CARD,
  REMOVE_CARD
} from "./constants";

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

export function removeCard(question) {
  return {
    type: REMOVE_CARD,
    question
  };
}
