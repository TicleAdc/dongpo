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
        <li
          v-for="tab in tabs"
          :key="tab.id"
          :class="tab.active"
          @click="handleClick(tab)"
        >
          {{ tab.name }}
        </li>
        <li class="tab-more"><span>查看更多</span></li>
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
      tabs: [
        {
          id: '1',
          name: '医院新闻',
          list: [
            {
              id: '01',
              time: '2020.09.10',
              title: '入学体检 | 神兽即将归来',
            },
            {
              id: '02',
              time: '2020.09.05',
              title: '眉山市东坡妇女保健院2020年产儿科适宜技术培训会圆满结束培训会圆满结束',
            },
            {
              id: '03',
              time: '2020.09.05',
              title: '东坡区妇幼保健院开展消防安全演练和安全工作培训会',
            },
            {
              id: '04',
              time: '2020.09.04',
              title: '东坡妇幼保健行业',
            },
            {
              id: '05',
              time: '2020.09.03',
              title: '眉山市欢度国庆节',
            },
          ],
        },
        {
          id: '2',
          name: '媒体报道',
          list: [
            {
              id: '01',
              time: '2020.09.20',
              title: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
            },
            {
              id: '02',
              time: '2020.09.19',
              title: '东坡妇幼保健院欢迎您',
            },
            {
              id: '03',
              time: '2020.09.15',
              title: '我院进行母婴安全急救演练活动',
            },
            {
              id: '04',
              time: '2020.09.15',
              title: '我院开展演练和安全工作培训会',
            },
            {
              id: '05',
              time: '2020.09.12',
              title: '东坡妇幼保健院浓重开业',
            },
          ],
        },
        {
          id: '3',
          name: '公示公告',
          list: [
            {
              id: '01',
              time: '2020.09.22',
              title: '第一部分',
            },
            {
              id: '02',
              time: '2020.09.22',
              title: '第二部分',
            },
            {
              id: '03',
              time: '2020.09.21',
              title: '第三部分',
            },
            {
              id: '04',
              time: '2020.09.20',
              title: '第四部分',
            },
            {
              id: '05',
              time: '2020.09.16',
              title: '第五部分',
            },
          ],
        },
        {
          id: '4',
          name: '采购招标',
          list: [
            {
              id: '01',
              time: '2020.09.16',
              title: '第一部分',
            },
            {
              id: '02',
              time: '2020.09.15',
              title: '第二部分',
            },
            {
              id: '03',
              time: '2020.09.15',
              title: '第三部分',
            },
            {
              id: '04',
              time: '2020.09.15',
              title: '第四部分',
            },
            {
              id: '05',
              time: '2020.09.15',
              title: '第五部分',
            },
          ],
        },
      ],
      tabcontents: [],
      currentTab: null,
    };
  },
  mounted() {
    this.handleClick();
  },
  methods: {
    handleClick(tab) {
      if (this.currentTab) {
        this.currentTab.active = '';
      }
      this.currentTab = tab || this.tabs[0];
      this.currentTab.active = 'active';
      this.tabcontents = this.currentTab.list;
    },
    goDetail(item) {
      console.log(item);
      item.visited = 'visited';
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
      margin-left: .7em;
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
