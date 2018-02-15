import { AsyncStorage } from 'react-native'
import { data } from './data'
import { FLASHCARDS_STORAGE_KEY } from './_decks'

export function setDecksList() {
  return AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data))
}

export function fetchDecksList() {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
}

export function submitNewDeck (entry) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [entry.title]: entry
  }))
}

export function getDeck (title) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((results) => {
      const decks = JSON.parse(results)
      return decks[title]
    })
}

export function submitNewCard (title, card) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((results) => {
      const decks = JSON.parse(results)
      decks[title]['questions'].push(card)
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(decks))
    })
}

export function deleteDeck (title) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((results) => {
      const decks = JSON.parse(results)
      decks[title] = undefined
      delete decks[title]
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(decks))
    })
}