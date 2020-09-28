/*
 * @Author: Spring Breeze
 * @Date: 2020-09-17 10:55:25
 * @FilePath: /dongpo/src/router/index.js
 * @LastEditTime: 2020-09-28 14:47:14
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '@/views/Index.vue';
import detail from '@/components/detail.vue';

Vue.use(VueRouter);

// 请在获取路由对象再挂载

export const routes = [
  {
    path: '/',
    redirect: '/test',
  },
  {
    name: '首页',
    path: '/test',
    component: Index,
  },
  {
    name: 'detail',
    path: '/detail',
    component: detail,
  },
  {
    name: '医院概况',
    path: '/overview',
    component: Index,
    children: [
      {
        name: '医院介绍',
        path: '/introduction',
        component: Index,
      },
      {
        name: '现任领导',
        path: '/leader',
        component: Index,
      },
      {
        name: '医院荣誉',
        path: '/honor',
        component: Index,
      },
    ],
  },
  {
    name: '医疗服务',
    path: '/medicalservice',
    component: Index,
    children: [
      {
        name: '预约挂号',
        path: '/guahao',
        component: Index,
      },
      {
        name: '报告查询',
        path: '/report',
        component: Index,
      },
      {
        name: '院内导航',
        path: '/leading',
        component: Index,
      },
      {
        name: '就诊指导',
        path: '/jiuzhen',
        component: Index,
      },
      {
        name: '体检查询',
        path: '/tijian',
        component: Index,
      },
      {
        name: '常见问题',
        path: '/question',
        component: Index,
      },
    ],
  },
  {
    name: '母婴保健',
    path: '/healthcare',
    component: Index,
  },
  {
    name: '新闻动态',
    path: '/news',
    component: Index,
    children: [
      {
        name: '医院新闻',
        path: '/hosnews',
        component: Index,
      },
      {
        name: '业界新闻',
        path: '/yejienews',
        component: Index,
      },
      {
        name: '媒体报道',
        path: '/media',
        component: Index,
      },
    ],
  },
  {
    name: '特色医疗',
    path: '/featuredmedical',
    component: Index,
    children: [
      {
        name: '科室设置',
        path: '/department',
        component: Index,
      },
      {
        name: '专家介绍',
        path: '/inteoduction',
        component: Index,
      },
    ],
  },
  {
    name: '党群工作',
    path: '/partywork',
    component: Index,
    children: [
      {
        name: '预防接种',
        path: '/vaccination',
        component: () => import('@/views/vaccination.vue'),
      },
      {
        name: '儿科',
        path: '/children',
        component: Index,
      },
      {
        name: '妇产科住院部',
        path: '/zhuyuanbu',
        component: Index,
      },
      {
        name: '妇产科门诊部',
        path: '/menzhenbu',
        component: Index,
      },
      {
        name: '检验科',
        path: '/jianyanke',
        component: Index,
      },
      {
        name: '超声科',
        path: '/chaoshengke',
        component: Index,
      },
      {
        name: '麻醉手术室',
        path: '/mazuishi',
        component: Index,
      },
    ],
  },
  {
    name: '医院文化',
    path: '/hospitalculture',
    component: Index,
    children: [
      {
        name: '品牌形象',
        path: '/xingxiang',
        component: Index,
      },
      {
        name: '院训宗旨',
        path: '/zongzhi',
        component: Index,
      },
      {
        name: '特色文化',
        path: '/culture',
        component: Index,
      },
      {
        name: '职工风采',
        path: '/style',
        component: Index,
      },
    ],
  },
  {
    name: '专题活动',
    path: '/specialactivity',
    component: Index,
  },
  {
    name: '健康科普',
    path: '/healthscience',
    component: Index,
  },
  {
    name: '通知公告',
    path: '/announcement',
    component: Index,
    children: [
      {
        name: '医院公告',
        path: '/gonggao',
        component: Index,
      },
      {
        name: '招标信息',
        path: '/zhaobiao',
        component: Index,
      },
      {
        name: '招聘信息',
        path: '/zhaopin',
        component: Index,
      },
    ],
  },
  // {
  //   name: '首页',
  //   path: '/home',
  //   component: Index,
  // },
  // {
  //   name: '医院概况',
  //   path: '/overview',
  //   component: Index,
  // },
  // {
  //   name: '医疗服务',
  //   path: '/medicalservice',
  //   component: Index,
  // },
  // {
  //   name: '医疗保健',
  //   path: '/healthcare',
  //   component: Index,
  // },
  // {
  //   name: '新闻动态',
  //   path: '/news',
  //   component: Index,
  // },
  // {
  //   name: '特色医疗',
  //   path: '/featuredmedical',
  //   component: Index,
  // },
  // {
  //   name: '党群工作',
  //   path: '/partywork',
  //   component: Index,
  // },
  // {
  //   name: '医院文化',
  //   path: '/hospitalculture',
  //   component: Index,
  // },
  // {
  //   name: '专题活动',
  //   path: '/specialactivity',
  //   component: Index,
  // },
  // {
  //   name: '健康科普',
  //   path: '/healthscience',
  //   component: Index,
  // },
  // {
  //   name: '通知公告',
  //   path: '/announcement',
  //   component: Index,
  //   children: [
  //     {
  //       name: '医院公告',
  //       path: '/hospitalannounc',
  //       component: Index,
  //     },
  //     {
  //       name: '招标信息',
  //       path: '/biddinginformation',
  //       component: Index,
  //     },
  //     {
  //       name: '招聘信息',
  //       path: '/joboffers',
  //       component: Index,
  //     },
  //   ],
  // },
];

export default new VueRouter({
  routes,
  linkActiveClass: 'active',
});
