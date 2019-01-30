<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--传递函数的方法-->
      <!--<TodoHeader :addTodo="addTodo"></TodoHeader> -->
      <!--绑定监听的方法-->
      <TodoHeader @addTodo="addTodo"></TodoHeader>
      <TodoList :todos="todos" ></TodoList>
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos"
                  :selectAllTodos="selectAllTodos"></TodoFooter>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'
  import StorageUtil from './util/storageUtil'

  export default {
    name: 'App',

    data () {
      return {
        //一开始就要去localStorage中读取数据
        todos: StorageUtil.readTodos()
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
    },
    watch: {
      todos:{
        deep: true,//深度监视
        //value是todos的最新值
        handler:StorageUtil.saveTodos

      }
    },
    mounted(){
      //订阅消息
      PubSub.subscribe('deleteTodo',(msg,index) =>{
        this.deleteTodo(index)
      })
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
