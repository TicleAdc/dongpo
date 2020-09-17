/*
 * @Author: Spring Breeze
 * @Date: 2020-09-17 10:15:31
 * @FilePath: /dongpo/src/main.js
 * @LastEditTime: 2020-09-17 15:07:34
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/base.less';

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
