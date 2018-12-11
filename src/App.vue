<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <!--将组件代码拆分至对应的vue组件中之后，要在App中引入拆分出去的组件，即List和Add-->
      <Add :AddItem="AddItem"></Add>
      <List :comments="comments"></List>
    </div>
  </div>
</template>

<script>

  //1.引入组件
  //2.映射成标签

  import Add from './components/Add'
  import List from './components/List'

  export default {
    data () {
      return {
        comments: [
          {
            name: '小明',
            content: 'vue so easy!!'
          },
          {
            name: '小丽',
            content: '吔屎啦你'
          },
          {
            name: '宋欢',
            content: '呵呵'
          },
          {
            name: '肖航',
            content: '我是吴彦祖'
          }
        ]
      }
    },
    components: {
      Add,
      List
    },
    methods: {
      AddItem (name, content) {
        const comments = this.comments
        const comment = {name:name,content:content}
        comments.unshift(comment)
      }
    }

  }
</script>

<style scoped>

</style>
