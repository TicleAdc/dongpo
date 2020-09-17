<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-17 10:15:31
 * @FilePath: /dongpo/src/App.vue
 * @LastEditTime: 2020-09-17 16:26:19
-->
<template>
  <div id="app">
    <top-header></top-header>
    <router-view></router-view>
    <bottom-footer></bottom-footer>
  </div>
</template>

<script>
import topHeader from '@/components/topHeader';
import bottomFooter from '@/components/bottomFooter';
export default {
  name: 'App',
  components: {
    topHeader,
    bottomFooter,
  },
};
</script>

<style>
#app {
  padding: 0 13.5%;
  background-color: #e8f1fa;
  height: 100%;
  min-width: 1050px;
}
</style>
