<template>
  <div>
    <div class="wrap">
      <div style="display: flex;align-items: center;width: 100%;justify-content: space-between">
        <div>
          <Dropdown @on-click="chooiseItem">
            <Button type="primary">
              {{dropdownItem ? dropdownItem : '支付方式'}}
              <Icon type="ios-arrow-down"></Icon>
            </Button>
            <DropdownMenu slot="list">
              <DropdownItem divided name="余额支付">余额支付</DropdownItem>
              <DropdownItem divided name="微信支付">微信支付</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Input v-model="orderNo" placeholder="请输入订单号" style="width: 251px;margin-left: 30px;" @on-keyup.13="search"/>
        </div>
        <div style="display: flex;align-items: center">
          <Button type="primary" style="width: 100px;margin-right: 10px;" @click="search">搜索</Button>
          <Button type="primary" style="width: 100px;" @click="reset">重置</Button>
        </div>
      </div>
      <div class="header">
          <div class="nav" style="width: 50px">序号</div>
          <div class="nav" style="width: 350px;">商品</div>
          <div class="nav" style="width: 220px;">卖家/买家</div>
          <div class="nav" style="width: 120px;">支付</div>
          <div class="nav" style="width: 120px">价格</div>
          <div class="nav" style="width: 220px">操作</div>
          <div class="nav" style="width: 80px">状态</div>
      </div>
      <div>
        <div v-if="!spinShow" style="overflow-x: auto">
          <div class="orderList">
            <div class="orderHeader">
              <section>
                <span style="width: 150px;display: inline-block">2019-08-08 08:08</span>
                订单号：12312312312312312312
              </section>
              <Input style="width: 200px;" placeholder="请输入备注" @on-focus="focus(item.orderNo,index)" @on-keyup.13="submit"/>
            </div>
            <table>
              <tr>
                <td>123123</td>
                <td>123123</td>
                <td>123123</td>
                <td>123123</td>
                <td>123123</td>
                <td>123123</td>
                <td>123123</td>
              </tr>
            </table>
          </div>
        </div>
        <Spin size="large" fix v-else></Spin>
      </div>

      <div class="footer">
        <Page ref="pages" :total="totalRow" show-sizer show-elevator show-total @on-change="changePage" @on-page-size-change="changePageNum"/>
      </div>
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
        orderNo:'',
        totalRow:0,
        pageRow:10,
        currentNumber:1,
        besendList:{},
        sendModel:false,
        sendType:'按订单发货',
        sendInfo:{},
        sendNum:'',
        sendOrderNo:'',

        sendCancelModel:false,
        sendCancelInfo:{},
        sendCancelOrderNo:'',
        cancelMark:'',
        cancelStatus:false,
        expressSn:'',

        sendFixModel:false,
        sendFixNum:'',
        sendFixInfo:{},
        sendFixExpressSn:'',
        sendFixOldExpressSn:'',
        sendFixOrderNo:'',
        sendFixMark:'',
        sendFixStatus:false,

        markModel:false,
        markText:'',
        markOrderNo:'',
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
  border-radius: 10px;
  min-height: 600px;
  padding: 20px;
  position: relative;
  overflow-x: auto;
}
  .header{
    margin-top: 20px;
    /*width: 100%;*/
    height: 60px;
    background-color: #e1f0fe;
    display: flex;
    z-index: 1;
    justify-content: space-between;
  }
  .nav{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: #515a6e;
    font-weight: bold;
    border-left: 1px #ffffff solid;
  }
.nav:nth-child(1){
  border-left: 0px;
}
.orderList{
  margin-top: 30px;
}
.orderHeader{
  border: 1px #eee solid;
  padding: 10px 20px;
  box-sizing: border-box;
  border-bottom: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}
table{
  min-width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px #eee solid;
  border-radius: 50px;
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
  padding: 20px 20px;
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
  width: 80%
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
.chooiseSendActive{
  color: limegreen;
  position: absolute;
  left: 0;
  top:0;
  width: 380px;
  height:100%;
  background-color: rgba(0,0,0,0.2);
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
