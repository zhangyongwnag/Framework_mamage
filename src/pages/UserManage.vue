<template>
  <div class="wrap">
    123
  </div>
</template>
<script>
  import * as common from '../common'
  import * as config from '../config'
  import Vue from 'vue'
  export default {

  }
</script>
<style scoped>
  .wrap{
    width: 100%;
    border: 1px #eeeeee solid;
    background-color: #ffffff;
    overflow:hidden;
    border-radius: 10px;
    min-height: 600px;
    padding: 20px;
  }
  .ordersContent{
    width: 100%;
    overflow-x: auto;
    position: relative;
    min-height: 80vh;
  }
  table{
    min-width: calc(100vw - 290px);
    /*margin-top: 50px;*/
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px #eee solid;
    border-radius: 50px;
  }
  .ordersContent::-webkit-scrollbar {/*滚动条整体样式*/
    width: 0px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 8px;
  }
  .ordersContent::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background-color: #5cadff;
  }
  .ordersContent::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 10px;
    background-color: #fff;
  }
  table tr{
    height:50px;
    border: 1px #eee solid;
    white-space: nowrap;
  }
  table tr th{
    border: 1px #eee solid;
    background-color: #e1f0fe;
  }
  table tr td{
    border: 1px #eee solid;
    white-space: nowrap;
    padding: 30px 20px;
  }
  .goodDetails{
    display: flex;
    justify-content: flex-start;
    margin-top: 15px;
    /*width: 150px;*/
  }
  .goodDetails:nth-child(1){
    margin-top: 0px;
  }
  .goodDetails img{
    width: 50px;
    height:50px;
  }
  .imgWrap{
    border: 1px #eee solid;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
  }
  .goodInfo{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 280px !important;
  }
  .goodTitle{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .footer{
    margin-top: 15px;
    height: 12%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
