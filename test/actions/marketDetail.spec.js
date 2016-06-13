import expect from 'expect'
import * as types from '../../constants/ActionTypes'
import * as actions from '../../actions'

describe('marketDetail actions', () => {
  it('updateMarket should create UPDATE_MARKET action', () => {
    expect(actions.updateMarket('btccny',
      {
        at: 1465808411,
        ticker:{
          buy:"4715.0",
          high:"4798.0",
          last:"4720.0",
          low:"4250.31",
          sell:"4720.0",
          vol:"4403.8742"
        }
      })).toEqual({
      type: types.UPDATE_MARKET,
      marketName: 'btccny',
      json:
        {
          at: 1465808411,
          ticker:{
            buy:"4715.0",
            high:"4798.0",
            last:"4720.0",
            low:"4250.31",
            sell:"4720.0",
            vol:"4403.8742"
          }
        }      
    })
	
  })
})