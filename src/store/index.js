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
  actions: {
    getMenuByPath(store, path) {
      let find = (list, path) => {
        if (!list || !list.length) return null;
        let i = 0, len = list.length;
        for (i; i < len; i++) {
          if (list[i].menuuri === path) {
            return list[i];
          } else {
            let result = find(list[i].children, path);
            if (result) {
              return result;
            }
          }
        }
      }
      return find(store.state.menuData, path);
    }
  }
});
