<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-17 11:01:05
 * @FilePath: /dongpo/src/views/Overview.vue
 * @LastEditTime: 2020-09-17 11:01:11
-->
<template>
  <div class="overview">
    <Title>
      <div slot="theme">医院概况</div>
      <div slot="childtabs">
        <div
          @click="changeComponent(item.menuname)"
          class="tab"
          v-for="item in tabs"
          :key="item.id"
        >
          <a>{{ item.menuname }}</a>
        </div>
      </div>
    </Title>
    <component :is="showComponent"></component>
  </div>
</template>

<script>
import axios from '@/api/request.js';
import introduction from '@/views/Introduction';
import leader from '@/components/leader';
import honor from '@/components/honor';
import Title from '@/components/Title';
export default {
  data() {
    return {
      tabs: [],
      showlist: [],
      showComponent: 'introduction',
    };
  },
  components: {
    Title,
    introduction,
    leader,
    honor,
  },
  mounted() {
    this.getTabs();
  },
  methods: {
    getTabs() {
      axios.get('/api/getTreeList').then((res) => {
        // console.log(res);
        this.tabs = res.TreeMenu[5].children;
        // console.log(this.tabs);
      });
    },
    changeComponent(name) {
      // console.log(name);
      switch (name) {
        case '医院介绍':
          this.showComponent = 'introduction';
          // console.log(this.showComponent);
          break;
        case '领导团队':
          this.showComponent = 'leader';
          // console.log(this.showComponent);
          break;
        case '医院荣誉':
          this.showComponent = 'honor';
          break;
        default:
          this.showComponent = 'introduction';
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
a:active {
  border-top: 2px solid white;
}
a:visited {
  border-top: 2px solid white;
}
</style>
