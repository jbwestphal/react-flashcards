import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import { listDecks } from './actions'

const middleware = [ thunk ];
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger());
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
)


export default store
