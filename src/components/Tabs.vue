<template>
  <div class="tabs">
    <div class="banner">
      <el-carousel height="200px" direction="vertical" :autoplay="true">
        <el-carousel-item v-for="item in imglist" :key="item.id">
          <img :src="item.url" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="news-container">
      <ul class="tab-list">
        <li v-for="tab in tabList" :key="tab.id" :class="tab.active" @click="handleClick(tab)">
          {{ tab.name }}
        </li>
        <li class="tab-more" @click="more"><span>查看更多</span></li>
      </ul>
      <ul class="news-list">
        <li
          v-for="item in tabcontents"
          :key="item.id"
          :class="item.visited"
          @click="goDetail(item)"
        >
          <span class="time">{{ item.time }}</span>
          <span class="title">{{ item.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  props: {
    tabList: Array,
  },
  data() {
    return {
      imglist: [
        {
          id: '1',
          url: require('@/assets/img/home/news.png'),
        },
        {
          id: '2',
          url: require('@/assets/img/home/news.png'),
        },
        {
          id: '3',
          url: require('@/assets/img/home/news.png'),
        },
      ],
      activeName: '',
      tabcontents: [],
      currentTab: null,
    };
  },
  created() {
    this.handleClick();
  },
  methods: {
    handleClick(tab) {
      if (this.currentTab) {
        this.currentTab.active = '';
      }
      this.myLlist = this.tabList;
      this.currentTab = tab || this.tabList[0];
      this.currentTab.active = 'active';
      this.tabcontents = this.currentTab.list;
    },
    goDetail(item) {
      console.log(item);
      item.visited = 'visited';
    },
    more() {
      this.$emit('more');
    },
  },
  watch: {
    tabList() {
      this.handleClick();
    },
  },
};
</script>
<style lang="less" scoped>
.tabs {
  display: flex;
  padding: 20px 60px;
  background-color: white;
  .banner {
    width: 50%;
    margin-right: 30px;
  }
  .news-container {
    width: 50%;
  }
  .tab-list {
    color: #4a5da3;
    font-size: 16px;
    display: flex;
    text-align: center;
    border-bottom: 1px solid #4d4d4d;
    padding-bottom: 10px;
    li {
      min-width: 5.5em;
      cursor: pointer;
    }
    li:link,
    li:active,
    li:visited {
      color: #4a5da3;
    }
    li.active,
    li:hover {
      font-weight: 600;
    }
    li::after {
      content: '|';
      position: absolute;
      color: #b1b1b1;
      margin-left: 0.7em;
      font-weight: 200;
    }
    .tab-more {
      flex: 1;
      text-align: right;
    }
    .tab-more span {
      background-color: #4a5da3;
      font-size: 12px;
      color: #fff;
      display: inline-block;
      padding: 0 10px;
      border-radius: 4px;
      height: 24px;
      line-height: 24px;
    }
    li:nth-last-child(2)::after,
    .tab-more::after {
      content: '';
    }
  }
}
.news-list {
  font-size: 12px;
  color: #333;
  li {
    height: 32px;
    line-height: 32px;
    position: relative;
    cursor: pointer;
    border-bottom: 1px solid #4d4d4d;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 3em;
    span {
      padding: 0 1em;
    }
  }
  li.visited {
    opacity: 0.6;
  }
  li:hover {
    color: #4a5da3;
  }
  li::after {
    content: '';
    display: block;
    font-size: 0;
    position: absolute;
    top: 15px;
    right: 16px;
    border: 2px solid #000;
    border-left-color: transparent;
    border-top-color: transparent;
    transform: rotate(-45deg);
  }
}
</style>
