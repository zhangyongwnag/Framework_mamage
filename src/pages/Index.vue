<template>
  <div>
    <Button type="primary" v-waves v-draggable="options" id="button">Primary</Button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options:{
          trigger: '#button',
          body: '#button'
        }
      }
    },
    created(){
      console.log(this.$route)
    }
  }
</script>
<style scoped>

</style>
