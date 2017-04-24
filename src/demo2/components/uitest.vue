/**
 * @file
 * @author 何文林
 * @date 2017/4/24
 */
<template>
  <div class="testui">
    <h1 @click="tip">点我提示一下呗</h1>
    <mt-spinner type="snake"></mt-spinner>
    <mt-spinner type="double-bounce"></mt-spinner>
    <mt-spinner type="triple-bounce"></mt-spinner>
    <mt-spinner type="fading-circle"></mt-spinner>
    <mt-spinner color="rgb(100, 100, 100)"></mt-spinner>
    <mt-spinner color="yellow"></mt-spinner>
  </div>
</template>

<script>
  import {APIS} from 'serverConfig'
  import nativeApi from 'nativeApi'
  console.log(nativeApi)
  console.log(APIS)
  import { Toast, Spinner } from 'mint-ui'
  export default {
    name: 'uitest',
    components: {
      'mt-spinner': Spinner
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      tip () {
        Toast({
          message: '操作成功',
          iconClass: 'icon icon-success'
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
