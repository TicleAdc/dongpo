<template>
  <div class="newslist">
    <ul>
      <li v-for="item in newslist" :key="item.id">
        <i class="el-icon-caret-left"></i>{{ item.contentsTitle }}
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
      newslist: [
        // {
        //   id: '01',
        //   context: '这是媒体新闻————示例',
        //   time: '2020-09-18',
        // },
        // {
        //   id: '02',
        //   context: '这是媒体新闻————示例',
        //   time: '2020-09-18',
        // },
        // {
        //   id: '03',
        //   context: '这是媒体新闻————示例',
        //   time: '2020-09-18',
        // },
        // {
        //   id: '04',
        //   context: '这是媒体新闻————示例',
        //   time: '2020-09-18',
        // },
        // {
        //   id: '05',
        //   context: '这是媒体新闻————示例',
        //   time: '2020-09-18',
        // },
        // {
        //   id: '06',
        //   context: '这是媒体新闻————示例',
        //   time: '2020-09-18',
        // },
        // {
        //   id: '07',
        //   context: '这是媒体新闻————示例',
        //   time: '2020-09-18',
        // },
        // {
        //   id: '08',
        //   context: '这是媒体新闻————示例',
        //   time: '2020-09-18',
        // },
        // {
        //   id: '09',
        //   context: '这是媒体新闻————示例',
        //   time: '2020-09-18',
        // },
        // {
        //   id: '10',
        //   context: '这是媒体新闻————示例',
        //   time: '2020-09-18',
        // },
        // {
        //   id: '11',
        //   context: '这是媒体新闻————示例',
        //   time: '2020-09-18',
        // },
      ],
    };
  },
  mounted() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      axios.post(`/api/getTagPageList?tagid=2&pageNo=1&pagesize=20`, {}).then((res) => {
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
