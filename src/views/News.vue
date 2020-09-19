<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-17 11:09:47
 * @FilePath: /dongpo/src/views/News.vue
 * @LastEditTime: 2020-09-17 11:14:50
-->
<template>
  <div class="body">
    <Title>
      <div slot="theme">新闻动态</div>
      <div slot="childtabs">
        <div class="tab" v-for="item in checkList" :key="item.id">
          <a href="#"> {{ item.name }}</a>
        </div>
      </div>
    </Title>
    <div class="newslist">
      <ul>
        <li v-for="item in newslist" :key="item.id">
          <i class="el-icon-caret-left"></i>{{ item.context }}
          <span class="time">{{ item.time }}</span>
        </li>
      </ul>
    </div>
    <pagenation></pagenation>
  </div>
</template>

<script>
import pagenation from '@/components/pageNation';
import Title from '@/components/Title';
export default {
  data() {
    return {
      checkList: [
        {
          id: '1',
          name: '医院新闻',
        },
        {
          id: '2',
          name: '业界新闻',
        },
        {
          id: '3',
          name: '媒体报道',
        },
      ],
      newslist: [
        {
          id: '01',
          context: '这是一则新闻————示例',
          time: '2020-09-18',
        },
        {
          id: '02',
          context: '这是一则新闻————示例',
          time: '2020-09-18',
        },
        {
          id: '03',
          context: '这是一则新闻————示例',
          time: '2020-09-18',
        },
        {
          id: '04',
          context: '这是一则新闻————示例',
          time: '2020-09-18',
        },
        {
          id: '05',
          context: '这是一则新闻————示例',
          time: '2020-09-18',
        },
        {
          id: '06',
          context: '这是一则新闻————示例',
          time: '2020-09-18',
        },
        {
          id: '07',
          context: '这是一则新闻————示例',
          time: '2020-09-18',
        },
        {
          id: '08',
          context: '这是一则新闻————示例',
          time: '2020-09-18',
        },
        {
          id: '09',
          context: '这是一则新闻————示例',
          time: '2020-09-18',
        },
        {
          id: '10',
          context: '这是一则新闻————示例',
          time: '2020-09-18',
        },
        {
          id: '11',
          context: '这是一则新闻————示例',
          time: '2020-09-18',
        },
      ],
    };
  },
  components: {
    Title,
    pagenation,
  },
};
</script>

<style lang="less" scoped>
.tab {
  display: inline-block;
  margin: 20px;
  a {
    color: white;
    text-decoration: none;
  }
}
a:active,
a:visited {
  border-top: 2px solid white;
}
.body {
  background-color: white;
}
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
