<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllcheck"/>
    </label>
    <span>
          <span>{{completeSize}}</span> / {{todos.length}}
        </span>
    <!--标签里可以直接调用传进来的方法，不用另写一个方法调用-->
    <button class="btn btn-danger" @click="deleteCompleteTodos" v-show="completeSize">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    name: 'TodoFooter',
    props: {
      todos: Array,
      deleteCompleteTodos: Function,
      selectAllTodos: Function
    },
    computed: {
      completeSize () {
        return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
      },
      isAllcheck: {
        get () {
          if (this.completeSize === this.todos.length && this.todos.length > 0) {
            return true
          } else {
            return false
          }
        },
        set (value) {
          this.selectAllTodos(value)
        }
      }
    },
    data () {
      return {}
    },
    methods: {},

  }
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
