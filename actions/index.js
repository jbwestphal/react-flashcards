import { setDecksList, fetchDecksList } from '../utils/_api'

export const LIST_DECKS = 'LIST_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

// list decks
export const recieveDecks = (decks) => ({
  type: LIST_DECKS,
  decks
})

export const listDecks = (result) => dispatch => (
  dispatch(recieveDecks(JSON.parse(result)))
)

  // fetchDecksList().then((result) => {
  //   if( result === undefined ) {
  //     setDecksList();
  //   } else {
  //     console.log('Definido'+result)
  //     dispatch(recieveDecks(JSON.parse(result)))
  //   }

  // })
// )

export const addDeck = () => (entry) => {
  return {
    type: ADD_DECK,
    entry,
  }
}