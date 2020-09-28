<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-28 09:54:49
 * @FilePath: /dongpo/src/components/common/msgList.vue
 * @LastEditTime: 2020-09-28 16:19:04
-->
<template>
  <div class="msg-list">
    <div class="title" v-if="showTitle">
      {{ title }}
      <img src="@/assets/img/professor/专家介绍背景图@2x.png" alt="" />
    </div>
    <div class="list" v-for="(item, index) in list" :key="index" @click="goDetail(index)">
      <i class="el-icon-caret-left" :class="!showTime ? 'less' : ''"></i>
      <span class="content">{{ item.content }}</span>
      <div class="right" v-if="showTime">
        {{ item.time }}
      </div>
    </div>
    <div class="page" v-if="showPagination">
      <el-pagination
        background
        layout="total,prev, pager, next"
        :total="total"
        @current-change="changePage"
        :page-size="10"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
<<<<<<< HEAD
      // required: true,
=======
      default() {
        return '';
      },
>>>>>>> e8edb836e0b68f067e18ce0c2b6274372839867b
    },
    list: {
      type: Array,
      required: true,
    },
    total: {
      type: Number,
      default() {
        return 0;
      },
    },
    showPagination: {
      type: Boolean,
      default() {
        return true;
      },
    },
    showTitle: {
      type: Boolean,
      default() {
        return true;
      },
    },
    showTime: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  methods: {
    goDetail(index) {
      // 文章跳转详情
      console.log(index);
    },
    changePage(v) {
      this.$emit('changeMsgListPage', v);
    },
  },
};
</script>

<style lang="less" scoped>
.msg-list {
  .title {
    position: relative;
    color: #4d5aa2;
    display: flex;
    align-items: center;
    height: 100px;
    font-size: 22px;
    img {
      width: 41px;
      height: 41px;
    }
  }
  .list {
    height: 40px;
    margin: auto 0;
    font-size: 15px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.329);
    display: flex;
    align-items: center;
    span {
      color: gray;
      flex: 15;
    }
    i {
      font-size: 10px;
      flex: 0.3;
    }
    i.less {
      flex: 0.02;
    }
    .right {
      flex: 3;
      text-align: right;
      color: gray;
    }
    .content {
      display: inline-block;
      max-width: 70%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .page {
    margin-top: 247px;
    // margin-bottom: 38px;
    padding-bottom: 38px;
    display: flex;
    justify-content: center;
  }
}
</style>
