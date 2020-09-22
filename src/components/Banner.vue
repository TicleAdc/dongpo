<template>
  <el-carousel height="560px" :interval="2000" arrow="always">
    <el-carousel-item v-for="item in imglist" :key="item.id">
      <img :src="item.url" alt="" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { post } from '@/api/request.js';
export default {
  data() {
    return {
      imglist: [
        {
          id: '01',
          url: require('@/assets/img/home/main@2x.png'),
        },
        {
          id: '02',
          url: require('@/assets/img/home/main@2x.png'),
        },
        {
          id: '03',
          url: require('@/assets/img/home/main@2x.png'),
        },
        {
          id: '04',
          url: require('@/assets/img/home/main@2x.png'),
        },
      ],
    };
  },
  methods: {
    getBannerList() {
      post('/api/getBannerList', {})
        .then((res) => {
          console.log(res.data);
          // this.imglist = res.data
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getBannerList();
  },
};
</script>

<style lang="less" scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
