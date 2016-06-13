import { UPDATE_MARKET} from '../constants/ActionTypes'

const initialState = { 
}

export default function detail(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MARKET:
      return Object.assign(
        {}, state, {[action.marketName]:action.json.ticker}
	    )

    default:
      return state
  }
}