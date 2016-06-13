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
  
  it('should handle DELETE_MARKET', () => {
    expect(
      list(undefined, {
        type: types.DELETE_MARKET,
        marketName: 'btccny'
      })
    ).toEqual(
      {
      	'dgdcny':{
      		name: 'dgdcny',
      		show: false
      	}     
      }
    )
    
    expect(
      list(      
        {
        	'btccny':{
        		name: 'btccny',
        		show: true
        	},
        	'dgdcny':{
        		name: 'dgdcny',
        		show: false
        	}
        }, {
        type: types.DELETE_MARKET,
        marketName: 'ethcny'
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
        	}   
      }
    )    
  })
  
  it('should handle SHOW_MARKET', () => {
    expect(
      list(
        {
        	'btccny':{
        		name: 'btccny',
        		show: true
        	},
        	'dgdcny':{
        		name: 'dgdcny',
        		show: false
        	}
        }, {
        type: types.SHOW_MARKET,
        marketName: 'dgdcny',
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
        		show: true
        	}
        }
    )
    
    expect(
      list(
        {
        	'btccny':{
        		name: 'btccny',
        		show: true
        	},
        	'dgdcny':{
        		name: 'dgdcny',
        		show: false
        	}
        }, {
        type: types.SHOW_MARKET,
        marketName: 'btccny',
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
        	}
        }
    )    
  })
    
  it('should handle HIDE_MARKET', () => {
    expect(
      list(
        {
        	'btccny':{
        		name: 'btccny',
        		show: true
        	},
        	'dgdcny':{
        		name: 'dgdcny',
        		show: false
        	}
        }, {
        type: types.HIDE_MARKET,
        marketName: 'btccny',
        isShow: false
      })
    ).toEqual(
        {
        	'btccny':{
        		name: 'btccny',
        		show: false
        	},
        	'dgdcny':{
        		name: 'dgdcny',
        		show: false
        	}
        }
    )
    
    expect(
      list(
        {
        	'btccny':{
        		name: 'btccny',
        		show: true
        	},
        	'dgdcny':{
        		name: 'dgdcny',
        		show: false
        	}
        }, {
        type: types.HIDE_MARKET,
        marketName: 'dgdcny',
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
        	}
        }
    )    
  })    
})    