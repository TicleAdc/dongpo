<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-17 11:13:06
 * @FilePath: /dongpo/src/views/SpecialActivity.vue
 * @LastEditTime: 2020-09-22 10:06:36
-->
<template>
  <div class="body">
    <Title>
      <div slot="theme">专题活动</div>
    </Title>
    <div class="headImg">
      <el-carousel indicator-position="none">
        <el-carousel-item v-for="item in list" :key="item.index">
          <img :src="item.columnBigimg" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="contents">
      <honorwall
        v-for="(item, index) in honor"
        :key="index"
        :img="item.columnBigimg"
        :title="item.columnContext"
        :time="item.columnData"
      ></honorwall>
    </div>
    <!-- <pagenation></pagenation> -->
  </div>
</template>

<script>
import request from '@/api/request.js';
// import pagenation from '@/components/pageNation';
import Title from '@/components/Title';
import honorwall from '@/components/common/honorwall';
export default {
  data() {
    return {
      list: [
        // {
        //   id: '1',
        //   url: require('@/assets/img/home/thematicActivities1@2x.png'),
        //   title: '新时代，新征程，新目标',
        //   text: '新时代新征程新目标',
        //   time: '发布时间:2020-09-19',
        // },
        // {
        //   id: '2',
        //   url: require('@/assets/img/home/thematicActivities1@2x.png'),
        //   title: '新时代，新征程，新目标',
        //   text: '新时代新征程新目标',
        //   time: '发布时间:2020-09-19',
        // },
        // {
        //   id: '3',
        //   url: require('@/assets/img/home/thematicActivities1@2x.png'),
        //   title: '新时代，新征程，新目标',
        //   text: '新时代新征程新目标',
        //   time: '发布时间:2020-09-19',
        // },
        // {
        //   id: '4',
        //   url: require('@/assets/img/home/thematicActivities1@2x.png'),
        //   title: '新时代，新征程，新目标',
        //   text: '新时代新征程新目标',
        //   time: '发布时间:2020-09-19',
        // },
        // {
        //   id: '5',
        //   url: require('@/assets/img/home/thematicActivities1@2x.png'),
        //   title: '新时代，新征程，新目标',
        //   text: '新时代新征程新目标',
        //   time: '发布时间:2020-09-19',
        // },
      ],
      honor: [],
    };
  },
  components: {
    Title,
    // pagenation,
    honorwall,
  },
  methods: {
    getData() {
      request.get(`/api/getColumnDataByPositionId?columnPositionId=ZTHDLB`).then((res) => {
        // console.log(res);
        this.list = res.frontmenuList;
      });
      request.get(`/api/getColumnDataByPositionId?columnPositionId=YYRY`).then((res) => {
        // console.log(res);
        this.honor = res.frontmenuList;
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="less" scoped>
.headImg {
  img {
    height: 100%;
    width: 100%;
  }
}
.contents {
  display: flex;
  padding: 30px;
  // padding-left: 10%;
  // display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.body {
  background-color: #fff;
}
</style>
