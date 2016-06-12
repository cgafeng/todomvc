import { combineReducers } from 'redux'
import todos from './todos'
import market from './market'

const rootReducer = combineReducers({
  todos,
  market
})

export default rootReducer
