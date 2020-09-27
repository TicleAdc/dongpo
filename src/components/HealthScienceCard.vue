<template>
  <div class="list">
    <div class="healthcard" v-for="card in healthcardlist" :key="card.id">
      <div class="head"><img :src="card.img" alt="" /></div>
      <div class="content">
        <ul>
          <li v-for="item in card" :key="item.index">
            <div class="circle"></div>
            <span
              ><a href="#/healthscience">{{ item.contentsTitle }}</a></span
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
      healthcardlist: [
        // {
        //   id: '1',
        //   img: require('@/assets/img/home/healthLeading1@2x.png'),
        //   list: [
        //     {
        //       id: '01',
        //       content: '刚过七夕，你又开始为造人发愁？',
        //     },
        //     {
        //       id: '02',
        //       content: '上班久坐，下班葛优躺，全身很受伤！',
        //     },
        //     {
        //       id: '03',
        //       content: '吹空调吹成了面瘫',
        //     },
        //     {
        //       id: '04',
        //       content: '蛋蛋的“忧桑',
        //     },
        //   ],
        // },
        // {
        //   id: '2',
        //   img: require('@/assets/img/home/healthLeading2@2x.png'),
        //   list: [
        //     {
        //       id: '01',
        //       content: '刚过七夕，你又开始为造人发愁？',
        //     },
        //     {
        //       id: '02',
        //       content: '上班久坐，下班葛优躺，全身很受伤！',
        //     },
        //     {
        //       id: '03',
        //       content: '吹空调吹成了面瘫',
        //     },
        //     {
        //       id: '04',
        //       content: '蛋蛋的“忧桑',
        //     },
        //   ],
        // },
        // {
        //   id: '3',
        //   img: require('@/assets/img/home/healthLeading3@2x.png'),
        //   list: [
        //     {
        //       id: '01',
        //       content: '刚过七夕，你又开始为造人发愁？',
        //     },
        //     {
        //       id: '02',
        //       content: '上班久坐，下班葛优躺，全身很受伤！',
        //     },
        //     {
        //       id: '03',
        //       content: '吹空调吹成了面瘫',
        //     },
        //     {
        //       id: '04',
        //       content: '蛋蛋的“忧桑',
        //     },
        //   ],
        // },
      ],
    };
  },
  mounted() {
    this.getCardList();
  },
  methods: {
    getCardList() {
      // axios.post('/api/getColumnList', {}).then((res) => {
      //   let classifyid = res.ColumnData[4].columndata.id;
      //   axios.post(`/api/getTagPageByClassifyId?classifyid=${classifyid}`, {}).then((data) => {
      //     // console.log(classifyid);
      //     // console.log(data.data);
      //     let list = data.data;
      //     list.forEach((item) => {
      //       axios
      //         .post(`/api/getTagPageList?tagid=${item.id}&pageNo=1&pagesize=5`)
      //         .then((response) => {
      //           // console.log(response);
      //           this.healthcardlist.push(response.page.list);
      //           this.healthcardlist[0].img = require('@/assets/img/home/healthLeading1@2x.png');
      //           this.healthcardlist[1].img = require('@/assets/img/home/healthLeading2@2x.png');
      //           this.healthcardlist[2].img = require('@/assets/img/home/healthLeading3@2x.png');
      //         });
      //     });
      //   });
      // });
      // console.log(this.healthcardlist);
      axios.get(`/api/getColumnDataByPositionId?columnPositionId=healthscience`).then((res) => {
        console.log(res);
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
