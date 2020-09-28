<template>
  <div class="all">
    <msg-list
      title="医院新闻"
      :list="list"
      :total="total"
      @changeMsgListPage="getDataByPage"
    ></msg-list>
    <!-- <div style="padding-bottom: 330px"></div> -->
    <!-- <ul>
      <li v-for="item in datalist" :key="item.index">{{ item.contentsTitle }}</li>
    </ul> -->
  </div>
</template>

<script>
import axios from '@/api/request.js';
import msgList from '@/components/common/msgList';
export default {
  components: {
    msgList,
  },
  data() {
    return {
      list: [
        // {
        //   id: '1',
        //   columnContext: '1564564646',
        //   time: '2020-03-03',
        // },
        // {
        //   id: '1',
        //   columnContext: '1564564646',
        //   time: '2020-03-03',
        // },
        // {
        //   id: '1',
        //   columnContext: '1564564646',
        //   time: '2020-03-03',
        // },
        // {
        //   id: '1',
        //   columnContext: '1564564646',
        //   time: '2020-03-03',
        // },
        // {
        //   id: '1',
        //   columnContext: '1564564646',
        //   time: '2020-03-03',
        // },
      ],
      total: '',
    };
  },
  methods: {
    getDataList() {
      axios.post(`/api/getTagPageList?tagid=6&pageNo=1&pagesize=10`, {}).then((res) => {
        // console.log(res);
        this.list = res.page.list;
        // console.log(this.list);
        this.total = res.totalCount;
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
.all {
  background-color: #fff;
}
</style>
