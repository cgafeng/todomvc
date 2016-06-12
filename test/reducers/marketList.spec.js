import expect from 'expect'
import list from '../../reducers/marketList'
import * as types from '../../constants/ActionTypes'

describe('marketList reducer', () => {
  it('should handle initial state', () => {
    expect(
      list(undefined, {})
    ).toEqual(
      {
      	'btccny':{
      		name: 'btccny',
      		show: true
      	},
      	'dgdcny':{
      		name: 'dgdcny',
      		show: false
      	}
      }
    )
  })

  it('should handle ADD_MARKET', () => {
    expect(
      list(undefined, {
        type: types.ADD_MARKET,
        marketName: 'ethcny',
        isShow: true
      })
    ).toEqual(
      {
      	'btccny':{
      		name: 'btccny',
      		show: true
      	},
      	'dgdcny':{
      		name: 'dgdcny',
      		show: false
      	},
      	'ethcny':{
      		name: 'ethcny',
      		show: true
      	}        
      }
    )
  
    expect(
      list(undefined, {
        type: types.ADD_MARKET,
        marketName: 'ethcny',
        isShow: false
      })
    ).toEqual(
      {
      	'btccny':{
      		name: 'btccny',
      		show: true
      	},
      	'dgdcny':{
      		name: 'dgdcny',
      		show: false
      	},
      	'ethcny':{
      		name: 'ethcny',
      		show: false
      	}        
      }
    )  
  })
})    