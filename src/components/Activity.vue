<template>
  <div class="activity">
    <div class="activeImglist">
      <div
        class="active"
        v-for="item in datalist"
        :key="item.index"
        @click="handleClick(item.index)"
      >
        <!-- <img :src="item.imgURL" alt="" /> -->
        <img :src="item.img" alt="" />
        <!-- <div class="contents">{{ item.imgdescription }}</div> -->
      </div>
    </div>
    <div class="showtext">{{ showtext }}</div>
  </div>
</template>

<script>
import axios from '@/api/request.js';
export default {
  data() {
    return {
      datalist: [],
      showtext: '',
    };
  },
  mounted() {
    this.getData();
  },
  created() {
    axios.post('/api/getColumnList', {}).then((data) => {
      this.showtext = data.ColumnData[5].columndata.list[0].imgdescription;
    });
  },
  methods: {
    getData() {
      axios.post('/api/getColumnList', {}).then((res) => {
        this.datalist = res.ColumnData[5].columndata.list;
        // 静态填充图片，从后台获取数据后可删除
        this.datalist[0].img = require('@/assets/img/home/thematicActivities1@2x.png');
        this.datalist[1].img = require('@/assets/img/home/thematicActivities2@2x.png');
        this.datalist[2].img = require('@/assets/img/home/thematicActivities3@2x.png');
        this.datalist[3].img = require('@/assets/img/home/thematicActivities4@2x.png');
        // console.log(this.datalist);
      });
    },
    handleClick(id) {
      axios.post('/api/getColumnList', {}).then((res) => {
        let data = res.ColumnData[5].columndata.list;
        for (let i = 0; i < data.length; i++) {
          if (id == data[i].index) {
            this.showtext = data[i].imgdescription;
            // console.log(this.showtext);
          }
          break;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.activeImglist {
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  .active {
    margin: 5px;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
.showtext {
  margin: 0 30px;
  padding: 10px 0 10px 20px;
  border: 1px solid black;
  border-radius: 10px;
}
</style>
