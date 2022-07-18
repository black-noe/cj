<template>
  <div class="navlist">
    <div class="navlist-box">
      <el-button class="navlist-item"
       type="primary"
       v-for="(item, index) in navList"
       :key="index"
       @click="navClick(item)">
        {{item.name}}
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavList',
  props: {
  },
  data(){
    return{
      navList: [
        {name: '前言', url: '/'},
        {name: '配置', url: '/configure'},
        {name: '记录', url: '/record'}
      ]
    }
  },
  methods: {
    navClick(item){
      this.$router.push({path: item.url})
    }
  }
}
</script>

<style lang='less' scoped>
  .navlist{
    width: 6rem;
    margin: 0 auto;
    .navlist-box{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .navlist-item{
        width: 100px;
        transition: all .4s;
        font-size: 14px;
        padding: 5px 0; 
        border: 1px solid #ccc;
        cursor: pointer;
        &:hover{
          width: 50%;
        }
      }
    }
  }
</style>
