<template>
  <li @mouseenter="handleShow(true)" @mouseleave="handleShow(false)" :style="{background: bgColor}">
    <label>
      <input v-model="todo.complete" type="checkbox"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: {
      todo: Object,
    },

    data () {
      return {
        bgColor: 'white', //默认背景颜色是白色
        isShow: false     //默认删除按钮不显示
      }
    },

    methods: {
      handleShow (isEnter) {
        console.log(isEnter)
        if (isEnter) {
          this.bgColor = '#aaaaaa'
          this.isShow = true
        } else {
          this.bgColor = 'white'
          this.isShow = false
        }
      },
      deleteItem () {
        const {todo, index} = this
        if (window.confirm('确定删除' + todo.title + '?')) {
          this.isShow=false
          //deleteTodo(index)
          //alert("删除成功")
          //发布消息
          this.$store.dispatch("deleteTodo",index)

        }
      }
    }
  }
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
