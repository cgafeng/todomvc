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
  
  it('deleteMarket should create DELETE_MARKET action', () => {
    expect(actions.deleteMarket('ethcny')).toEqual({
      type: types.DELETE_MARKET,
      marketName: 'ethcny'
    })
  })
  
  it('showMarket should create SHOW_MARKET action', () => {
    expect(actions.showMarket('ethcny')).toEqual({
      type: types.SHOW_MARKET,
      marketName: 'ethcny',
      isShow: true
    })
  })
  
  it('hideMarket should create HIDE_MARKET action', () => {
    expect(actions.hideMarket('ethcny')).toEqual({
      type: types.HIDE_MARKET,
      marketName: 'ethcny',
      isShow: false
    })
  })  
})