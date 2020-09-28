<template>
  <div class="all">
    <msg-list
      title="媒体报道"
      :list="list"
      :total="total"
      @changeMsgListPage="getDataByPage"
    ></msg-list>
    <div style="padding-bottom: 330px"></div>
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
        {
          columnContext: `
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates eaque porro id
    reiciendis sequi placeat sit libero dignissimos expedita accusamus ducimus, delectus eius
    provident, magni exercitationem assumenda? Cupiditate, odio?
    `,
          time: '2020-2-10',
        },
        {
          columnContext: `
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates eaque porro id
    reiciendis sequi placeat sit libero dignissimos expedita accusamus ducimus, delectus eius
    provident, magni exercitationem assumenda? Cupiditate, odio?
    `,
          time: '2020-2-10',
        },
        {
          columnContext: `
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates eaque porro id
    reiciendis sequi placeat sit libero dignissimos expedita accusamus ducimus, delectus eius
    provident, magni exercitationem assumenda? Cupiditate, odio?
    `,
          time: '2020-2-10',
        },
        {
          columnContext: `
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates eaque porro id
    reiciendis sequi placeat sit libero dignissimos expedita accusamus ducimus, delectus eius
    provident, magni exercitationem assumenda? Cupiditate, odio?
    `,
          time: '2020-2-10',
        },
        {
          columnContext: `
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates eaque porro id
    reiciendis sequi placeat sit libero dignissimos expedita accusamus ducimus, delectus eius
    provident, magni exercitationem assumenda? Cupiditate, odio?
    `,
          time: '2020-2-10',
        },
      ],
      total: 5,
    };
  },
  methods: {
    getDataList() {
      axios.post(`/api/getTagPageList?tagid=8&pageNo=1&pagesize=10`, {}).then((res) => {
        console.log(res);
      });
    },
    getDataByPage(i) {
      // 通过页码改变取数据
      console.log(i);
    },
  },
  mounted() {
    // this.getDataList();
  },
};
</script>

<style lang="less" scoped>
.all {
  background-color: #fff;
}
</style>
