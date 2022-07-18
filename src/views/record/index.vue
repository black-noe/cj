<template>
  <div class="content">
    <div class="title">
      <i class="el-icon-delete" @click="DelateRecord"></i>
    </div>
    <p v-for="(item,index) in record"
    :key="index">
      <span class="date">{{item.date}}</span>
      <router-link :to='item.url'>{{item.name}}</router-link>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'record',
  computed: mapGetters(["record"]),
  data(){
    return{

    }
  },
  mounted(){
  },
  methods:{
    DelateRecord(){
      if(JSON.stringify(this.record) == '[]'){
        const h = this.$createElement;
        this.$notify({
          title: '警告',
          message: h('i', { style: 'color: teal'}, 
          '历史记录为空')
        });
        return
      }
      this.$confirm('此操作将删除历史记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.commit('DeleteRecord')
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      
    }
  }
}
</script>

<style lang="less" scoped>
  .title{
    width: 100%;
    text-align: right;
    .el-icon-delete{
      cursor: pointer;
    }
  }
  .content{
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    p{
      width: 100%;
      text-align: left;
      padding: 10px;
      .date{
        margin-right: 10px;
      }
      a{
        font-size: 16px;
        &:hover{
          border-bottom: 2px solid black;
          padding-bottom: 2px;
        }
      }
    }
  }
</style>
