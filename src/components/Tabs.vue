<template>
  <div class="tabs">
    <div class="banner">
      <el-carousel height="200px" direction="vertical" :autoplay="true">
        <el-carousel-item v-for="item in imglist" :key="item.index">
          <img :src="item.columnBigimg" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="tablist">
      <!-- @tab-click="handleClick" -->
      <div class="tabsin">
        <div class="tab" v-for="item in tabs" :key="item.index" @click="handleClick(item)">
          {{ item.columnContext }}
        </div>
        <!-- <span class="more">查看更多</span> -->
      </div>
      <div class="tabcontext">
        <ul>
          <li v-for="data in tabcontents" :key="data.id">
            <a>{{ data.columnContext }}</a>
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
      imglist: [],
      tabs: [],
      tabcontents: [],
    };
  },
  mounted() {
    // this.handleClick();
    this.getColumnData();
  },
  methods: {
    // 控制tab切换
    handleClick(tab) {
      // console.log(tab.columnData[0].id);
      axios
        .post(`/api/getTagPageList?tagid=${tab.columnData[0].id}&pageNo=1&pagesize=5`, {})
        .then((res) => {
          this.tabcontents = res.page.list;
          console.log(this.tabcontents);
        });
    },
    // 获取tab内容，进行数据填充
    getColumnData() {
      axios.get(`/api/getColumnDataByPositionId?columnPositionId=newstab`).then((res) => {
        console.log(res);
        this.imglist.push(res.frontmenuList[0]);
        this.imglist.push(res.frontmenuList[2]);
        this.imglist.push(res.frontmenuList[4]);
        this.tabs.push(res.frontmenuList[1]);
        this.tabs.push(res.frontmenuList[3]);
        this.tabs.push(res.frontmenuList[5]);
        this.tabs.push(res.frontmenuList[6]);
        // console.log(this.tabs);
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
    .tabsin {
      padding: 0 30px;
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
