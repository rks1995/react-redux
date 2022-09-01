import { combineReducers } from 'redux'
import cakeReducer from './cakes/cakeReducers'
import iceCreamReducers from './icecreams/IceCreamReducers'
import JuiceReducer from './juices/JuiceReducer'
import userReducer from './user/UserReducers'

const rootReduceres = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducers,
  juice: JuiceReducer,
  user: userReducer,
})

export { rootReduceres }
