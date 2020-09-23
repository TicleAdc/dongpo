<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-17 14:26:08
 * @FilePath: /dongpo/src/components/topHeader.vue
 * @LastEditTime: 2020-09-23 11:26:44
-->
<template>
  <div class="header">
    <div class="top">
      <div class="left">
        <img src="~@/assets/img/brand/左上角logo@2x.png" alt="" />
      </div>
      <span class="phone">门诊电话： 028-38235760</span>
      <div class="right">
        <img src="@/assets/img/home/web@2x.png" alt="" />
        <img src="@/assets/img/home/weChat@2x.png" alt="" />
      </div>
    </div>
    <div class="position"></div>
    <div class="content-header">
      <img src="@/assets/img/brand/左上角大logo@2x.png" alt="" />
      <el-input placeholder="请选择日期">
        <i slot="suffix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <div class="link">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <!-- <el-menu-item
          v-for="item in routes"
          :key="item.path"
          :index="item.path"
          @click="$emit('click', item.path)"
        >
          {{ item.name }}
        </el-menu-item> -->

        <sidebar-item
          v-for="item in routes"
          :key="item.path"
          :index="item.path"
          :item="item"
          @click="$emit('click', item.path)"
        ></sidebar-item>
      </el-menu>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
import axios from '@/api/request.js';
import sidebarItem from '@/components/sidebarItem';
export default {
  computed: {
    routes() {
      console.log(this.trueRoutes);
      return this.trueRoutes.filter((v) => v.name !== undefined);
    },
  },
  components: {
    sidebarItem,
  },
  methods: {
    setActiveIndex() {
      this.activeIndex = this.$route.path;
    },
    getMenuList() {
      axios
        .get('/api/getTreeList')
        .then((res) => {
          console.log(res.TreeMenu);
          this.routeData = res.TreeMenu;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    mapDataToRoutes() {},
  },

  data() {
    return {
      activeIndex: '-1',
      trueRoutes: this.$router.options.routes,
      routeData: [],
    };
  },
  watch: {
    $route() {
      this.setActiveIndex();
    },
    routes() {},
  },
  mounted() {
    this.setActiveIndex();
    this.getMenuList();
  },
  created() {
    console.log(this.$router.options.routes);
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
    .phone {
      color: rgba(74, 93, 163, 1);
      font-size: 15.54px;
      text-align: left;
      font-family: SourceHanSansCN-Normal;
      margin-left: 5%;
    }
    .left {
      margin-left: 13.5%;
      > img {
        width: 230px;
        height: 25px;
      }
    }
    .right {
      position: absolute;
      right: 13.5%;

      > img {
        width: 34.96px;
        height: 27.52px;
        &:first-child {
          margin-right: 31px;
        }
      }
    }
    @media screen and (max-width: 1000px) {
      .right {
        right: 0;
      }
    }
    @media screen and (max-width: 720px) {
      .right {
        display: none;
      }
    }
  }
  .position {
    height: 58.91px;
  }
  .content-header {
    display: flex;
    height: 139.62px;
    background-color: white;
    align-items: center;
    > img {
      width: 360px;
      height: 74px;
      margin-left: 5%;
      flex: 1;
    }
  }
  .link {
    height: 45px;
  }
}
</style>

<style lang="less">
.header {
  .el-menu {
    display: flex;
    align-items: center;
    > div {
      flex: 1;
      justify-content: center;
      align-items: center;
      border: 0.1px solid rgba(0, 0, 0, 0.075);
      border-right: none;
      height: 45px;
      line-height: 45px;
      &:last-child {
        border-right: 0.1px solid rgba(0, 0, 0, 0.075);
      }
      > .el-menu-item {
        flex: 1;
        justify-content: center;
        align-items: center;
        border: 0.1px solid rgba(0, 0, 0, 0.075);
        border-right: none;
        height: 45px;
        line-height: 45px;
        width: 100%;
        height: 100%;
        padding: 0;
        a {
          text-align: center;
          display: block;
          width: 100%;
          height: 100%;
          text-decoration: none;
          color: black;
        }
      }
    }
  }
  .content-header {
    .el-input {
      width: 482.77px;
      height: 39.27px;
      flex: 2;
      margin-left: 15%;
      margin-right: 6%;
      .el-input__suffix {
        display: inline-block;
        width: 78.16px;
        height: 39.27px;
        right: 0;
        cursor: pointer;
        .el-input__suffix-inner {
          display: inline-block;
          width: 100%;
          height: 100%;
          background-color: rgba(74, 93, 163, 1);
          font-size: 20px;
        }
      }
    }
  }
  .el-menu--horizontal > div > .el-menu-item.is-active {
    background-color: #4a5da3;
    color: white;
    > a {
      color: white;
    }
  }

  .el-menu--horizontal > div > .el-menu-item:not(.is-disabled):hover,
  .el-menu--horizontal > div > .el-menu-item:not(.is-disabled):focus {
    background-color: #4a5da3;
    color: white;
    > a {
      color: white;
    }
  }
}
</style>
