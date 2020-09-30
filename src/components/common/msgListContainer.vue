<template>
  <div class="container">
    <msg-list :list="list" :title="title"></msg-list>
  </div>
</template>

<script>
import msgList from './msgList';
import store from '../../store';
import { mapState } from 'vuex';

export default {
  store,
  components: {
    msgList,
  },
  props: {},
  data() {
    return {
      list: [],
      id: '',
      title: '',
    };
  },

  created() {
    this.getList();
  },

  computed: {
    ...mapState(['selectIndex']),
  },

  watch: {
    selectIndex() {
      this.getList();
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
