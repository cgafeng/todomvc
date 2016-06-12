import expect from 'expect'
import * as types from '../../constants/ActionTypes'
import * as actions from '../../actions'

describe('market actions', () => {
  it('marketFetchStart should return true', () => {
    expect(actions.marketFetchStart()).toEqual({
      type: types.MARKET_FETCH_START,
      isFetching: true
    })
  })
  
  it('marketFetchFinish should return false', () => {
    expect(actions.marketFetchFinish()).toEqual({
      type: types.MARKET_FETCH_FINISH,
      isFetching: false
    })
  })  
})