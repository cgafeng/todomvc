import { UPDATE_MARKET} from '../constants/ActionTypes'

const initialState = { 
}

export default function detail(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MARKET:
      if(!action.json.ticker)
      {
        console.log(action.marketName + ':' + action.json[action.marketName].last + '  ↑' + action.json[action.marketName].high + '  ↓' + action.json[action.marketName].low)
      }
      else
      {
        console.log(action.marketName + ':' + action.json.ticker.last + '  ↑' + action.json.ticker.high + '  ↓' + action.json.ticker.low)
        let detail = Object.assign({}, action.json.ticker, {market:action.marketName})
        return Object.assign(
          {}, state, {[action.marketName]:detail}
        )
      }

    default:
      return state
  }
}