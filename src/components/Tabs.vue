<template>
  <div class="tabs">
    <div class="banner">
      <el-carousel height="200px" direction="vertical" :autoplay="true">
        <el-carousel-item v-for="item in imglist" :key="item.id">
          <img :src="item.imgurl" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="tablist">
      <!-- @tab-click="handleClick" -->
      <div class="tabs">
        <div class="tab" v-for="item in tabs" :key="item.index" @click="handleClick(item)">
          {{ item.name }}
        </div>
        <!-- <span class="more">查看更多</span> -->
      </div>
      <div class="tabcontext">
        <ul>
          <li v-for="data in tabcontents" :key="data.id">
            <a href="#/news">{{ data.contentsTitle }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/api/request.js';
export default {
  name: 'newstab',
  data() {
    return {
      imglist: [
        // {
        //   id: '1',
        //   url: require('@/assets/img/home/news.png'),
        // },
        // {
        //   id: '2',
        //   url: require('@/assets/img/home/news.png'),
        // },
        // {
        //   id: '3',
        //   url: require('@/assets/img/home/news.png'),
        // },
      ],
      tabs: [],
      tabcontents: [],
    };
  },
  mounted() {
    // this.handleClick();
    setTimeout(this.getColumnData, 1000);
    this.getBannerList();
  },
  created() {
    axios.post(`/api/getTagPageList?tagid=6&pageNo=1&pagesize=5`, {}).then((res) => {
      // console.log(res);
      this.tabcontents = res.page.list;
    });
  },
  methods: {
    // 控制tab切换
    handleClick(tab) {
      axios.post(`/api/getTagPageList?tagid=${tab.id}&pageNo=1&pagesize=5`, {}).then((res) => {
        this.tabcontents = res.page.list;
      });
    },
    // 获取tab内容，进行数据填充
    getColumnData() {
      // axios
      //   .post('/api/getColumnList', {})
      //   .then((res) => {
      //     this.tabs = res.ColumnData[1].columndata.list;
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      axios.get(`/api/getColumnDataByPositionId?columnPositionId=newstab`).then((res) => {
        console.log(res);
      });
    },
    // 获取轮播图内容进行填充
    getBannerList() {
      axios.post('/api/getBannerList').then((res) => {
        this.imglist = res.bannerlist[2].list;
        this.imglist.push(res.bannerlist[3].list[0]);
        this.imglist.push(res.bannerlist[4].list[0]);
        // console.log(this.imglist);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.tabs {
  display: flex;
  padding: 0 30px 20px 30px;
  background-color: white;
  vertical-align: top;
  .banner {
    width: 50%;
    margin-right: 30px;
  }
  .tablist {
    width: 50%;
    .tabs {
      display: flex;
      .tab {
        font-size: 14px;
        flex: 1;
        cursor: pointer;
      }
      .more {
        font-size: 10px;
        padding: 0 3px;
        background-color: blue;
        color: white;
      }
    }
    .tabcontext {
      padding: 0 30px;
      ul {
        border-top: 1px solid black;
      }
    }
  }
  ul {
    list-style: none;
    li {
      border-bottom: 1px solid rgb(209, 205, 205);
      font-size: 12px;
      height: 30px;
      line-height: 30px;
      a {
        color: gray;
      }
    }
  }
}
</style>
