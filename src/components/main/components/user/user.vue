<template>
  <div class="user-avatar-dropdown">
    <Dropdown @on-click="handleClick">
      <Badge :dot="!!messageUnreadCount">
        <Avatar :src="userAvatar"/>
      </Badge>
      <Icon :size="18" type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="message">
          消息中心<Badge style="margin-left: 10px" :count="messageUnreadCount"></Badge>
        </DropdownItem>
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>

    <Modal
      v-model="dialog"
      title="退出"
      :loading="loading"
      @on-ok="logout">
      <p>您确定退出系统，重新登录吗？</p>
    </Modal>
  </div>
</template>

<script>
import * as common from '@/common'
import * as config from '@/config'
export default {
  name: 'User',
  props: {
    userAvatar: {
      type: String,
      default: ''
    },
    messageUnreadCount: {
      type: Number,
      default: 0
    }
  },
  data(){
    return{
      dialog:false,
      loading:true,
    }
  },
  methods: {
    logout () {
      setTimeout(() => {
        this.$Message.success('退出系统成功');
        this.$router.replace({path:'/Login'})
      }, 1000);
    },
    message () {
      this.$router.push({
        name: 'message_page'
      })
    },
    handleClick (name) {
      switch (name) {
        case 'logout': this.dialog = true
          break
        case 'message': this.message()
          break
      }
    }
  }
}
</script>
<style scoped>
  .user-avatar-dropdown {
    cursor: pointer;
    display: inline-block !important;
  }
  .user-avatar-dropdown .ivu-badge-dot {
    top: 32px !important;
  }

</style>
