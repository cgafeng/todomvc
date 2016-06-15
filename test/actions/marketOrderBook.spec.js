import expect from 'expect'
import * as types from '../../constants/ActionTypes'
import * as actions from '../../actions'

describe('actions', () => {
	describe('market orderbook', () => {
	  it('requestMarketOrderBook should create REQUEST_MARKET_ORDERBOOK action', () => {
	    expect(actions.requestMarketOrderBook('btccny')).toEqual({
	      type: types.REQUEST_MARKET_ORDERBOOK,
	      market: 'btccny'
	    })
	  })
	  
	  it('updateMarketOrderBook should create UPDATE_MARKET_ORDERBOOK action', () => {
	    expect(actions.updateMarketOrderBook('btccny', {
			a:1,
			b:2
		})).toEqual({
	      type: types.UPDATE_MARKET_ORDERBOOK,
	      marketName: 'btccny',
		  json:{
			  a:1,
			  b:2
		  }
	    })
	  })  
	})	
})