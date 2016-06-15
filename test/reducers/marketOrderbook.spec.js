import expect from 'expect'
import detail from '../../reducers/marketOrderBook'
import * as types from '../../constants/ActionTypes'

describe('reducer', () => {
	describe('marketOrderBook', () => {
		it('should handle initial state', () => {
			expect(
			  detail(undefined, {})
			).toEqual(
			  {}
			)
		})
		
		it('should handle UPDATE_MARKET_ORDERBOOK', () => {
			expect(
			  detail(undefined, {
				  	type: types.UPDATE_MARKET_ORDERBOOK,
        			marketName: 'btccny',
					json:{
						a:1
					}})
			).toEqual({
				btccny:{
				  a:1,
				  market:'btccny'
			  }}
			)
			
			expect(
				  detail(
				  {
					btccny:{
					  a:1,
					  market:'btccny'
				  }}, {
				  	type: types.UPDATE_MARKET_ORDERBOOK,
        			marketName: 'ethcny',
					json:{
						b:2
					}})
			).toEqual({
				btccny:{
				  a:1,
				  market:'btccny'
			  	},
				ethcny:{
					b:2,
					market:'ethcny'
				}
			  }
			)			
		})
	})
})