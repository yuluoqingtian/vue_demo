<template>
  <div>
    <h2 v-if="firstView">请输入用户名搜索</h2>
    <h2 v-if="loading">loading……</h2>
    <h2 v-if="errorMessage">{{errorMessage}}</h2>
    <div v-else class="row">
      <div class="card" v-for="(user,index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
import axios from 'axios'

  export default {
    name: 'Main',
    data () {
      return {
        //因为有四种显示状态，所以要定义四个变量
        firstView: true,
        loading: false,
        users: null,//[url,avatar_url,name]
        errorMessage: null
      }
    },
    mounted(){
      // vue初始化时就要订阅消息
      PubSub.subscribe('search',(msg,searchName)=>{
        //在接收到消息的时候，发送axios请求

        //首先更新显示
        this.firstView=false;
        this.loading = true;
        this.users = null;
        this.errorMessage = null;

        //发送请求
        const url = ' https://api.github.com/search/users?q='+searchName;
        axios.get(url).then(response=>{
          this.users = response.data.items.map(item=>({
            url:item.html_url,
            avatar_url:item.avatar_url,
            name:item.login

          }))
          this.loading = false;
        },
        response=>{
          this.loading = false;
          this.users=null
          this.errorMessage = '请求失败'
        })



      })

    }
  }
</script>

<style scoped>

  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }


</style>
