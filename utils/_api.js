import { AsyncStorage } from 'react-native'
import { data } from './data'
import { FLASHCARDS_STORAGE_KEY } from './_decks'

export function setDecksList() {
  return AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data))
}

export function fetchDecksList() {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
}

export function submitNewDeck ({ entry, key }) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    entry
  }))
}

export function submitNewCard({ entry }) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    entry: entry
  }))
}