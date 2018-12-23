<template>
  <mt-button type="primary" style="width: 100%" @click.native="click">test</mt-button>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    methods:{
      click(){
        Toast("提示信息")
      }
    }
  }



</script>

<style scoped>

</style>
