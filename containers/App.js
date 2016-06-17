import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'
import echarts from '../tools/echarts.min.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.interval = setInterval(this.updateMarket.bind(this), 30 * 1000);
  }
  
  componentDidMount(){
    let echartObj = echarts.init(this.refs.echartsDom);
    echartObj.showLoading();    
  }
  
  componentWillUnmount(){
    this.interval && clearInterval(this.interval);
  }
  
  updateMarket(){
      const { actions } = this.props
      actions.fetchMarketsDetail(['btccny', 'ethcny', 'daocny', 'sccny'])
      actions.fetchMarketOrderBook('btccny')
  }
    
  render() {
    const { todos, actions, market } = this.props;
    let style = {height: '300px'};
    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} market={market} actions={actions} />
        <div ref='echartsDom' style={style}>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    market: state.market
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
