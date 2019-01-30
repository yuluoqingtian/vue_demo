/*
* 用来读写todos到localStorage的工具
*
* */

export default {
  saveTodos(todos){
    window.localStorage.setItem("todos_key",JSON.stringify(todos))
  },
  readTodos(){
    const todos=JSON.parse(window.localStorage.getItem('todos_key') || '[]')
    return todos
  }
}
