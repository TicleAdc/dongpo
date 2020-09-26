<template>
  <div class="newslist">
    <ul>
      <li v-for="item in newslist" :key="item.id">
        <i class="el-icon-caret-left"></i
        ><span @click="jumpToDetails(item.index)">{{ item.contentsTitle }}</span>
        <span class="time">{{ item.time }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from '@/api/request.js';
export default {
  data() {
    return {
      newslist: [],
      // detail: [],
    };
  },
  mounted() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      axios.post(`/api/getTagPageList?tagid=6&pageNo=1&pagesize=20`, {}).then((res) => {
        this.newslist = res.page.list;
        // this.newslist.forEach((index) => {
        //   console.log(index);
        // });
      });
    },
    jumpToDetails(index) {
      axios.post(`/api/getTagPageList?tagid=6&pageNo=1&pagesize=20`, {}).then((res) => {
        console.log(index);
        this.newslist = res.page.list;
        this.newslist.forEach((item) => {
          if (item == index) {
            this.$router.push({ name: '详情', params: { detail: this.newslist[index] } });
          }
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.newslist {
  background-color: white;
  padding-top: 10px;
  ul {
    list-style: none;
    li {
      font-size: 10px;
      padding: 5px;
      border-bottom: 1px solid rgba(173, 170, 170, 0.863);
      .time {
        float: right;
      }
    }
  }
}
</style>
