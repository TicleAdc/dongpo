<template>
  <div class="container">
    <div class="top">
      <div class="vedio"><img :src="vedio" alt="" /></div>
      <!-- <div>{{}}</div> -->
      <div>
        <subtitle :title="contentTitle"></subtitle>
        <div class="topcontext" v-html="content"></div>
      </div>
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
    <div class="bottom">
      <div class="column">
        <div class="contact" v-for="item in column" :key="item.index">
          <div class="img">
            <img :src="item.columnBigimg" alt="" />
          </div>
          <div class="number" v-html="item.columnContext"></div>
        </div>
      </div>
      <div class="text" v-html="bottomContext"></div>
    </div>
  </div>
</template>

<script>
import subtitle from '@/components/common/subTitle';
import axios from '@/api/request.js';
export default {
  data() {
    return {
      vedio: '',
      numberList: [],
      column: [],
      content: '',
      contentTitle: '',
      bottomContext: '',
      bottom: '',
    };
  },
  components: {
    subtitle,
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
      axios.get(`/api/info/1`).then((res) => {
        // console.log(res);
        this.content = res.contents.contentsdata;
        this.contentTitle = res.contents.contentsTitle;
      });
      axios.get(`/api/info/2`).then((res) => {
        // console.log(res.contents.contentsdata);
        this.bottomContext = res.contents.contentsdata;
        // this.contentTitle = res.contents.contentsTitle;
      });
      axios.get(`/api/info/254`).then((res) => {
        // console.log(res.contents.contentsdata);
        this.bottom = res.contents.contentsdata;
        // this.contentTitle = res.contents.contentsTitle;
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
    // justify-content: space-between;
    .vedio {
      // flex: 1;
      // width: 180%;
      // height: 250px;
      margin-right: 50px;
      // background-color: aquamarine;
      img {
        width: 400px;
      }
    }
    .topcontext {
      // flex: 1;
      width: 90%;
      // height: 250px;
      padding: 0 20px;
      font-size: 14px;
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
  .bottom {
    padding: 0 30px;
    .column {
      width: 15%;
      padding: 50px;
      background-color: #4a5da3;
      color: white;
      float: left;
      margin-top: -70px;
      margin-right: 20px;
      margin-bottom: 10px;
      .contact {
        padding-bottom: 50px;
        .img {
          margin-bottom: 10px;
        }
      }
      .number {
        font-size: 12px;
      }
    }
  }
}
.contact:last-child {
  margin-bottom: 80px;
}
.text {
  padding-bottom: 60px;
  font-size: 14px;
}
</style>

<style lang="less">
// p {
//   padding: 3px 0;
// }
//
</style>
