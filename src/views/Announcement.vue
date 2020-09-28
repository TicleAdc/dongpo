<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-24 14:51:52
 * @FilePath: /dongpo/src/views/Announcement.vue
 * @LastEditTime: 2020-09-28 09:06:01
-->
<template>
  <div class="body">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="医院公告" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="招标信息" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="招聘信息" name="third">角色管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// 跳转路由
export default {
  data() {
    return {
      checkList: [
        {
          id: '1',
          name: '医院公告',
        },
        {
          id: '2',
          name: '招标信息',
        },
        {
          id: '3',
          name: '招聘信息',
        },
      ],
      showComponent: 'hospitalBulletin',
    };
  },
  components: {},
  methods: {
    changeComponent(id) {
      switch (Number(id)) {
        case 1:
          this.showComponent = 'hospitalBulletin';
          break;
        case 2:
          this.showComponent = 'tenderInfo';
          break;
        case 3:
          this.showComponent = 'recruitment';
          break;
        default:
          this.showComponent = 'hospitalBulletin';
          break;
      }
    },
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
.body {
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
