import * as types from '../constants/ActionTypes'

export function addTodo(text) {
  return { type: types.ADD_TODO, text }
}

export function deleteTodo(id) {
  return { type: types.DELETE_TODO, id }
}

export function editTodo(id, text) {
  return { type: types.EDIT_TODO, id, text }
}

export function completeTodo(id) {
  return { type: types.COMPLETE_TODO, id }
}

export function completeAll() {
  return { type: types.COMPLETE_ALL }
}

export function clearCompleted() {
  return { type: types.CLEAR_COMPLETED }
}

export function marketFetchStart() {
  return { type: types.MARKET_FETCH_START,  isFetching:true}
}

export function marketFetchFinish() {
  return { type: types.MARKET_FETCH_FINISH,  isFetching:false}
}

export function addMarket(marketName, isShow=true) {
  return { type: types.ADD_MARKET,  marketName, isShow}
}

export function deleteMarket(marketName) {
  return { type: types.DELETE_MARKET,  marketName}
}

export function showMarket(marketName) {
  return { type: types.DELETE_MARKET,  marketName, isShow:true}
}

export function hideMarket(marketName) {
  return { type: types.DELETE_MARKET,  marketName, isShow:false}
}