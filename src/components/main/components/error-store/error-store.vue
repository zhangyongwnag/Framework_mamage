<template>
  <div class="error-store">
    <Badge dot :count="countComputed">
      <div @click="openErrorLoggerPage">
        <Tooltip content="日志" placement="bottom">
        <Icon :size="20" type="ios-bug"/>
        </Tooltip>
      </div>
    </Badge>
  </div>
</template>

<script>
export default {
  name: 'ErrorStore',
  props: {
    count: {
      type: Number,
      default: 0
    },
    hasRead: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    countComputed () {
      return this.hasRead ? 0 : this.count
    }
  },
  methods: {
    openErrorLoggerPage () {
//      this.$router.push({
//        name: 'error_logger_page'
//      })
      this.$Message.info('暂无错误日志')
    }
  }
}
</script>

<style>
  .error-store{
    margin-right: 12px;
  }
/*.error-store{*/
  /*margin-right: 12px;*/
  /*.ivu-badge-dot{*/
    /*top: 20px;*/
  /*}*/
  /*.ivu-btn.ivu-btn-text{*/
    /*padding: 5px 1px 6px;*/
  /*}*/
/*}*/
</style>
