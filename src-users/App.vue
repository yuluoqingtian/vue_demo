<template>
  <div>
    <div id="app">
      <div class="container">
        <Search></Search>
        <UsersMain></UsersMain>
      </div>
    </div>
  </div>
</template>

<script>
  import Search from './components/Search'
  import Main from './components/Main'

  export default {
    components: {
      Search,
      UsersMain: Main
    },
    name: 'App'
  }
</script>

<style scoped>

</style>
