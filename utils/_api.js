import { AsyncStorage } from 'react-native'
import { DecksList } from './data'
import { FLASHCARDS_STORAGE_KEY } from './_decks'

export function fetchDecksList () {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(DecksList)
}

export function getDeck ({ entry, key }) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}

export function submitNewDeck ({ entry, key }) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}