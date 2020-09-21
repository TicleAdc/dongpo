/*
 * @Author: Spring Breeze
 * @Date: 2020-09-17 10:55:25
 * @FilePath: /dongpo/src/router/index.js
 * @LastEditTime: 2020-09-17 14:40:21
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: Home,
  },
  {
    name: '医院概况',
    path: '/overview',
    component: () => import('@/views/Overview.vue'),
  },
  {
    name: '医疗服务',
    path: '/medicalservice',
    component: () => import('@/views/MedicalService.vue'),
  },
  {
    name: '医疗保健',
    path: '/healthcare',
    component: () => import('@/views/HealthCare.vue'),
  },
  {
    name: '新闻动态',
    path: '/news',
    component: () => import('@/views/News.vue'),
  },
  {
    name: '特色医疗',
    path: '/featuredmedical',
    component: () => import('@/views/FeaturedMedical.vue'),
  },
  {
    name: '党群工作',
    path: '/partywork',
    component: () => import('@/views/PartyWork.vue'),
  },
  {
    name: '医院文化',
    path: '/hospitalculture',
    component: () => import('@/views/HospitalCulture.vue'),
  },
  {
    name: '专题活动',
    path: '/specialactivity',
    component: () => import('@/views/SpecialActivity.vue'),
  },
  {
    name: '健康科普',
    path: '/healthscience',
    component: () => import('@/views/HealthScience.vue'),
  },
  {
    name: '通知公告',
    path: '/announcement',
    component: () => import('@/views/Announcement.vue'),
  },
];

export default new VueRouter({
  routes,
  linkActiveClass: 'active',
});
