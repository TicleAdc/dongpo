<template>
  <div class="container">
    <div class="top">
      <div class="vedio"><img :src="vedio" alt="" /></div>
      <div class="topcontext">{{}}</div>
    </div>
    <div class="mid">
      <div class="shownumber" v-for="item in numberList" :key="item.index">
        <div class="num">
          <span class="in">{{ item.columnContext }}</span
          ><span class="person">人</span>
        </div>
        <!-- <div class="line"></div> -->
        <div class="description">{{ item.columnTitle }}</div>
      </div>
    </div>
    <div class="bottomleft">
      <div class="showcontact" v-for="item in column" :key="item.index">
        <div class="img"><img :src="item.columnBigimg" alt="" /></div>
        <p class="title"></p>
        <p v-html="item.columnContext"></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/api/request.js';
export default {
  data() {
    return {
      vedio: '',
      numberList: [],
      column: [],
    };
  },
  methods: {
    getData() {
      axios.get(`/api/getColumnDataByPositionId?columnPositionId=YYJSMV`).then((res) => {
        // console.log(res);
        this.vedio = res.frontmenuList[0].columnUrl;
      });
      axios.get(`/api/getColumnDataByPositionId?columnPositionId=YYJSRS`).then((data) => {
        // console.log(data);
        this.numberList = data.frontmenuList;
      });
      axios.get(`/api/getColumnDataByPositionId?columnPositionId=YYJSBB`).then((data) => {
        // console.log(data);
        this.column = data.frontmenuList;
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="less" scoped>
.container {
  background-color: white;
  .top {
    display: flex;
    padding: 30px;
    .vedio {
      width: 50%;
      height: 250px;
      // background-color: aquamarine;
    }
    .topcontext {
      width: 40%;
      height: 250px;
      padding: 0 20px;
    }
  }
  .mid {
    padding-left: 50%;
    margin-top: 20px;
    // width: 100%;
    // height: 200px;
    background-color: rgba(173, 169, 169, 0.767);
    display: flex;
    // padding: 20px 10px 30px 10px;
    padding-top: 20px;
    padding-bottom: 30px;
    .shownumber {
      position: relative;
      right: 100;
      border: 1px solid white;
      width: 30%;
      // height: 150px;
      // line-height: 150px;
      display: flex;
      flex-direction: column;
      margin: 0 10px;
      padding-bottom: 10px;
      .num {
        padding-top: 30px;
        // height: 100px;
        // line-height: 80px;
        text-align: center;
        .in {
          display: inline-block;
          font-size: 24px;
          border-bottom: 1px solid white;
        }
        .person {
          padding-left: 5px;
          font-size: 10px;
        }
      }
      .description {
        // width: 100%;
        text-align: center;
        padding-top: 10px;
        font-size: 10px;
        padding-bottom: 20px;
      }
    }
  }
  .bottomleft {
    top: -70px;
    left: 10%;
    position: relative;
    height: 500px;
    width: 15%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    background-color: #4a5da3;
    // padding: 50px 50px 0 50px;
    padding-left: 4%;
    padding-right: 3%;
    padding-top: 50px;
    padding-bottom: 80px;
    .showcontact {
      color: white;
      padding-bottom: 30px;
      img {
        width: 155px;
        height: 100px;
      }
    }
  }
}
</style>
