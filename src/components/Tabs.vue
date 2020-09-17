<template>
  <div class="tabs">
    <div class="img"></div>
    <!-- 待调显示 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="tab in tabs" :key="tab.id" :label="tab.name" :name="tab.name">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="less">
.tabs {
  display: flex;
  padding: 20px 80px;
  .img {
    width: 50%;
    height: 200px;
    border: 1px solid black;
    margin-right: 20px;
  }
}
</style>
