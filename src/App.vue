<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-17 10:15:31
 * @FilePath: /dongpo/src/App.vue
 * @LastEditTime: 2020-09-17 15:12:09
-->
<template>
  <div id="app">
    <top-header></top-header>
    <router-view></router-view>
  </div>
</template>

<script>
import topHeader from '@/components/topHeader';
export default {
  name: 'App',
  components: {
    topHeader,
  },
};
</script>

<style>
#app {
  padding: 0 13.5%;
  background-color: #e8f1fa;
  height: 100%;
}
</style>
