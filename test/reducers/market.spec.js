import expect from 'expect'
import market from '../../reducers/market'
import * as types from '../../constants/ActionTypes'

describe('reducer', () => {
describe('market', () => {
  it('should handle initial state', () => {
    expect(
      market(undefined, {})
    ).toEqual(
      {
        detail: {},
        isFetching: false,
        list:{
        	'btccny':{
        		name: 'btccny',
        		show: true
        	},
        	'dgdcny':{
        		name: 'dgdcny',
        		show: false
        	}
        }
      }
    )
  })

  it('should handle MARKET_FETCH_START & MARKET_FETCH_FINISH', () => {
    expect(
      market(undefined, {
        type: types.MARKET_FETCH_START,
        isFetching: true
      })
    ).toEqual(
      {
        detail: {},
        isFetching: true,
        list:{
        	'btccny':{
        		name: 'btccny',
        		show: true
        	},
        	'dgdcny':{
        		name: 'dgdcny',
        		show: false
        	}
        }        
      }
    )
    
    expect(
      market(undefined, {
        type: types.MARKET_FETCH_FINISH,
        isFetching: false
      })
    ).toEqual(
      {
        detail: {},
        isFetching: false,
        list:{
        	'btccny':{
        		name: 'btccny',
        		show: true
        	},
        	'dgdcny':{
        		name: 'dgdcny',
        		show: false
        	}
        }        
      }
    )

    expect(
      market({isFetching: true}, {
        type: types.MARKET_FETCH_FINISH,
        isFetching: false
      })
    ).toEqual(
      {
        detail: {},
        isFetching: false,
        list:{
        	'btccny':{
        		name: 'btccny',
        		show: true
        	},
        	'dgdcny':{
        		name: 'dgdcny',
        		show: false
        	}
        }        
      }
    )    
  })
})
})