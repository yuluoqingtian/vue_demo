import {ADD_TODO, DELETE_ITEM} from './mutation-types'

export default {
  [ADD_TODO] (state, {todo}) {
    state.todos.unshift(todo)
  },

  [DELETE_ITEM] (state, {index}) {
    state.todos.splice(index, 1)
  }

}
