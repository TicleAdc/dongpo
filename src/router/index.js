/*
 * @Author: Spring Breeze
 * @Date: 2020-09-17 10:55:25
 * @FilePath: /dongpo/src/router/index.js
 * @LastEditTime: 2020-09-22 15:14:32
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/Index.vue';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: Index,
  },
  {
    name: '医院概况',
    path: '/overview',
    component: Index,
  },
  {
    name: '医疗服务',
    path: '/medicalservice',
    component: Index,
  },
  {
    name: '医疗保健',
    path: '/healthcare',
    component: Index,
  },
  {
    name: '新闻动态',
    path: '/news',
    component: Index,
  },
  {
    name: '特色医疗',
    path: '/featuredmedical',
    component: Index,
  },
  {
    name: '党群工作',
    path: '/partywork',
    component: Index,
  },
  {
    name: '医院文化',
    path: '/hospitalculture',
    component: Index,
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
        name: '二级',
        path: '/test',
        component: Index,
      },
    ],
  },
];

export default new VueRouter({
  routes,
  linkActiveClass: 'active',
});
