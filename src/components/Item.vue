<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteMe">删除</a>
    </div>
    <p class="user"><span>{{comment.name}}</span><span>说:</span></p>
    <p class="centence">{{comment.content}}</p>
  </li>
</template>

<script>
  export default {
    //这种接收参数的方法制订了属性名和属性值
    props: {
      comment: Object,
      deleteItem: Function,
      index: Number
    },
    name: 'item',
    methods: {
      deleteMe () {
        const {deleteItem, index, comment} = this
        if (window.confirm('确定删除'+comment.name+'的评论吗？')) {
            deleteItem(index)
        }

      }
    }
  }
</script>

<style scoped>
  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }
</style>
