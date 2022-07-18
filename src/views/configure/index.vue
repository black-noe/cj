<template>
  <div class="content">
    <div class="content-list">
      <div class="item"
       v-for="(item, index) in dataList"
       :key="index">
        <img v-if="item.ico != ''" class="ico" :src="item.ico">
        <img v-else class='ico' src="https://cn.vuejs.org/images/logo.svg">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'configure',
  data(){
    return {
      dataList: [
        {name: 'Vue2', url: 'https://cn.vuejs.org/', ico: 'https://cn.vuejs.org/images/logo.svg'},
        {name: 'VueX', url: 'https://vuex.vuejs.org/zh/', ico: 'https://cn.vuejs.org/images/logo.svg'},
        {name: 'axios', url: 'https://vuex.vuejs.org/zh/', ico: ''},
        {name: 'Vue-router', url: 'https://vuex.vuejs.org/zh/', ico: ''},
        {name: 'lib-flexible', url: 'https://vuex.vuejs.org/zh/', ico: ''},
        {name: 'postcss-px2rem', url: 'https://vuex.vuejs.org/zh/', ico: ''},
        {name: 'px2rem-loader', url: 'https://vuex.vuejs.org/zh/', ico: ''},
        {name: 'less', url: 'https://vuex.vuejs.org/zh/', ico: ' https://lesscss.com.cn/Application/Home/View/Public/img/favicon.ico'},
        {name: 'less-loader', url: 'https://vuex.vuejs.org/zh/', ico: ' https://lesscss.com.cn/Application/Home/View/Public/img/favicon.ico'},
        {name: 'Element-Ui', url: 'https://vuex.vuejs.org/zh/', ico: ' https://element.eleme.cn/favicon.ico'},
       
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .content{
    .content-list{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .item{
        padding: 5px 12px;
        display: flex;
        align-items: center;
        cursor: pointer;
        border: 2px solid #fff;
        transition: all .6s;
        .ico{
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
        &:hover{
          font-size: 22px;
        }
      }
    }
  }
</style>
