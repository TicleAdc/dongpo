/*
 * @Author: Spring Breeze
 * @Date: 2020-09-29 11:24:03
 * @FilePath: /dongpo/src/util/mapComponent.js
 * @LastEditTime: 2020-09-29 14:03:56
 */

const map = Object.create(null);
const mapMsgList = ['hospitalnews', 'linenews', 'mediareport'];
mapMsgList.forEach((v) => {
  map[v] = 'msgListContainer';
});
export const msgListContainer = map;
