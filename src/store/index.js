/*
 * @Author: Spring Breeze
 * @Date: 2020-09-29 08:44:58
 * @FilePath: /dongpo/src/store/index.js
 * @LastEditTime: 2020-09-29 17:44:24
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuData: [],
    selectIndex: {},
  },
  mutations: {
    setMenuData(state, data) {
      state.menuData = data;
    },
    setIndex(state, data) {
      state.selectIndex = data;
    },
  },
  getters: {
    getMenuData: (state) => {
      return state.menuData;
    },
  },
});
