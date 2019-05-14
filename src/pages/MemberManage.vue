<template>
  <div class="wrap">
    <div style="display: flex;align-items: center;width: 100%;justify-content: space-between">
      <div>
        <DatePicker v-model="registerTime" type="datetimerange" placeholder="选择注册时间" style="width: 300px"></DatePicker>
        <Dropdown @on-click="chooiseItem" style="margin-left: 30px;">
          <Button type="primary">
            {{dropdownItem ? dropdownItem : '会员等级'}}
            <Icon type="ios-arrow-down"></Icon>
          </Button>
          <DropdownMenu slot="list">
            <DropdownItem divided name="VIP0 准经销商">VIP0 准经销商</DropdownItem>
            <DropdownItem divided name="VIP1 初级经销商">VIP1 初级经销商</DropdownItem>
            <DropdownItem divided name="VIP2 区县代理">VIP2 区县代理</DropdownItem>
            <DropdownItem divided name="VIP3 地市代理">VIP3 地市代理</DropdownItem>
            <DropdownItem divided name="VIP4 省级代理">VIP4 省级代理</DropdownItem>
            <DropdownItem divided name="VIP5 全国代理">VIP5 全国代理</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Input v-model="txt" placeholder="可搜索姓名/手机号/编号" style="width: 251px;margin-left: 30px;" />
      </div>
      <div style="display: flex;align-items: center">
        <Button type="primary" style="width: 100px;margin-right: 10px;" @click="search">搜索</Button>
        <Button type="primary" style="width: 100px;" @click="reset">重置</Button>
      </div>
    </div>

    <div class="ordersContent">
      <table v-if="!spinShow">
        <tr>
          <th>序号</th>
          <th>基础信息</th>
          <th>经销商等级</th>
          <th>余额/冻结金额</th>
          <th>帐户状态</th>
          <th>保级信息</th>
          <th>操作</th>
        </tr>
        <tr>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
        </tr>
      </table>
      <Spin size="large" fix v-else></Spin>
    </div>

    <div class="footer">
      <Page ref="pages" :total="totalRow" show-sizer show-elevator show-total @on-change="changePage" @on-page-size-change="changePageNum"/>
    </div>

  </div>
</template>
<script>
  import * as common from '../common'
  import * as config from '../config'
  import Vue from 'vue'
  export default {
    data() {
      return {
        spinShow:false,
        dropdownItem:'',
        dropdownItemType:'',
        txt:'',
        totalRow:0,
        pageRow:10,
        currentNumber:1,
        memberList:{},
        registerTime:'',
        fixClassModel:false,
        memberId:'',
        memberInfo:{},
        calssItem:'',
        calssItemType:'',
      }
    },
    watch:{

    },
    created(){

    },
    methods:{
      chooiseItem(v){
      },
      search(){
      },
      reset(){
      },
      changePage(value){
      },
      changePageNum(value){
      },
    },
    filters:{
    }
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
    margin-top: 20px;
  }
  table{
    min-width: calc(100vw - 290px);
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
