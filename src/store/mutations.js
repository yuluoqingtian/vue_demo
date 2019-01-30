export default {
  ADD_TODO(state,{todo}){
    state.todos.unshift(todo)
  }
}
