<template>
  <div class="tabs">
    <div class="banner">
      <el-carousel height="200px" direction="vertical" :autoplay="true">
        <el-carousel-item v-for="item in imglist" :key="item.id">
          <img :src="item.url" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="tab">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="tab in tabs" :key="tab.id" :label="tab.name" :name="tab.name">
        </el-tab-pane>
      </el-tabs>
      <div>
        <ul>
          <li v-for="tabitem in tabcontents" :key="tabitem.id">{{ tabitem.title }}</li>
        </ul>
      </div>
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
              title: '第一部分',
            },
            {
              id: '02',
              title: '第二部分',
            },
            {
              id: '03',
              title: '第三部分',
            },
            {
              id: '04',
              title: '第四部分',
            },
            {
              id: '05',
              title: '第五部分',
            },
          ],
        },
        {
          id: '2',
          name: '媒体报道',
          list: [
            {
              id: '01',
              title: '第一部分',
            },
            {
              id: '02',
              title: '第二部分',
            },
            {
              id: '03',
              title: '第三部分',
            },
            {
              id: '04',
              title: '第四部分',
            },
            {
              id: '05',
              title: '第五部分',
            },
          ],
        },
        {
          id: '3',
          name: '公示公告',
          list: [
            {
              id: '01',
              title: '第一部分',
            },
            {
              id: '02',
              title: '第二部分',
            },
            {
              id: '03',
              title: '第三部分',
            },
            {
              id: '04',
              title: '第四部分',
            },
            {
              id: '05',
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
              title: '第一部分',
            },
            {
              id: '02',
              title: '第二部分',
            },
            {
              id: '03',
              title: '第三部分',
            },
            {
              id: '04',
              title: '第四部分',
            },
            {
              id: '05',
              title: '第五部分',
            },
          ],
        },
      ],
      tabcontents: [],
      tab: '1',
    };
  },
  mounted() {
    this.handleClick();
  },
  methods: {
    handleClick(tab) {
      // console.log(this.tabs[tab.index].list);
      this.tabcontents = this.tabs[tab?.index || 0].list;
    },
  },
};
</script>

<style lang="less">
.tabs {
  display: flex;
  padding: 20px 60px;
  background-color: white;
  .banner {
    width: 50%;
    margin-right: 30px;
  }
  .tab {
    width: 50%;
  }
  ul {
    list-style: none;
    li {
      border-bottom: 1px solid rgb(209, 205, 205);
      font-size: 12px;
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>
