<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-17 10:15:31
 * @FilePath: /dongpo/src/App.vue
 * @LastEditTime: 2020-09-22 15:26:11
-->
<template>
  <div id="app">
    <top-header @click="jumpComponent"></top-header>
    <router-view :showComponentName="showComponentName"></router-view>
    <bottom-footer></bottom-footer>
  </div>
</template>

<script>
import topHeader from '@/components/topHeader';
import bottomFooter from '@/components/bottomFooter';
import { routes } from '@/router/index.js';

export default {
  name: 'App',
  components: {
    topHeader,
    bottomFooter,
  },
  computed: {
    routes() {
      return routes.filter((v) => v.name !== undefined);
    },
  },
  data() {
    return {
      showComponentName: 'home',
      activeIndex: '-1',
    };
  },
  methods: {
    jumpComponent(path) {
      this.showComponentName = path.slice(1);
    },
    setActiveIndex() {
      this.activeIndex =
        this.routes.findIndex((v) => {
          return v.path === this.$route.fullPath;
        }) +
        1 +
        '';
      this.showComponentName = this.routes[this.activeIndex - 1].path.slice(1);
    },
  },
  watch: {
    $route() {
      this.setActiveIndex();
    },
  },
  created() {
    this.setActiveIndex();
  },
};
</script>

<style>
#app {
  padding: 0 13.5%;
  background-color: #e8f1fa;
  height: 100%;
  min-height: 900px;
  min-width: 1050px;
}
</style>
