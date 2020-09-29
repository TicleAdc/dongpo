<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-17 11:10:24
 * @FilePath: /dongpo/src/views/FeaturedMedical.vue
 * @LastEditTime: 2020-09-22 11:21:19
-->
<template>
  <div class="featured-medical">
    <div class="position"></div>
    <path-nav :pathes="pathes"></path-nav>
    <div class="flex-box main-featured-medical">
      <menu-list
        title="科室设置"
        :list="department"
        bottom="专家介绍"
        @active="getDepartmentInfo"
      ></menu-list>
      <main class="flex-1">
        <context :title="info.name" description="科室介绍">
          <div slot="context" v-html="info.introduction"></div>
        </context>
        <p class="description">科室医生</p>
        <div class="expert-introduction" v-for="(item, index) in info.doctors" :key="index">
          <div class="left">
            <img :src="item.src" :alt="item.name" />
            <div class="foot">
              <h2>{{ item.name }}</h2>
              <p>{{ item.department }}</p>
            </div>
          </div>
          <div class="right">
            <h2>{{ item.position }}</h2>
            <p>{{ item.educationalLevel }}</p>
            <p>{{ item.work }}</p>
            <p class="content" v-html="item.content"></p>
            <img src="@/assets/img/professor/professorback@2x.png" alt="" />
          </div>
        </div>
        <p class="description">出诊安排</p>
        <ul>
          <li v-for="item in info.works" :key="item.columnId">
            <img :src="item.columnBigimg" :alt="item.columnTitle" />
          </li>
        </ul>
      </main>
    </div>
  </div>
</template>

<script>
import axios from '@/api/request.js';
import pathNav from '../components/pathNav';
import menuList from '../components/menuList';
import context from '../components/context';

export default {
  name: 'FeaturedMedical',
  components: {
    pathNav,
    menuList,
    context,
  },
  data() {
    return {
      data: null,
      pathes: [
        {
          name: '首页',
          path: '/index',
        },
        {
          name: '特色医疗',
          path: '/featuredmedical',
        },
        {
          name: '科室设置',
          path: '/departmentsetting',
        },
        {
          name: '儿童保健科',
        },
      ],
      expertIntroduction: [],
      department: [],
      current: null,
      info: {
        name: '',
        introduction: '',
        doctors: [],
        works: [],
      },
    };
  },
  created() {
    // 请求连接
    this.$store.dispatch('getMenuByPath', '/featuredmedical').then((result) => {
      this.data = result;
      this.initDePartment();
    });
    // axios.post('/api/getClassifyPageList?classifyId=1&pageNo=1&pagesize=5').then((res) => {
    //   console.log(res);
    // });
  },
  methods: {
    findByPath(list, path) {
      if (!list || !list.length) return null;
      let i = 0,
        len = list.length;
      for (i; i < len; i++) {
        if (list[i].menuuri === path) {
          return list[i];
        }
      }
      return null;
    },
    initDePartment() {
      let department = this.findByPath(this.data.children, '/departmentsetting');
      let list = department.children;
      this.department.length = 0;
      list.forEach((item) => {
        let obj = {
          id: item.id,
          name: item.menuname,
          path: item.menuuri,
          parentid: item.parentid,
        };
        if (item.menueparam) {
          obj.menueparam = {
            infoId: item.menueparam[0].id,
            doctorsId: item.menueparam[2].id,
            workId: item.menueparam[1].id,
          };
        }
        this.department.push(obj);
      });
      this.getDepartmentInfo();
    },
    getDepartmentInfo(department) {
      department = department || this.department[0];
      this.info.name = department.name;
      this.getIntorduce(department);
      this.getDoctors(department);
      this.getWorkDate(department);
    },
    getIntorduce(department) {
      if (!this.current) {
        department.active = 'active';
      }
      this.current = department;
      axios.get('/api/info/' + department.menueparam.infoId).then((res) => {
        this.info.introduction = res.contents.contentsdata;
      });
    },
    getDoctors(department) {
      axios
        .get(`/api/getColumnDataByPositionId?columnPositionId=${department.menueparam.doctorsId}`)
        .then((res) => {
          this.info.doctors.length = 0;
          res.frontmenuList.forEach(item=>{
            this.info.doctors.push({
              name: item.columnTitle,
              src: item.columnBigimg,
              department: department.name,
              position: '',
              educationalLevel: '',
              work: '',
              content: item.columnContext
            })
          })
        });
    },
    getWorkDate(department) {
      axios
        .get(`/api/getColumnDataByPositionId?columnPositionId=${department.menueparam.workId}`)
        .then((res) => {
          this.info.works = res.frontmenuList;
        });
    },
  },
};
</script>

<style lang="less" scoped>
@import url('@/assets/css/base.less');
.featured-medical {
  background-color: #fff;
  color: #666666;

  .main-featured-medical {
    display: flex;
    aside {
      width: 177.91px;
      height: 506.54px;
      display: flex;
      flex: 0.168;
      flex-direction: column;
      align-items: center;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.247);
      font-size: 19.11px;
      .header {
        height: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
        i {
          margin-left: 8px;
        }
      }
      .de {
        height: 413px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 15.29px;
        border: solid rgba(1, 1, 1, 0.075);
        border-width: 0.5px 0;
        > li {
          flex: 1;
          display: flex;
          align-items: center;
        }
      }
      .footer {
        height: 48px;
        line-height: 48px;
        color: #4a5da3;
      }
    }
    main {
      flex: 0.83;
      padding: 0 36px;
      .title {
        color: #4a5da3;
        font-size: 28.31px;
        position: relative;
        margin-top: 29px;
        .head-img {
          position: absolute;
          width: 41px;
          height: 41px;
        }
      }
      .expert-introduction {
        display: flex;
        height: 204px;
        box-shadow: 10px 10px 10px 3px rgba(0, 0, 0, 0.151);
        margin-top: 49px;
        &:last-child {
          margin-bottom: 30px;
        }
        .left {
          flex: 0.18;
          display: flex;
          flex-direction: column;
          > .foot {
            background-color: #e8f1fa;
            flex: 0.82;
            h2 {
              text-align: center;
              color: #4a5da3;
              font-size: 17.64px;
            }
            p {
              text-align: center;
              font-size: 13.2px;
            }
          }
          img {
            flex: 2;
            height: inherit;
          }
          @media screen and(min-width: 1600px) {
            img {
              height: 60%;
            }
          }
        }
        .right {
          flex: 0.82;
          padding: 0 12%;
          padding-left: 13px;
          font-size: 16px;
          font-family: SourceHanSansCN-Bold;
          position: relative;
          h2 {
            font-size: 16px;
          }
          p {
            font-size: 14px;
            color: #4d4d4d;
          }
          .content {
            color: rgba(77, 77, 77, 0.541);
            margin-top: 14px;
          }
          img {
            width: 147px;
            height: 119px;
            position: absolute;
            right: 5px;
            top: 20%;
          }
        }
      }
      .page {
        margin-top: 247px;
        margin-bottom: 38px;
        display: flex;
        justify-content: center;
      }
    }
  }
  .position {
    height: 28px;
  }
  .top-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 43px;
    border: solid rgba(1, 1, 1, 0.075);
    border-width: 0.5px 0;
    font-size: 12px;
    color: #666666;
    padding-left: 35px;
  }
}
.description {
  display: inline-block;
  font-size: 24px;
  background-color: #4a5da3;
  padding: 5px 20px;
  margin: 50px 0 20px 20px;
  border-radius: 30px;
  color: #fff;
  font-weight: 200;
}
</style>

<style lang="less" scoped>
.main-featured-medical {
  main {
    .page {
      .el-pagination {
        font-size: 16px;
        .btn-prev,
        .btn-next {
          width: 83.59px;
          height: 49px;
          background-color: #fff;
          border: 0.5px solid rgba(0, 0, 0, 0.151);
          &:not(:disabled) {
            color: #4a5da3;
          }
        }
        .number {
          width: 49px;
          height: 49px;
          line-height: 49px;
          text-align: center;
          font-size: 16px;
          border: 0.5px solid rgba(0, 0, 0, 0.151);
          background-color: #fff;
        }
        .el-icon {
          font-size: 16px;
        }
        .el-pagination__total {
          width: 83.59px;
          height: 49px;
          display: inline-block;
          margin: 0 5px;
          background-color: #fff;
          color: #606266;
          min-width: 30px;
          border-radius: 2px;
          font-size: 16px;
          text-align: center;
          line-height: 49px;
          border: 0.5px solid rgba(0, 0, 0, 0.151);
          color: #4a5da3;
        }
      }
    }
  }
}
</style>
