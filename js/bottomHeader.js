/*
 * @Author: Spring Breeze
 * @Date: 2020-10-15 15:15:02
 * @FilePath: /dongpo/js/bottomHeader.js
 * @LastEditTime: 2020-10-15 15:20:46
 */
// 在手机版下的导航头部

function getScrollbarWidth() {
  var odiv = document.createElement('div'), //创建一个div
    styles = {
      width: '100px',
      height: '100px',
      overflowY: 'scroll', //让他有滚动条
    },
    i,
    scrollbarWidth;
  for (i in styles) odiv.style[i] = styles[i];
  document.body.appendChild(odiv); //把div添加到body中
  scrollbarWidth = odiv.offsetWidth - odiv.clientWidth; //相减
  odiv.remove(); //移除创建的div
  return scrollbarWidth; //返回滚动条宽度
}

const moveheader = () => {
  if (document.documentElement.clientWidth + getScrollbarWidth() < 720) {
    // 医院介绍
    if (document.getElementById('introduction-body')) {
      document
        .getElementById('introduction-body')
        .appendChild(document.getElementById('head-menu-list'));
      // leader
    } else if (document.getElementById('leader-main-container')) {
      document
        .getElementById('leader-main-container')
        .appendChild(document.getElementById('head-menu-list'));
    } else if (document.getElementById('news-list-container')) {
      document
        .getElementById('news-list-container')
        .appendChild(document.getElementById('head-menu-list'));
    }
  } else {
    //复原
    if (document.getElementById('introduction-body')) {
      document
        .getElementsByClassName('head-menu')[0]
        .appendChild(document.getElementById('head-menu-list'));
      // leader
    } else if (document.getElementById('leader-main-container')) {
      document
        .getElementsByClassName('head-menu')[0]
        .appendChild(document.getElementById('head-menu-list'));
    } else if (document.getElementById('news-list-container')) {
      document
        .getElementsByClassName('head-menu')[0]
        .appendChild(document.getElementById('head-menu-list'));
    }
  }
};
onload = moveheader;
onresize = moveheader;
