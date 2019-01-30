import {ADD_TODO, DELETE_ITEM} from './mutation-types'

export default {
  addTodo ({commit}, todo) {
    commit(ADD_TODO, {todo})
  },
  deleteTodo ({commit}, index) {
    commit(DELETE_ITEM, {index})
  }
}
