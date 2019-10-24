import { AsyncStorage } from "react-native";

const FL_KEY = "UND_NCP_MobileFlashcards";

function setStore() {
  let decks = {};
  AsyncStorage.setItem(FL_KEY, JSON.stringify(decks));
  return decks;
}

function getStore(results) {
  return results === null ? setStore() : results;
}

export function _getDecks() {
  console.log("_getDecks");
  return AsyncStorage.getItem(FL_KEY).then(getStore);
}

export function _getDeckByTitle(title) {
  console.log("_getDeckById");
  return AsyncStorage.getItem(FL_KEY).then(results => results[title]);
}

export function _saveDeck(name) {
  console.log("_saveDeck: ", name);
  return AsyncStorage.mergeItem(
    FL_KEY,
    JSON.stringify({
      [name]: {
        title: name,
        questions: []
      }
    })
  );
}
