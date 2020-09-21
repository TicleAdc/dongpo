<template>
  <div class="newslist">
    <ul>
      <li v-for="item in newslist" :key="item.id">
        <i class="el-icon-caret-left"></i>{{ item.context }}
        <span class="time">{{ item.time }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newslist: [
        {
          id: '01',
          context: '这是一则招聘信息————示例',
        },
        {
          id: '02',
          context: '这是一则招聘信息————示例',
        },
        {
          id: '03',
          context: '这是一则招聘信息————示例',
        },
        {
          id: '04',
          context: '这是一则招聘信息————示例',
        },
        {
          id: '05',
          context: '这是一则招聘信息————示例',
        },
        {
          id: '06',
          context: '这是一则招聘信息————示例',
        },
        {
          id: '07',
          context: '这是一则招聘信息————示例',
        },
        {
          id: '08',
          context: '这是一则招聘信息————示例',
        },
        {
          id: '09',
          context: '这是一则招聘信息————示例',
        },
        {
          id: '10',
          context: '这是一则招聘信息————示例',
        },
        {
          id: '11',
          context: '这是一则招聘信息————示例',
        },
      ],
    };
  },
};
</script>

<style lang="less">
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
