var feature = {
  init: function () {
    this.initMenu();
  },
  initMenu: function () {
    var li = document.querySelectorAll('.menu-list li');
    for (var i = 0; i < li.length; i++)
      li[i].onclick = function () {
        for (var i = 0; i < li.length; i++) li[i].className = '';
        this.className = 'active';
        // document.querySelectorAll('.ks_title')[0].innerHTML = this.innerHTML
        var name = document.querySelectorAll('.ks_name');
        var text = this.innerHTML;
        for (var h = 0; h < name.length; h++) {
          name[h].innerHTML = text;
        }
      };
  },
};
feature.init();

onload = initClick;
onresize = initClick;
function initClick() {
  if (document.documentElement.clientWidth < 721) {
    if (document.querySelector('#ks_title')) {
      document.querySelector('#ks_title').onclick = function () {
        var menu = document.querySelector('#menu');
        if (getComputedStyle(menu).display === 'none') {
          menu.style.display = 'block';
        } else {
          menu.style.display = 'none';
        }
      };
      document.documentElement.onclick = function (e) {
        var ksTitle = document.querySelector('#ks_title');
        var menu = document.querySelector('#menu');
        if (e.target !== ksTitle) {
          menu.style.display = 'none';
        }
      };
    } else if (document.querySelector('#path-nav')) {
      document.querySelector('#path-nav').onclick = function () {
        var menu = document.querySelector('#menu');
        if (getComputedStyle(menu).display === 'none') {
          menu.style.display = 'block';
        } else {
          menu.style.display = 'none';
        }
      };
      document.documentElement.onclick = function (e) {
        var ksTitle = document.querySelector('#path-nav');
        var menu = document.querySelector('#menu');
        if (e.target !== ksTitle) {
          menu.style.display = 'none';
        }
      };
    }
  }
}
