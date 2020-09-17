<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-17 14:26:08
 * @FilePath: /dongpo/src/components/topHeader.vue
 * @LastEditTime: 2020-09-17 15:57:09
-->
<template>
  <div class="header">
    <div class="top">
      <div class="left">
        <span>保妇幼健康</span>
        <div class="and">&</div>
        <span>护东坡未来</span>
      </div>
      <span class="phone">门诊电话： 028-38235760</span>
      <div class="right">
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
    <div class="position"></div>
    <div class="content-header">
      <img src="" alt="" />
      <div class="line"></div>
      <div class="description">
        <p class="title">DONGPO +</p>
        <p class="content">Maternal and Child Headlth Care And Family Planning Service Center</p>
        <p class="chinese">眉山市东坡区妇幼保健计划生育服务中心</p>
      </div>
      <el-input placeholder="请选择日期" suffix-icon="el-icon-search"> </el-input>
    </div>
    <div class="link">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item v-for="(item, index) in routes" :key="index" :index="index + 1 + ''">
          <router-link :to="item.path">
            {{ item.name }}
          </router-link>
        </el-menu-item>
        <!-- <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu> -->
      </el-menu>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
import { routes } from '@/router/index.js';
export default {
  computed: {
    routes() {
      return routes.filter((v) => v.name !== undefined);
    },
  },
  methods: {
    handleSelect(i) {
      const route = this.routes[i - 1];
      if (route.path !== this.$route.path) {
        this.$router.push(route);
      }
    },
  },

  data() {
    return {
      activeIndex: '1',
    };
  },
};
</script>

<style lang="less" scoped>
.header {
  .top {
    position: fixed;
    top: 0;
    left: 0;
    height: 58.91px;
    background-color: rgba(240, 240, 240, 1);
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    z-index: 10;
    .left {
      margin-left: 13.5%;
    }
  }
  .position {
    height: 58.91px;
  }
  .content-header {
    display: flex;
    height: 139.62px;
    background-color: white;
  }
}
</style>
