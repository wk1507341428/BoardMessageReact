import { combineReducers } from 'redux'
import cartReducer from './cart-reducer'
import cardReducer from './card-reducer'
import msgReducer from './message-reducers'
import routeRedcer from './route-reducer'

const allReducers = {
  shoppingCart: cartReducer,
  cardZindex: cardReducer,
  messageBox: msgReducer,
  route:routeRedcer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;