<template>
  <div class="newslist">
    <ul>
      <li v-for="item in newslist" :key="item.id">
        <i class="el-icon-caret-left"></i>{{ item.contentsTitle }}
        <span class="time">{{ item.savetime }}</span>
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
    };
  },
  mounted() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      axios.post(`/api/getTagPageList?tagid=7&pageNo=1&pagesize=20`, {}).then((res) => {
        // console.log(res);
        this.newslist = res.page.list;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.newslist {
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
