<template>
  <div class="datalist">
    <div class="card" v-for="item in dataList" :key="item.index">
      <div class="img">
        <img :src="item.backimgURL" alt="" />
      </div>
      <!-- <div class="icon"><img :src="item.icon" alt="" /></div> -->
      <div class="name">{{ item.description }}</div>
      <button><img src="../assets/img/home/CheckMore.png" alt="" /> 查看更多</button>
    </div>
  </div>
</template>

<script>
import axios from '@/api/request.js';
export default {
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
        //   icon: require('@/assets/img/home/momAndBaby@2x.png'),
        //   name: '报告查询',
        //   btn: '查看更多',
        // },
        // {
        //   id: '3',
        //   url: require('@/assets/img/home/momAndBaby2.png'),
        //   icon: require('@/assets/img/home/Pediatrics@2x.png'),
        //   name: '母婴保健',
        //   btn: '查看更多',
        // },
        // {
        //   id: '4',
        //   url: require('@/assets/img/home/physicalExamination2.png'),
        //   name: '体检查询',
        //   btn: '查看更多',
        // },
      ],
    };
  },
  created() {
    setTimeout(this.getColumnData, 2000);
  },
  methods: {
    getColumnData() {
      let _this = this;
      axios
        .post('/api/getColumnList', {})
        .then((res) => {
          // console.log(res.ColumnData);
          // console.log(res.data[0].columndata);
          _this.dataList = res.ColumnData[0].columndata.list;
        })
        .catch((err) => {
          console.log(err);
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
    border-radius: 25px;
    text-align: center;
    flex: 1;
    margin: 0 1%;
    background-color: white;
    box-shadow: 0px 0px 5px #888888;
    .img {
      img {
        width: 100%;
        height: 100%;
      }
    }
    .name {
      margin: 50px 0 20px 0;
    }
    button {
      margin-bottom: 38px;
      width: 60%;
      height: 30px;
      background-color: white;
      border: 1px solid black;
      border-radius: 5px;
      cursor: pointer;
      img {
        width: 10px;
        height: 10px;
      }
    }
  }
}
</style>
