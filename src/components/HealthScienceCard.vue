<template>
  <div class="list">
    <div class="healthcard" v-for="card in healthcardlist" :key="card.id">
      <div class="head"><img :src="card.columnBigimg" alt="" /></div>
      <div class="content">
        <ul>
          <li v-for="item in contents" :key="item.index">
            <div class="circle"></div>
            <span
              ><a>{{ item.contentsTitle }}</a></span
            >
          </li>
        </ul>
      </div>
      <div class="blank"></div>
    </div>
  </div>
</template>

<script>
import axios from '@/api/request.js';
export default {
  name: 'healthscience',
  data() {
    return {
      healthcardlist: [],
      contents: [],
    };
  },
  mounted() {
    this.getCardList();
  },
  methods: {
    getCardList() {
      axios.get(`/api/getColumnDataByPositionId?columnPositionId=healthscience`).then((res) => {
        console.log(res);
        this.healthcardlist = res.frontmenuList;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.list {
  background-color: white;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  .healthcard {
    display: inline-block;
    border: 1px solid black;
    border-radius: 10%;
    width: 30%;
    .head {
      width: 80%;
      padding: 10%;
    }
    .content {
      padding-left: 15%;
      padding-bottom: 10%;
      font-size: 13px;
      ul {
        list-style: none;
        li {
          height: 25px;
          line-height: 25px;
          width: 100%;
          .circle {
            border-radius: 50%;
            background-color: rgba(74, 93, 163, 1);
            width: 8px;
            height: 8px;
            margin-right: 5%;
            display: inline-block;
          }
          span {
            font-size: 12px;
            a {
              color: gray;
            }
          }
        }
      }
    }
    .blank {
      border-bottom: 1px solid black;
      width: 60%;
      margin-bottom: 10%;
      margin-left: 20%;
    }
  }
}
</style>
