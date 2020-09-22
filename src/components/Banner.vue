<template>
  <el-carousel height="560px" :interval="2000" arrow="always">
    <el-carousel-item v-for="item in imglist" :key="item.id">
      <img :src="item.imgUri" alt="" :title="item.title" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import axios from '@/api/request.js';
export default {
  data() {
    return {
      imglist: [
        {
          id: '01',
          imgUri: require('@/assets/img/home/main@2x.png'),
          title: 'test',
        },
        {
          id: '02',
          imgUri: require('@/assets/img/home/main@2x.png'),
          title: 'test',
        },
        {
          id: '03',
          imgUri: require('@/assets/img/home/main@2x.png'),
          title: 'test',
        },
        {
          id: '04',
          imgUri: require('@/assets/img/home/main@2x.png'),
          title: 'test',
        },
      ],
    };
  },
  methods: {},
  mounted() {},
  created() {
    // 获取banner 图
    axios.post('/api/getBannerList').then((res) => {
      this.imglist = res.bannerlist;
    });
  },
};
</script>

<style lang="less" scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
