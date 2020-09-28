<template>
  <div>
    <Title>
      <div slot="theme">母婴保健</div>
    </Title>
    <div class="showlist">
      <msg-list
        title="母婴保健"
        :list="list"
        :total="total"
        @changeMsgListPage="getDataByPage"
      ></msg-list>
    </div>
  </div>
</template>

<script>
import axios from '@/api/request.js';
import msgList from '@/components/common/msgList';
import Title from '@/components/Title';
export default {
  components: {
    Title,
    msgList,
  },
  data() {
    return {
      list: [],
      total: 0,
    };
  },
  methods: {
    getDataList() {
      axios.get(`/api/getColumnDataByPositionId?columnPositionId=MYBJ`).then((res) => {
        console.log(res);
      });
    },
    getDataByPage(i) {
      // 通过页码改变取数据
      console.log(i);
    },
  },
  mounted() {
    this.getDataList();
  },
};
</script>

<style lang="less" scoped>
.showlist {
  background-color: white;
}
</style>
