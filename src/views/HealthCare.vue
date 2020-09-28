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
      total: 7,
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
