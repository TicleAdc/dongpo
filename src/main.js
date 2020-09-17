/*
 * @Author: Spring Breeze
 * @Date: 2020-09-17 10:15:31
 * @FilePath: /dongpo/src/main.js
 * @LastEditTime: 2020-09-17 16:16:51
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import '@/assets/css/base.less';
import '@/assets/css/element-variables.scss';

Vue.use(ElementUI);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});
new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
