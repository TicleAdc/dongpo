<template>
  <div class="pinklogo">
    <div class="logoimg"><img :src="backgroundimg" alt="" /></div>
    <div class="iconlist">
      <div class="icon" v-for="item in iconlist" :key="item.id">
        <div>
          <!-- <img :src="item.smallimgurl" alt="" /> -->
          <img :src="item.columnSmallimg" alt="" />
        </div>
        <div class="name">{{ item.columnContext }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/api/request.js';
import debug from '../data/debug';
export default {
  name: 'icon',
  data() {
    return {
      backgroundimg: require('@/assets/img/home/PinkLogo.png'),
      // iconlist: [],
      iconlist: debug.iconlist,
    };
  },
  methods: {
    getDepartmentList() {
      axios.get(`/api/getColumnDataByPositionId?columnPositionId=icon`).then((res) => {
        // console.log(res);
        this.iconlist = res.frontmenuList;
      });
    },
  },

  mounted() {
    // this.getDepartmentList();
  },
};
</script>

<style lang="less" scoped>
.pinklogo {
  background-color: rgba(255, 234, 239, 1);
  text-align: center;
  padding: 40px 0 50px 0;
  .logoimg {
    line-height: 60px;
    img {
      width: 292px;
      height: 38px;
    }
  }
  .iconlist {
    padding: 0 30px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    .icon {
      cursor: pointer;
      // display: inline-block;
      // display: flex;
      // flex-direction: row;
      // justify-content: space-between;
      // text-align: center;
      // padding: 0 20px;
      // img {
      //   width: 80px;
      //   height: 80px;
      // }
      .name {
        color: #666666;
        font-size: 15px;
        font-family: Helvetica;
      }
      .img {
        width: 80px;
        height: 80px;
      }
    }
  }
}
</style>
