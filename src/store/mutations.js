import {ADD_TODO, DELETE_ITEM, SELECT_ALL_TODOS, DELETE_COMPLETE_TODOS, RECEIVE_TODOS} from './mutation-types'

export default {
  [ADD_TODO] (state, {todo}) {
    state.todos.unshift(todo)
  },

  [DELETE_ITEM] (state, {index}) {
    state.todos.splice(index, 1)
  },

  [SELECT_ALL_TODOS] (state, {value}) {
    state.todos.forEach(todo => todo.complete = value)
  },

  [DELETE_COMPLETE_TODOS] (state) {
    state.todos = state.todos.filter(todo => !todo.complete)
  },

  [RECEIVE_TODOS] (state, {todos}){
    state.todos = todos
  }

}
