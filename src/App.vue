<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" v-title="$route.meta.title" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" v-title="$route.meta.title" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif !important;
  margin: 0;
  padding:0;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height:100%;
}
</style>
