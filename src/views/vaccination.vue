<template>
  <section class="container">
    <path-nav :pathes="pathes"></path-nav>
    <div class="flex-box">
      <menu-list title="科室设置" :list="menuList" bottom="专家介绍"></menu-list>
      <div class="flex-1">
        <context title="预防接种" description="科室介绍">
          <template slot="context">
            <p>我院儿童保健院成立于1996年，我院儿童保健院成立于1996年。</p>
            <p>我院儿童保健院成立于1996年，我院儿童保健院成立于1996年，我院儿童保健院成立于1996年，我院儿童保健院成立于1996年</p>
            <p>我院儿童保健院成立于1996年，我院儿童保健院成立于1996年。</p>
            <p>我院儿童保健院成立于1996年，我院儿童保健院成立于1996年。</p>
          </template>
        </context>
      </div>
    </div>
  </section>
</template>

<script>
import pathNav from '../components/pathNav';
import menuList from '../components/menuList';
import context from '../components/context';
import debug from '../data/debug';

export default {
  name: 'vaccination',
  components: {
    pathNav,
    menuList,
    context,
  },
  data() {
    return {
      pathes: debug.pathes,
      menuList: debug.menuList,
    };
  },
};
</script>

<style lang="less" scoped>
@import url('@/assets/css/base.less');
.container {
  padding: 50px 0;
  background-color: #fff;
}
</style>