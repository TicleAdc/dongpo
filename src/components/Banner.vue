<template>
  <div class="banner_index">
    <el-carousel height="560px" :interval="3000" arrow="always">
      <el-carousel-item v-for="item in imglist" :key="item.id">
        <img class="img" :src="item.columnBigimg" alt="" :title="item.title" />
        <!-- <img :src="item.imgurl" :title="item.title" alt="" /> -->
      </el-carousel-item>
    </el-carousel>
  </div>
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
        // console.log(res);
        // this.imglist.push(res.frontmenulist[2].columnBigimg);
        // this.imglist.push(res.frontmenulist[3].columnBigimg);
        this.imglist = res.frontmenuList;
        // console.log(this.imglist);
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="less">
.banner_index {
  .img {
    width: 100%;
    height: 100%;
  }
  .el-carousel__arrow {
    width: 80px !important;
    height: 80px !important;
    font-size: 38px;
    line-height: 2;
    background-color: rgba(255, 255, 255, 0.6);
  }
  .el-carousel__button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .el-carousel__indicator.is-active button {
    background-color: #f3969b;
  }
}
</style>
