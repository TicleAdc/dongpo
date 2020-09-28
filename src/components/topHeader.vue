<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-17 14:26:08
 * @FilePath: /dongpo/src/components/topHeader.vue
 * @LastEditTime: 2020-09-28 09:00:08
-->
<template>
  <div class="header">
    <div class="top">
      <div class="top-content flex-box">
        <div class="left">
          <img src="~@/assets/img/brand/leftLogo@2x.png" alt="" />
        </div>
        <span class="phone flex-1">门诊电话： 028-38235760</span>
        <div class="right">
          <img src="@/assets/img/home/web@2x.png" alt="" />
          <img src="@/assets/img/home/weChat@2x.png" alt="" />
        </div>
      </div>
    </div>
    <div class="position"></div>
    <div class="content-header">
      <img src="@/assets/img/brand/leftLogoBig@2x.png" alt="" />
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
          v-for="(item, index) in routes"
          :key="item.path"
          :index="index"
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
import request from '../api/request';

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
    getMenuList() {
      request
        .get('/api/getTreeList')
        .then((res) => {
          this.routeData = res.TreeMenu;
          this.$store.commit('setMenuData', this.routeData);
          this.trueRoutes.splice(
            1,
            this.trueRoutes.length - 1,
            ...this.mapDataToRoutes(this.routeData),
          );
          this.$router.addRoutes(this.mapDataToRoutes(this.routeData));
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
    getElementsClass(data) {
      let classobj = new Array();
      let classint = 0;
      let tags = document.getElementsByTagName('*');
      for (let i in tags) {
        if (tags[i].nodeType == 1) {
          if (tags[i].getAttribute('class') == data) {
            classobj[classint] = tags[i];
            classobj[classint].style.width = 80 / (this.$router.options.routes.length - 1) + '%';
            classint++;
          }
        }
      }
      return classobj;
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
    this.getElementsClass('el-menu--horizontal');
  },
};
</script>

<style lang="less" scoped>
@import url('../assets/css/base.less');
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
    .top-content {
      width: @width;
      min-width: @minWidth;
      max-width: @maxWidth;
      margin: 0 auto;
      padding-top: 15px;
      .phone {
        color: rgba(74, 93, 163, 1);
        font-size: 15.54px;
        text-align: left;
        font-family: SourceHanSansCN-Normal;
        margin-left: 5%;
      }
      .left {
        > img {
          width: 230px;
          height: 25px;
        }
      }
      .right {
        > img {
          height: 30px;
          width: auto;
          &:first-child {
            margin-right: 20px;
          }
        }
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
        .el-submenu__title a.active {
          color: #fff;
          background-color: #4a5da3;
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
  width: 100%;
  min-width: 60px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.4);
  > div,
  li {
    background-color: rgba(255, 255, 255, 0.4);
  }
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
.el-menu.el-menu--popup.el-menu--popup-bottom-start a,
.el-menu.el-menu--popup.el-menu--popup-bottom-start .el-submenu__title {
  font-size: 12px;
  font-family: SourceHanSansCN-Normal;
  color: #666666;
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
.header .el-menu > div > .el-menu-item a,
.header .el-menu > div .el-submenu a,
.header .el-menu > div > .el-menu-item .el-submenu__title,
.header .el-menu > div .el-submenu .el-submenu__title {
  color: #666666;
  font-size: 12px;
  font-family: SourceHanSansCN-Normal;
}
.el-menu.el-menu--popup li:hover {
  background-color: rgba(74, 93, 165, 0.6);
}
.el-menu.el-menu--popup li a:hover {
  color: #fff;
}
</style>
