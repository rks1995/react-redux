import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReduceres } from './rootReducers'
import logger from 'redux-logger'

const store = createStore(
  rootReduceres,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store
