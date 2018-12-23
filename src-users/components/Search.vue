<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input v-model="searchName" @keyup.enter="search" type="text" placeholder="enter the name you search"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
  import PubSub from 'pubsub-js'

  export default {
    name: 'Search',
    data () {
      return {
        searchName: ''
      }
    },
    methods: {
      search () {
        //发布消息,用的是PUBSUB库不是axios
        PubSub.publish('search',this.searchName.trim())
      }
    }
  }
</script>

<style scoped>

</style>
