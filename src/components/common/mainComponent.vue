<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-24 14:51:52
 * @FilePath: /dongpo/src/components/common/mainComponent.vue
 * @LastEditTime: 2020-09-28 15:30:43
-->
<template>
  <div class="routeData">
    <Title>
      <div slot="theme">{{ title }}</div>
      <template #childtabs>
        <el-tabs v-model="activeName">
          <el-tab-pane
            v-for="item in routeData"
            :label="item.name"
            :name="item.path"
            :key="item.path"
          >
          </el-tab-pane>
        </el-tabs>
      </template>
    </Title>
    <slot name="component"></slot>
  </div>
</template>

<script>
import Title from '@/components/Title';

// 跳转路由
export default {
  data() {
    return {
      activeName: '',
      routeData: [],
    };
  },
  props: {
    currentRoute: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  created() {
    this.routeData = this.$router.options.routes.find((v) => v.path === this.currentRoute).children;
    this.activeName = this.routeData[0].path;
  },
  watch: {
    activeName() {
      this.$emit('changeShowComponent', this.activeName.slice(1));
    },
  },
  model: {
    props: 'showComponent',
    event: 'changeShowComponent',
  },
  components: {
    Title,
  },
};
</script>

<style lang="less" scoped>
.tab {
  display: inline-block;
  margin: 20px;
  cursor: pointer;
  a {
    color: white;
    text-decoration: none;
  }
}
a:active,
a:visited {
  border-top: 2px solid white;
}
.routeData {
  background-color: white;
}
.newslist {
  padding-top: 10px;
  ul {
    list-style: none;
    li {
      font-size: 10px;
      padding: 5px;
      border-bottom: 1px solid rgba(173, 170, 170, 0.863);
      .time {
        float: right;
      }
    }
  }
}
</style>

<style lang="less">
.routeData {
  .el-tabs__nav-wrap.is-top {
    background-color: #4d5aa2;
    color: white;
    padding-left: 15%;
    margin: 15px 0 0px;
    .el-tabs__item.is-active {
      color: white;
    }
    .el-tabs__item {
      color: rgba(255, 255, 255, 0.384);
      padding: 0 30px;
    }
    .el-tabs__active-bar {
      background-color: #fff;
      bottom: inherit;
    }
  }
}
</style>

<style lang="less">
.announcement {
  .el-tabs__nav-wrap.is-top {
    background-color: #4d5aa2;
    color: white;
    padding-left: 15%;
    margin: 15px 0 0px;
    .el-tabs__item.is-active {
      color: white;
    }
    .el-tabs__item {
      color: rgba(255, 255, 255, 0.384);
      padding: 0 30px;
    }
    .el-tabs__active-bar {
      background-color: #fff;
      bottom: inherit;
    }
  }
}
</style>
