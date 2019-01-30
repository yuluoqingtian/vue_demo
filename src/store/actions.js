import {ADD_TODO, DELETE_ITEM, SELECT_ALL_TODOS, DELETE_COMPLETE_TODOS, RECEIVE_TODOS} from './mutation-types'
import storageUtil from '../util/storageUtil'

export default {
  addTodo ({commit}, todo) {
    commit(ADD_TODO, {todo})
  },
  deleteTodo ({commit}, index) {
    commit(DELETE_ITEM, {index})
  },

  //  全选
  selectAllTodos ({commit}, value) {
    commit(SELECT_ALL_TODOS, {value})
  },

  //  删除已完成的项目
  deleteCompleteTodos ({commit}) {
    commit(DELETE_COMPLETE_TODOS)
  },

  reqTodos ({commit}) {
    setTimeout(() => {
      //  读取数据
      const todos = storageUtil.readTodos()
      commit(RECEIVE_TODOS, {todos})
    }, 1000)
  }
}
