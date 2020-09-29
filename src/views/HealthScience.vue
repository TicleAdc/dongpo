<template>
  <div>
    <Title>
      <div slot="theme">健康科普</div>
    </Title>
    <div class="showlist">
      <msg-list
        title="健康科普"
        :list="list"
        @changeMsgListPage="getDataByPage"
      ></msg-list>
    </div>
  </div>
</template>

<script>
import msgList from '@/components/common/msgList';
import axios from '@/api/request.js';
export default {
  data() {
    return {
      showComponent: '',
      list: [],
    };
  },
  components: {
    msgList,
  },

  created() {
    this.getDataList();
  },

  methods: {
    getDataList() {
      axios.post(`/api/getTagPageList?tagid=6&pageNo=1&pagesize=10`, {}).then((res) => {
        // console.log(res);
        this.list = res.page.list;
        // console.log(this.list);
        // this.total = res.page.totalCount;
      });
    },
    getDataByPage(i) {
      // 通过页码改变取数据
      console.log(i);
    },
  },
};
</script>

<style lang="less" scoped>
.showlist {
  background-color: white;
}
</style>
