'use strict';

/*
 * @Author: Spring Breeze
 * @Date: 2020-10-15 15:15:02
 * @FilePath: /dongpo/js/bottomHeader.js
 * @LastEditTime: 2020-10-15 17:55:02
 */
// 在手机版下的导航头部
function getScrollbarWidth() {
  var odiv = document.createElement('div'),
    //创建一个div
    styles = {
      width: '100px',
      height: '100px',
      overflowY: 'scroll', //让他有滚动条
    },
    i,
    scrollbarWidth;

  for (i in styles) {
    odiv.style[i] = styles[i];
  }

  document.body.appendChild(odiv); //把div添加到body中

  scrollbarWidth = odiv.offsetWidth - odiv.clientWidth; //相减

  odiv.remove(); //移除创建的div

  return scrollbarWidth; //返回滚动条宽度
}

try {
  var moveheader = function moveheader() {
    if (document.documentElement.clientWidth + getScrollbarWidth() < 720) {
      document
        .getElementsByClassName('main-foot')[0]
        .parentElement.insertBefore(
          document.getElementsByClassName('head-menu-list')[0],
          document.getElementsByClassName('main-foot')[0]
        );
    } else {
      //复原
      document
        .getElementsByClassName('head-menu')[0]
        .appendChild(document.getElementsByClassName('head-menu-list')[0]);
    }
  };
} catch (error) {
  console.log(error);
}

onload = moveheader;
onresize = moveheader;
