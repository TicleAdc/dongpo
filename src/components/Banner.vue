<template>
  <el-carousel height="560px" :interval="2000" arrow="always">
    <el-carousel-item v-for="item in imglist" :key="item.id">
      <img :src="item.url" alt="" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      imglist: [
        {
          id: '01',
          url: require('@/assets/img/home/main.png'),
        },
        {
          id: '02',
          url: require('@/assets/img/home/main.png'),
        },
        {
          id: '03',
          url: require('@/assets/img/home/main.png'),
        },
        {
          id: '04',
          url: require('@/assets/img/home/main.png'),
        },
      ],
    };
  },
};
</script>

<style lang="less">
img {
  width: 100%;
}
</style>
