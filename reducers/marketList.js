import { ADD_MARKET, DELETE_MARKET, SHOW_MARKET, HIDE_MARKET} from '../constants/ActionTypes'

const initialState = {
	'btccny':{
		name: 'btccny',
		show: true
	},
	'dgdcny':{
		name: 'dgdcny',
		show: false
	}
}

export default function list(state = initialState, action) {
  switch (action.type) {
    case ADD_MARKET:
      return Object.assign(
        {}, initialState, {[action.marketName]:{name:action.marketName, show:action.isShow}}
	  )

    default:
      return state
  }
}