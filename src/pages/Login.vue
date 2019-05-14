<template>
  <div class="wrap">
    <div class="content hvr-bob" id="content">
      <Divider style="color: #2d8cf0;font-size: 16px;">登录</Divider>
      <div class="inputWrapper">
        <input
          type="tel"
          maxlength="11"
          v-model="phone"
          placeholder="请输入手机号"
        />
      </div>
      <div class="inputWrapper">
        <input
          style="margin-top: 25px;"
          type="password"
          :maxlength="4"
          v-model="sms"
          placeholder="请输入验证码"
        />
        <Button style="width: 80px;" type="primary" class="sendSms" @click="sendCode">
          {{sendCodeStatus}}
        </Button>
      </div>
      <Verification @confirmStatus="verifySucc"/>
      <!--<Checkbox v-model="rempassword" style="margin-top: 10px;"><span style="margin-left: 5px;">记住登录状态</span></Checkbox>-->
      <Button v-waves style="font-size:14px;width: 100%;margin-top: 25px;height: 40px;" type="primary" :loading="loading" icon="ios-power" @click="login" @keyup.13="login">
        <span v-if="!loading">点击登录</span>
        <span v-else>登录中...</span>
      </Button>
    </div>

    <particlesJS/>
  </div>
</template>
<script>
  import particlesJS from '../components/ParticlesJS'
  import Verification from '../components/Verification'
  import * as common from '../common'
  import * as config from '../config'
  export default {
    name: 'App',
    data(){
      return {
        phone:'',
        sms:'',
        sendCodeStatus:'点击发送',
        clickStatus:true,
        loading:false,
        rempassword:false,
        verifyStatus:false,
      }
    },
    methods:{
      sendCode(){
        if (this.clickStatus == false){
          return
        }
        if (!common.isphone(this.phone)){
          this.$Message.warning('请先输入正确的手机号');
          return
        }
        if (this.phone){
          setTimeout(() => {
            this.$Message.success('发送验证码成功');
            this.clickStatus = false
            let time = 60
            this.sendCodeStatus = time + '(s)'
            let timeOver = setInterval(()=>{
              time --
              this.sendCodeStatus = time + '(s)'
              if (time == 0){
                clearInterval(timeOver)
                this.sendCodeStatus = '点击发送'
                this.clickStatus = true
              }
            },1000)
          },1000)
        }
      },
      verifySucc(data){
        this.verifyStatus = data
      },
      login(){
        if (!common.isphone(this.phone)){
          this.$Message.warning('请先输入正确的手机号');
        }else if (!this.sms || this.sms.length != 4){
          this.$Message.warning('请先输入正确的验证码');
        }else if (!this.verifyStatus){
          this.$Message.warning('请先进行滑块验证');
        }
        else {
          this.loading = true
          setTimeout(()=>{
            this.$Message.success('欢迎进入商城管理系统');
            this.$router.replace({path:'/Home'})
          },1000)
        }
      }
    },
    components: { particlesJS,Verification },
  }
</script>
<style scoped>
  .inputWrapper{
    display: inline-block;
    width: 100%;
    position: relative;
    vertical-align: middle;
    line-height: normal;
  }
  .inputWrapper input{
    display: inline-block;
    width: 100%;
    height:40px;
    line-height: 1.5;
    padding: 4px 7px;
    font-size: 14px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    background-color: #ffffff;
    position: relative;
    cursor: text;
    outline: none;
    transition: all 0.2s;
  }
  .inputWrapper input:hover{
    border: 1px solid #57a3f3;
  }
  .inputWrapper input:focus{
    border: 1px solid #57a3f3;
    outline: 0;
    -webkit-box-shadow: 0 0 0 2px rgba(45, 140, 240, .2);
    box-shadow: 0 0 0 2px rgba(45, 140, 240, .2)
  }
  .inputWrapper input::-moz-placeholder {
    color: #c5c8ce;
    opacity: 1
  }

  .inputWrapper input:-ms-input-placeholder {
    color: #c5c8ce
  }
  .inputWrapper input::-webkit-input-placeholder {
    color: #c5c8ce
  }
  .sendSms{
    position: absolute;
    right: 0;
    bottom:0;
    height:40px;
    border-radius: 0 4px 4px 0;
  }
  .wrap{
    height: 100vh;
    background-image: url("../assets/images/bj3.jpg");
    background-size: 100% 100%;
    overflow: hidden;
    z-index: 1;
    position: relative;
  }
  .wrap .content{
    top: calc(50% - 175px);
    /*transform:translate(0%,-50%);*/
    width: 350px;
    padding: 20px 40px 50px 40px;
    position: absolute;
    right: 10%;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    /*background-color: hsla(199, 98%, 48%, .2);*/
    border-color: hsl(199, 98%, 48%);
    border-radius: 5px;
    transition: all 0.5s;
  }

  @-webkit-keyframes hvr-bob {
    0% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
    50% {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
    }
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
  @keyframes hvr-bob {
    0% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
    50% {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
    }
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
  @-webkit-keyframes hvr-bob-float {
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
  @keyframes hvr-bob-float {
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
  .hvr-bob {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  }
  .hvr-bob:hover, .hvr-bob:focus, .hvr-bob:active {
    -webkit-animation-name: hvr-bob-float, hvr-bob;
    animation-name: hvr-bob-float, hvr-bob;
    -webkit-animation-duration: .3s, 1.5s;
    animation-duration: .3s, 1.5s;
    -webkit-animation-delay: 0s, .3s;
    animation-delay: 0s, .3s;
    -webkit-animation-timing-function: ease-out, ease-in-out;
    animation-timing-function: ease-out, ease-in-out;
    -webkit-animation-iteration-count: 1, infinite;
    animation-iteration-count: 1, infinite;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-direction: normal, alternate;
    animation-direction: normal, alternate;
  }
</style>
