<template>
  <div class="container">
    <Title v-if="showTitle">
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
    <msg-list :list="list" :title="title"></msg-list>
  </div>
</template>

<script>
import Title from '@/components/Title';
import msgList from './msgList';
import store from '../../store';
import { mapState } from 'vuex';

export default {
  store,
  components: {
    msgList,
    Title,
  },
  props: {},
  data() {
    return {
      list: [],
      id: '',
      title: '',
      showTitle: false,
      activeName: '',
      routeData: [],
      index: '',
    };
  },

  created() {
    this.getList();
    this.setTab();
  },

  computed: {
    ...mapState(['selectIndex']),
  },

  watch: {
    selectIndex() {
      this.getList();
    },
    $route() {
      this.setTab();
    },
    activeName(val) {
      const childrenIndex = this.routeData.findIndex((value) => value.path == val);
      this.$store.commit('setIndex', {
        index: this.index - 1,
        children: childrenIndex,
      });
    },
  },

  methods: {
    getInfo() {
      let data = this.$store.state.menuData;
      let index = this.$store.state.selectIndex;
      let infoVal = data[index.index].children[index.children].menueparam[0];
      let menuname = data[index.index].children[index.children].menuname;
      this.id = infoVal.id;
      this.title = menuname;
      this.type = infoVal.type;
    },
    setTab() {
      if (this.$route.path !== this.$route.matched[0].path) {
        this.showTitle = true;
        this.routeData = this.$router.options.routes.find(
          (v) => v.path === this.$route.matched[0].path,
        ).children;
        this.activeName = this.routeData.find((v) => v.path === this.$route.path).path;
        this.index = this.$router.options.routes.findIndex(
          (v) => v.path === this.$route.matched[0].path,
        );
      }
    },
    async getList() {
      this.list = [];
      this.getInfo();
      if (this.type !== 0) return;
      let query = `tagid=${this.id}&pageNo=1&pagesize=20`;
      await this.http.post(`/api/getTagPageList?${query}`).then((res) => {
        this.list = res.page.list;
      });
    },
  },
};
</script>

<style scoped>
.container {
  background: #fff;
}
</style>
