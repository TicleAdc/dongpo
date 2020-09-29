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
        // {
        //   columnContext:
        //     '我院儿童保健科成立于1996年,成立至今已有24年历史。现有医务人员13人,其中副主任医师3名,主治医师7名,早期综合发展训练师1名，护士2名。',
        //   time: '2020-2-10',
        // },
        // {
        //   columnContext:
        //     '我院儿童保健科成立于1996年,成立至今已有24年历史。现有医务人员13人,其中副主任医师3名,主治医师7名,早期综合发展训练师1名，护士2名。',
        //   time: '2020-2-10',
        // },
        // {
        //   columnContext:
        //     '我院儿童保健科成立于1996年,成立至今已有24年历史。现有医务人员13人,其中副主任医师3名,主治医师7名,早期综合发展训练师1名，护士2名。',
        //   time: '2020-2-10',
        // },
        // {
        //   columnContext:
        //     '我院儿童保健科成立于1996年,成立至今已有24年历史。现有医务人员13人,其中副主任医师3名,主治医师7名,早期综合发展训练师1名，护士2名。',
        //   time: '2020-2-10',
        // },
        // {
        //   columnContext:
        //     '我院儿童保健科成立于1996年,成立至今已有24年历史。现有医务人员13人,其中副主任医师3名,主治医师7名,早期综合发展训练师1名，护士2名。',
        //   time: '2020-2-10',
        // },
        // {
        //   columnContext:
        //     '我院儿童保健科成立于1996年,成立至今已有24年历史。现有医务人员13人,其中副主任医师3名,主治医师7名,早期综合发展训练师1名，护士2名。',
        //   time: '2020-2-10',
        // },
        // {
        //   columnContext:
        //     '我院儿童保健科成立于1996年,成立至今已有24年历史。现有医务人员13人,其中副主任医师3名,主治医师7名,早期综合发展训练师1名，护士2名。',
        //   time: '2020-2-10',
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
        this.total = res.page.totalCount;
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
