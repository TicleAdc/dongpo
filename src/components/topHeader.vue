<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-17 14:26:08
 * @FilePath: /dongpo/src/components/topHeader.vue
 * @LastEditTime: 2020-09-24 16:00:40
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
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router="">
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
import sidebarItem from '@/components/sidebarItem';
import index from '@/views/Index';
export default {
  computed: {
    routes() {
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
    getMenuList() {},
    mapDataToRoutes(routeData) {
      const that = this;
      return routeData.map((v) => {
        if (Object.is(v.children, null)) {
          return {
            path: v.menuuri,
            name: v.menuname,
            component: index,
          };
        } else {
          return {
            path: v.menuuri,
            name: v.menuname,
            component: index,
            children: that.mapDataToRoutes(v.children),
          };
        }
      });
    },
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
      > .el-menu-item,
      .el-submenu {
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
        a,
        .el-submenu__title {
          text-align: center;
          display: block;
          width: 100%;
          height: 100%;
          text-decoration: none;
          color: black;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          .el-submenu__icon-arrow {
            top: 52%;
            right: 2px;
          }
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
.el-menu.el-menu--popup.el-menu--popup-right-start {
  margin: 0;
  padding: 0;
  width: 110px;
  min-width: 110px;
  overflow: hidden;
  a {
    width: 110px;
    min-width: 110px;
  }
}
.el-menu.el-menu--popup.el-menu--popup-bottom-start {
  width: 165%;
  min-width: 60px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  > div,
  .el-menu-item {
    flex: 1;
    justify-content: center;
    align-items: center;
    border: 0.1px solid rgba(0, 0, 0, 0.075);
    border-right: none;
    height: 45px !important;
    line-height: 45px;
    width: 100%;
    height: 100%;
    padding: 5px 10%;
  }
  a,
  .el-submenu__title {
    text-align: center;
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: black;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .el-submenu__icon-arrow {
      right: 12px;
    }
  }
  .el-submenu__title {
    height: 45px;
  }
}
.el-menu--popup {
  margin: 0;
  padding: 0;
}
.el-menu.el-menu--popup.el-menu--popup-bottom-start a,
.el-menu.el-menu--popup.el-menu--popup-bottom-start .el-submenu__title {
  width: 100%;
}
.el-submenu__icon-arrow {
  display: none;
}
.el-icon-arrow-down:before {
  display: none;
}
</style>
