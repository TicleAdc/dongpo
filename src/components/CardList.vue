<template>
  <div class="datalist">
    <div class="card" v-for="item in dataList" :key="item.index">
      <div class="img">
        <img :src="item.columnBigimg" alt="" />
        <!-- <img :src="item.img" alt="" /> -->
      </div>
      <div class="icon"><img :src="item.columnSmallimg" alt="" /></div>
      <div class="name">{{ item.columnContext }}</div>
      <!-- <div class="name">{{ item.name }}</div> -->
      <button><img src="../assets/img/home/CheckMore.png" alt="" /> 查看更多</button>
    </div>
  </div>
</template>

<script>
import axios from '@/api/request.js';
export default {
  name: 'partmentcard',
  data() {
    return {
      dataList: [
        // {
        //   id: '1',
        //   url: require('@/assets/img/home/physicalExamination2.png'),
        //   icon: require('@/assets/img/home/register@2x.png'),
        //   name: '预约挂号',
        //   btn: '查看更多',
        // },
        // {
        //   id: '2',
        //   url: require('@/assets/img/home/ReportQuery2.png'),
        //   icon: require('@/assets/img/home/ReportQuery@2x.png'),
        //   name: '报告查询',
        //   btn: '查看更多',
        // },
        // {
        //   id: '3',
        //   url: require('@/assets/img/home/momAndBaby2.png'),
        //   icon: require('@/assets/img/home/momAndBaby@2x.png'),
        //   name: '母婴保健',
        //   btn: '查看更多',
        // },
        // {
        //   id: '4',
        //   url: require('@/assets/img/home/physicalExamination2.png'),
        //   icon: require('@/assets/img/home/physicalExamination@2x.png'),
        //   name: '体检查询',
        //   btn: '查看更多',
        // },
      ],
    };
  },
  created() {
    // setTimeout(this.getColumnData, 2000);
    this.getData();
  },
  methods: {
    getData() {
      axios.get(`/api/getColumnDataByPositionId?columnPositionId=partmentcard`).then((res) => {
        // console.log(res);
        this.dataList = res.frontmenuList;
      });
    },
  },
};
</script>

<style lang="less">
.datalist {
  display: flex;
  justify-content: space-between;
  padding: 30px 60px;
  background-color: white;
  .card {
    text-align: center;
    width: 272px;
    border-radius: 26px;
    background-color: white;
    box-shadow: 0px 5px 5px #88888838;
    .img {
      font-size: 0;
      img {
        width: 100%;
        font-size: 0;
      }
    }
    .icon {
      position: relative;
      top: -24px;
      img {
        width: 48px;
        height: 48px;
      }
    }
    .icon {
      position: relative;
      top: -30px;
      img {
        width: 20%;
        height: 20%;
      }
    }
    .name {
      // margin: 30px 0 20px 0;
      font-size: 21px;
      font-family: SourceHanSansCN-Normal;
    }
    button {
      margin: 15px 0 38px 0;
      width: 80%;
      height: 51px;
      background-color: white;
      border: 1px solid black;
      border-radius: 5px;
      font-size: 13.7px;
      font-family: SourceHanSansCN-Normal;
      color: #666666;
      cursor: pointer;
      img {
        width: 10px;
        height: 10px;
      }
    }
  }
}
</style>
