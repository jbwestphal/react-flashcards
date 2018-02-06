import { AsyncStorage } from 'react-native'
import { data } from './data'
import { FLASHCARDS_STORAGE_KEY } from './_decks'

export function setDecksList() {
  return AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data))
}

export function fetchDecksList() {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
}

export function getDeck({ key, entry }) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}

export function submitNewDeck({ key, entry }) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}