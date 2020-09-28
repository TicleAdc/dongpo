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
export default {
  data() {
    return {
      //     healthcardlist: [],
      //     contents: [],
      //   };
      // },
      // mounted() {
      //   this.getCardList();
      // },
      // methods: {
      //   getCardList() {
      //     axios.get(`/api/getColumnDataByPositionId?columnPositionId=healthscience`).then((res) => {
      //       console.log(res);
      //       this.healthcardlist = res.frontmenuList;
      //     });
      //   },
      // },
      contents: [],
      healthcardlist: [
        {
          id: '1',
          img: require('@/assets/img/home/healthLeading1@2x.png'),
          list: [
            {
              id: '01',
              content: '刚过七夕，你又开始为造人发愁？',
            },
            {
              id: '02',
              content: '上班久坐，下班葛优躺，全身很受伤！',
            },
            {
              id: '03',
              content: '吹空调吹成了面瘫',
            },
            {
              id: '04',
              content: '蛋蛋的“忧桑',
            },
          ],
        },
        {
          id: '2',
          img: require('@/assets/img/home/healthLeading2@2x.png'),
          list: [
            {
              id: '01',
              content: '刚过七夕，你又开始为造人发愁？',
            },
            {
              id: '02',
              content: '上班久坐，下班葛优躺，全身很受伤！',
            },
            {
              id: '03',
              content: '吹空调吹成了面瘫',
            },
            {
              id: '04',
              content: '蛋蛋的“忧桑',
            },
          ],
        },
        {
          id: '3',
          img: require('@/assets/img/home/healthLeading3@2x.png'),
          list: [
            {
              id: '01',
              content: '刚过七夕，你又开始为造人发愁？',
            },
            {
              id: '02',
              content: '上班久坐，下班葛优躺，全身很受伤！',
            },
            {
              id: '03',
              content: '吹空调吹成了面瘫',
            },
            {
              id: '04',
              content: '蛋蛋的“忧桑',
            },
          ],
        },
      ],
    };
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
    border: 1px solid #b1b1b1;
    border-radius: 10%;
    width: 30%;
    .head {
      width: 80%;
      padding: 5% 10%;
    }
    .content {
      padding: 0 15% 5% 15%;
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
            font-size: 10px;
            color: #4d4d4d;
            a {
              color: gray;
            }
          }
        }
      }
    }
    .blank {
      border-bottom: 1px solid #b1b1b1;
      width: 60%;
      margin-bottom: 8%;
      margin-left: 20%;
    }
  }
}
</style>
