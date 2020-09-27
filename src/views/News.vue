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
        <div @click="changeComponent(item.id)" class="tab" v-for="item in checkList" :key="item.id">
          <a> {{ item.tagname }}</a>
        </div>
      </div>
    </Title>
    <!-- <component :is="showComponent"></component> -->
    <div class="showlist">
      <ul>
        <li v-for="item in newslist" :key="item.id">
          <i class="el-icon-caret-left"></i
          ><span @click="jumpToDetails(item.id)">{{ item.contentsTitle }}</span>
          <span class="time">{{ item.time }}</span>
        </li>
      </ul>
    </div>
    <pagenation></pagenation>
  </div>
</template>

<script>
import axios from '@/api/request.js';
import pagenation from '@/components/pageNation';
import Title from '@/components/Title';
// import hospitalnews from '@/components/hospitalNews';
// import linenews from '@/components/lineNews';
// import mediareport from '@/components/mediaReport';
export default {
  data() {
    return {
      checkList: [
        // {
        //   id: '1',
        //   name: '医院新闻',
        // },
        // {
        //   id: '2',
        //   name: '业界新闻',
        // },
        // {
        //   id: '3',
        //   name: '媒体报道',
        // },
      ],
      newslist: [],
      // showComponent: 'hospitalnews',
    };
  },
  components: {
    Title,
    pagenation,
    // hospitalnews,
    // linenews,
    // mediareport,
  },
  created() {
    document.documentElement.scrollTop = 0;
  },
  mounted() {
    this.getTagList();
  },
  methods: {
    // changeComponent(id) {
    //   switch (Number(id)) {
    //     case 26:
    //       this.showComponent = 'hospitalnews';
    //       break;
    //     case 27:
    //       this.showComponent = 'linenews';
    //       break;
    //     case 28:
    //       this.showComponent = 'mediareport';
    //       break;
    //     default:
    //       this.showComponent = 'hospitalnews';
    //       break;
    //   }
    //   console.log(id);
    // },
    changeComponent(id) {
      console.log(id);
      axios.post(`/api/getTagPageList?tagid=${id}&pageNo=1&pagesize=20`, {}).then((res) => {
        // console.log(res);
        this.showlist = res.page.list;
        console.log(this.showlist);
      });
    },
    getTagList() {
      axios
        .post('/api/getTagPageByClassifyId?classifyid=19', {})
        .then((res) => {
          console.log(res);
          this.checkList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.tab {
  display: inline-block;
  margin: 20px;
  cursor: pointer;
  a {
    color: white;
    text-decoration: none;
  }
}
a:active {
  border-top: 2px solid white;
}
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
