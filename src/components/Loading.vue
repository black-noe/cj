<template>
  <div class="loading">
    <div class="loading-box">
      <div class="tips">{{msg}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props:{
    msg: {
      type: String,
      default: false
    }
  },
  data(){
  },
  mounted(){
  },
  methods: {
   
  }
}
</script>

<style lang="less" scoped>
  .loading{
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .6);
    .loading-box{
      width: 50vw;
      height: 50px;
      line-height: 50px;
      position: relative;
      .tips{
        font-size: 24px;
        font-weight: bold;
        color: white;
      }
      &::after{
        content: '';
        position: absolute;
        left: 0;
        bottom: -20px;
        width: 100%;
        height: 20px;
        border-radius: 10px;
        background-color: #888;
      }
      @keyframes loadingKey{
        0%{
          width: 0;
        }
        100%{
          width: 100%;
        }
      }
      &::before{
        content: '';
        position: absolute;
        left: 0;
        bottom: -20px;
        width: 100%;
        height: 20px;
        border-radius: 10px;
        background-color: blue;
        z-index: 1;
        animation: loadingKey 6s;
      }
    }
  }
</style>