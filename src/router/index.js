/*
 * @Author: Spring Breeze
 * @Date: 2020-09-17 10:55:25
 * @FilePath: /dongpo/src/router/index.js
 * @LastEditTime: 2020-09-17 11:26:05
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
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
    name: 'home',
    path: '/home',
    component: Home,
  },
];

export default new VueRouter({
  routes,
});
