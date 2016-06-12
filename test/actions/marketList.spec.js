import expect from 'expect'
import * as types from '../../constants/ActionTypes'
import * as actions from '../../actions'

describe('marketList actions', () => {
  it('addMarket should create ADD_MARKET action', () => {
    expect(actions.addMarket('ethcny')).toEqual({
      type: types.ADD_MARKET,
      marketName: 'ethcny',
      isShow: true
    })
    
    expect(actions.addMarket('ethcny', false)).toEqual({
      type: types.ADD_MARKET,
      marketName: 'ethcny',
      isShow: false
    })
    
    expect(actions.addMarket('ethcny', true)).toEqual({
      type: types.ADD_MARKET,
      marketName: 'ethcny',
      isShow: true
    })    
  })
})