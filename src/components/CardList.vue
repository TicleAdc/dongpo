<template>
  <div class="datalist">
    <div class="card" v-for="item in dataList" :key="item.id">
      <header class="img">
        <img :src="item.url" alt="" />
      </header>
      <div class="icon"></div>
      <div class="name">{{ item.name }}</div>
      <button><img src="../assets/img/home/CheckMore.png" alt="" /> {{ item.btn }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        {
          id: '1',
          url: require('@/assets/img/home/physicalExamination2.png'),
          name: '预约挂号',
          btn: '查看更多',
        },
        {
          id: '2',
          url: require('@/assets/img/home/ReportQuery2.png'),
          name: '报告查询',
          btn: '查看更多',
        },
        {
          id: '3',
          url: require('@/assets/img/home/momAndBaby2.png'),
          name: '母婴保健',
          btn: '查看更多',
        },
        {
          id: '4',
          url: require('@/assets/img/home/physicalExamination2.png'),
          name: '体检查询',
          btn: '查看更多',
        },
      ],
    };
  },
};
</script>

<style lang="less">
.datalist {
  display: flex;
  padding: 30px 60px;
  background-color: white;
  .card {
    border-radius: 25px 25px 25px 25px;
    text-align: center;
    margin: 0 1%;
    background-color: white;
    box-shadow: 0px 0px 5px #888888;
    .name {
      margin: 50px 0 20px 0;
    }
    button {
      margin-bottom: 38px;
      width: 60%;
      height: 30px;
      cursor: pointer;
      img {
        width: 10px;
        height: 10px;
      }
    }
  }
}
</style>
