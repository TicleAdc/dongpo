<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-17 11:10:50
 * @FilePath: /dongpo/src/views/PartyWork.vue
 * @LastEditTime: 2020-09-28 16:18:14
-->
<template>
  <div class="party-work">
    <Title>
      <div slot="theme">党群工作</div>
    </Title>
    <div class="content">
      <div class="top">
        <header-title title="党建动态"></header-title>
      </div>
      <div class="bottom">
        <img :src="bigImg" alt="" class="big" />
        <div class="bottom-right">
          <div class="head">
            <img :src="smallImg" alt="" class="small" />
            <div class="right-content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos nisi
                molestiae, consectetur ea nobis, minima placeat ex sint voluptatum maiores voluptas
                expedita quos dolores dolore nemo ducimus, adipisci culpa quasi.
              </p>
              <span class="bottom">2020</span>
            </div>
          </div>
          <msg-list
            :showTitle="false"
            :showPagination="false"
            :list="partyBuilding"
            :showTime="false"
          ></msg-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title';
import headerTitle from '@/components/common/headerTitle';
import msgList from '@/components/common/msgList';
export default {
  components: {
    Title,
    headerTitle,
    msgList,
  },
  data() {
    return {
      // 大图片的地址
      bigImg: '',
      // 小图片的地址
      smallImg: '',
      // 党建动态列表
      partyBuilding: [
        {
          content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates eaque porro idreiciendis sequi placeat sit libero dignissimos expedita accusamus ducimus, delectus eiusprovident, magni exercitationem assumenda? Cupiditate, odio?',
          time: '2020-2-10',
        },
        {
          content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates eaque porro idreiciendis sequi placeat sit libero dignissimos expedita accusamus ducimus, delectus eiusprovident, magni exercitationem assumenda? Cupiditate, odio?',
          time: '2020-2-10',
        },
        {
          content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates eaque porro idreiciendis sequi placeat sit libero dignissimos expedita accusamus ducimus, delectus eiusprovident, magni exercitationem assumenda? Cupiditate, odio?',
          time: '2020-2-10',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.party-work {
  background-color: #fff;
  .content {
    padding: 30px;

    .bottom {
      display: flex;
      margin-top: 20px;
      .big {
        min-width: 300px;
        min-height: 300px;
        margin-right: 40px;
        flex: 1;
      }
      .bottom-right {
        flex: 1.5;
        overflow: hidden;
        align-items: center;
        .head {
          display: flex;
          .small {
            flex: 1;
            margin-right: 30px;
          }
          .right-content {
            flex: 1.5;
          }
        }
      }
    }
  }
}
</style>
