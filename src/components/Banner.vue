<template>
  <el-carousel height="560px" :interval="2000" arrow="always">
    <el-carousel-item v-for="item in imglist" :key="item.id">
      <!-- <img :src="item.imgURL" alt="" :title="item.imgtitle" /> -->
      <img :src="item.imgurl" :title="item.title" alt="" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import axios from '@/api/request.js';
export default {
  name: 'topbanner',
  data() {
    return {
      imglist: [
        // {
        //   id: '01',
        //   imgUri: require('@/assets/img/home/main@2x.png'),
        //   title: 'test',
        // },
        // {
        //   id: '02',
        //   imgUri: require('@/assets/img/home/main@2x.png'),
        //   title: 'test',
        // },
        // {
        //   id: '03',
        //   imgUri: require('@/assets/img/home/main@2x.png'),
        //   title: 'test',
        // },
        // {
        //   id: '04',
        //   imgUri: require('@/assets/img/home/main@2x.png'),
        //   title: 'test',
        // },
      ],
    };
  },
  methods: {
    getData() {
      axios.get(`/api/getColumnDataByPositionId?columnPositionId=topbanner`).then((res) => {
        console.log(res);
      });
    },
  },
  mounted() {
    this.getData();
  },
  // created() {
  //   // 获取banner 图
  //   axios.post('/api/getBannerList').then((res) => {
  //     this.imglist = res.bannerlist[0].list;
  //     this.imglist.push(res.bannerlist[1].list[0]);
  //     // console.log(this.imglist);
  //   });
  // },
};
</script>

<style lang="less" scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
