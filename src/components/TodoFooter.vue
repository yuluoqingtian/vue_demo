<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllCheck"/>
    </label>
    <span>
          <span>已完成{{completeCount}}</span> / 总共{{totalCount}}
        </span>
    <!--标签里可以直接调用传进来的方法，不用另写一个方法调用-->
    <button class="btn btn-danger" @click="deleteCompleteTodos" v-show="completeSize">清除已完成任务</button>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'

  export default {
    name: 'TodoFooter',
    computed: {
      ...mapGetters(['totalCount', 'completeCount']),

      isAllCheck: {
        get () {
          return this.$store.getters.isAllSelected
        },
        set (value) {
          // this.selectAllTodos(value)
          this.$store.dispatch('selectAllTodos',value)
        }
      },
      completeSize(){
        return true
      }
    },
    data () {
      return {}
    },
    methods: {
      ...mapActions(['deleteCompleteTodos'])
    },

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
