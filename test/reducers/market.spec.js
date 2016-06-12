import expect from 'expect'
import market from '../../reducers/market'
import * as types from '../../constants/ActionTypes'

describe('market reducer', () => {
  it('should handle initial state', () => {
    expect(
      market(undefined, {})
    ).toEqual(
      {
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