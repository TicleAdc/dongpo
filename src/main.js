/*
 * @Author: Spring Breeze
 * @Date: 2020-09-17 10:15:31
 * @FilePath: /dongpo/src/main.js
 * @LastEditTime: 2020-09-23 15:55:36
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import '@/assets/css/base.less';
import '@/assets/css/element-variables.scss';
import axios from '@/api/request.js';
import store from './store';
import 'viewerjs/dist/viewer.css';
import Viewer from 'v-viewer';

Vue.use(ElementUI);
Vue.use(Viewer);
Vue.config.productionTip = false;
Vue.prototype.http = axios;

router.beforeEach((to, from, next) => {
  document.title = to.name || '眉山市东坡区妇幼保健院';
  next();
});
new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount('#app');
