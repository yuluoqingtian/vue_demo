<template>
  <ul class="todo-main">
    <TodoItem v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index"></TodoItem>
  </ul>
</template>

<script>
  import TodoItem from './TodoItem'
  import {mapState} from 'vuex'
  import StorageUtil from '../util/storageUtil'

  export default {
    name: 'TodoList',
    computed: {
      ...mapState(['todos'])
    },
    components: {
      TodoItem
    },
    watch: {
      todos: {
        deep: true,
        handler:StorageUtil.saveTodos
      }
    }
  }
</script>

<style scoped>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }

</style>
