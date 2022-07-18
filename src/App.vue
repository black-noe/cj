<template>
  <div id="app">
    <img class='logo' src="https://tenapi.cn/qqimg/?qq=2744881984">
    <NavList></NavList>
    <router-view class="router-view"></router-view>
    <el-button
      type="primary"
      @click="open1">
      按需引入Element
    </el-button>
  </div>
</template>

<script>
// import Loading from '@components/Loading.vue'
import NavList from '@components/NavList.vue'

export default {
  name: 'App',
  components: {
    NavList,
  },
  data(){
    return {
    }
  },
  mounted(){

  },  
  methods: {
    open1() {
      const h = this.$createElement;

      this.$notify({
        title: '按需引入',
        message: h('i', { style: 'color: teal'}, '已经修改配置文件，当前引入模式按需引入-Babel.config.js')
      });
    }
  }
}
</script>

<style lang="less" scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: .5rem;
    .logo{
      border-radius: 50%;
      margin: 10px 0;
      transition: all 1s;
      &:hover{
        cursor: pointer;
        transform: rotateZ(180deg);
      }
    }
    .router-view{
      width: 6rem;
      min-height: 4rem;
      margin: 0 auto;
      padding: 10px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
  }
  .el-button{
    margin-top: 10px;
  }

</style>
