import { LIST_DECKS, ADD_DECK } from '../actions'

export default function entries (state = {}, action) {
  switch (action.type) {
    case LIST_DECKS :
      return action.decks
      // return {
        // ...state,
        // merging entries to current state
        // ...action.entries
      // }
    case ADD_DECK :
      return {
        ...state,
        ...action.entry
      }
    default :
      return state
  }
}