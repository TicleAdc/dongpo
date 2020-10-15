try {
  var head = {
    init: function () {
      if (this.checkBrowser()) {
        this.initMobileMenu();
      } else {
        this.initPcMenu();
      }
    },
    initPcMenu: function () {
      var container = document.querySelector('.head-nav-container');
      var active = container.querySelector('.active');
      var child = container.querySelector('.head-nav-list .active');
      var list = container.querySelectorAll('a');
      var result = [];
      var self = this;
      var current = null;
      var ul;
      if (!active) {
        [].forEach.call(list, function (a) {
          var similar = self.similar(location.href, a.href) - 0;
          result.push({
            similar: similar,
            node: a,
          });
        });
        result.sort(function (x, y) {
          return y.similar - x.similar;
        });
        console.log(result);
        current = result[0].node;
        ul = current.parentElement.parentElement;
        if (ul.classList.contains('head-nav')) {
          current.parentElement.classList.add('active');
        } else if (ul.classList.contains('head-nav-list')) {
          current = ul.parentElement;
          current.classList.add('active');
        }
      }
      if (child) {
        child.parentElement.parentElement.classList.add('active');
      }
    },
    initMobileMenu: function () {
      var form = document.querySelector('.head-form');
      var container = document.querySelector('.head-nav-container');
      if (!form || !container) return;
      var headTop = document.querySelector('.head-top').cloneNode(true);
      var headForm = document.querySelector('.head-form').cloneNode(true);
      var foot = document.querySelector('.main-foot').cloneNode(true);
      var main = document.createElement('div');
      var button = document.createElement('button');
      var close = document.createElement('i');
      main.classList.add('nav-container');
      main.classList.add('head-nav-hide');
      button.classList.add('head-nav-button');
      close.classList.add('head-nav-close');
      button.addEventListener('click', show);
      close.addEventListener('click', hide);
      form.appendChild(button);
      main.appendChild(headTop);
      main.appendChild(headForm);
      main.appendChild(container);
      main.appendChild(foot);
      main.insertBefore(close, main.firstChild);
      document.body.appendChild(main);
      function show(e) {
        e.preventDefault();
        main.classList.remove('head-nav-hide');
        main.classList.add('head-nav-show');
      }
      function hide() {
        main.classList.remove('head-nav-show');
        main.classList.add('head-nav-hide');
      }
    },
    checkBrowser: function () {
      window.addEventListener('resize', checkIsMobile);
      return checkIsMobile();
      function checkIsMobile() {
        var maxWidth = 720;
        var width =
          document.documentElement.clientWidth || document.body.clientWidth;
        var isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(
          navigator.userAgent
        );
        if (isMobile || width <= maxWidth) {
          window.isMobile = true;
        } else {
          window.isMobile = false;
        }
        return window.isMobile;
      }
    },
    similar: function similar(s, t, f) {
      if (!s || !t) {
        return 0;
      }
      var l = s.length > t.length ? s.length : t.length;
      var n = s.length;
      var m = t.length;
      var d = [];
      f = f || 3;
      var min = function (a, b, c) {
        return a < b ? (a < c ? a : c) : b < c ? b : c;
      };
      var i, j, si, tj, cost;
      if (n === 0) return m;
      if (m === 0) return n;
      for (i = 0; i <= n; i++) {
        d[i] = [];
        d[i][0] = i;
      }
      for (j = 0; j <= m; j++) {
        d[0][j] = j;
      }
      for (i = 1; i <= n; i++) {
        si = s.charAt(i - 1);
        for (j = 1; j <= m; j++) {
          tj = t.charAt(j - 1);
          if (si === tj) {
            cost = 0;
          } else {
            cost = 1;
          }
          d[i][j] = min(
            d[i - 1][j] + 1,
            d[i][j - 1] + 1,
            d[i - 1][j - 1] + cost
          );
        }
      }
      var res = 1 - d[n][m] / l;
      return res.toFixed(f);
    },
  };
  head.init();
} catch (error) {
  console.log(error);
}

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
    }
  } else {
    //复原
    if (document.getElementById('introduction-body')) {
      document
        .getElementsByClassName('head-menu')[0]
        .appendChild(document.getElementById('head-menu-list'));
    }
  }
};
onload = moveheader;
onresize = moveheader;
