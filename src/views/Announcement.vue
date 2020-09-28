<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-24 14:51:52
 * @FilePath: /dongpo/src/views/Announcement.vue
 * @LastEditTime: 2020-09-28 09:52:24
-->
<template>
  <div class="announcement">
    <Title>
      <div slot="theme">通知公告</div>
    </Title>
    <el-tabs v-model="activeName" @tab-click="changeView">
      <el-tab-pane
        v-for="item in announcement"
        :label="item.name"
        :name="item.path"
        :key="item.path"
      >
      </el-tab-pane>
    </el-tabs>
    <component :is="showComponent"></component>
  </div>
</template>

<script>
import hospitalannounc from '@/components/hospitalannounc';
import biddinginformation from '@/components/biddinginformation';
import joboffers from '@/components/joboffers';
import Title from '@/components/Title';

// 跳转路由
export default {
  data() {
    return {
      activeName: '',
      announcement: [],
    };
  },
  methods: {
    changeView() {},
  },
  created() {
    this.announcement = this.$router.options.routes.find(
      (v) => v.path === '/announcement',
    ).children;
    this.activeName = this.announcement[0].path;
  },
  computed: {
    showComponent() {
      return this.activeName.slice(1);
    },
  },
  components: {
    hospitalannounc,
    biddinginformation,
    joboffers,
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
.announcement {
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
.announcement {
  .el-tabs__nav-wrap.is-top {
    background-color: #4d5aa2;
    color: white;
    padding-left: 15%;
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
