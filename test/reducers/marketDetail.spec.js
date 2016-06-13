import expect from 'expect'
import detail from '../../reducers/marketDetail'
import * as types from '../../constants/ActionTypes'

describe('marketDetail reducer', () => {
  it('should handle initial state', () => {
    expect(
      detail(undefined, {})
    ).toEqual(
      {}
    )
  })
  
  it('should handle update', () => {
    expect(
      detail(undefined, {
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
    ).toEqual(
      {'btccny':{
              buy:"4715.0",
              high:"4798.0",
              last:"4720.0",
              low:"4250.31",
              sell:"4720.0",
              vol:"4403.8742"
          }
      }
    )
    
    expect(
      detail(
        {'btccny':{
                buy:"4715.0",
                high:"4798.0",
                last:"4720.0",
                low:"4250.31",
                sell:"4720.0",
                vol:"4403.8742"
            }
        }, {
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
              vol:"4403.8743"
            }
          }
      })
    ).toEqual(
      {'btccny':{
              buy:"4715.0",
              high:"4798.0",
              last:"4720.0",
              low:"4250.31",
              sell:"4720.0",
              vol:"4403.8743"
          }
      }
    )
    
    expect(
      detail(
        {'btccny':{
                buy:"4715.0",
                high:"4798.0",
                last:"4720.0",
                low:"4250.31",
                sell:"4720.0",
                vol:"4403.8742"
            }
        }, {
        type: types.UPDATE_MARKET,
        marketName: 'ethcny',
        json:
          {
            at: 1465808411,
            ticker:{
              buy:"4715.0",
              high:"4798.0",
              last:"4720.0",
              low:"4250.31",
              sell:"4720.0",
              vol:"4403.8743"
            }
          }
      })
    ).toEqual(
      {'btccny':{
              buy:"4715.0",
              high:"4798.0",
              last:"4720.0",
              low:"4250.31",
              sell:"4720.0",
              vol:"4403.8742"
          },
       'ethcny':{
              buy:"4715.0",
              high:"4798.0",
              last:"4720.0",
              low:"4250.31",
              sell:"4720.0",
              vol:"4403.8743"
          }
      }
    )    
  })  
})