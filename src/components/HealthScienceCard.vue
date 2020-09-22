<template>
  <div class="list">
    <div class="healthcard" v-for="card in healthcardlist" :key="card.id">
      <div class="head"><img :src="card.img" alt="" /></div>
      <div class="content">
        <ul>
          <li v-for="item in card.list" :key="item.id">
            <div class="circle"></div>
            <span>{{ item.content }}</span>
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
