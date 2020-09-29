<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-17 10:15:31
 * @FilePath: /dongpo/src/App.vue
 * @LastEditTime: 2020-09-29 14:11:59
-->
<template>
  <div id="app">
    <top-header></top-header>
    <router-view :showComponentName="showComponentName"></router-view>
    <bottom-footer></bottom-footer>
  </div>
</template>

<script>
import topHeader from '@/components/topHeader';
import bottomFooter from '@/components/bottomFooter';
import { routes } from '@/router/index.js';
import { msgListContainer } from '@/util/mapComponent.js';
// 至少留一个home在首页
// import home from '@/views/Home.vue';

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
    jumpComponent() {
      // if (msgListContainer[path.slice(1)] !== undefined) {
      //   this.showComponentName = msgListContainer[path.slice(1)];
      // } else {
      //   this.showComponentName = path.slice(1);
      // }
    },
    setActiveIndex() {
      this.activeIndex = this.$route.path;
      const ary = this.activeIndex.split('/');
      const componentName = ary[ary.length - 1];
      if (msgListContainer[componentName] !== undefined) {
        this.showComponentName = msgListContainer[componentName];
      } else {
        this.showComponentName = componentName;
      }
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
  mounted() {
    // setTimeout(() => {
    //   console.log(1);
    //   this.$router.options.routes.splice(1, 12, {
    //     name: 'test',
    //     path: '/test',
    //     component: home,
    //   });
    //   console.log(this.$router, this.$route);
    //   console.log(1);
    // }, 3000);
  },
};
</script>

<style lang="less" scoped>
@import url('./assets/css/base.less');
#app {
  position: relative;
  background-color: #e8f1fa;
  width: @width;
  height: 100%;
  // margin: 0 auto;
  padding: 0 10%;
  min-height: 900px;
  min-width: @minWidth;
  max-width: @maxWidth;
}
</style>
