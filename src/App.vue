<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"></TodoHeader>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"></TodoList>
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"></TodoFooter>
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'

  export default {
    name: 'App',

    data () {
      return {
        todos: [
          {title: '吃饭', complete: false},
          {title: '睡觉', complete: true},
          {title: 'coding', complete: false}
        ]
      }
    },

    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      deleteTodo (index) {
        this.todos.splice(index, 1)
      },
      deleteCompleteTodos () {
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      selectAllTodos (check) {
        this.todos.forEach(todo => todo.complete = check)
      }
    },

    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    }
  }
</script>

<style scoped>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>
