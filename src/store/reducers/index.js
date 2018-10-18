import { combineReducers } from 'redux'
import cartReducer from './cart-reducer'
import cardReducer from './card-reducer'
import msgReducer from './message-reducers'

const allReducers = {
  shoppingCart: cartReducer,
  cardZindex: cardReducer,
  messageBox: msgReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;