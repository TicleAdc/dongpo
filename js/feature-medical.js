var feature = {
  init: function () {
    this.initMenu();
  },
  initMenu: function () {
    var li = document.querySelectorAll('.menu-list li');
    for (var i = 0; i < li.length; i++)
      li[i].onclick = function () {
        for (var i = 0; i < li.length; i++) li[i].className = '';
        this.className = 'active'
        // document.querySelectorAll('.ks_title')[0].innerHTML = this.innerHTML
        var name = document.querySelectorAll('.ks_name')
        var text = this.innerHTML
        for (var h = 0; h < name.length; h++) {
          name[h].innerHTML = text
        }
      }
  }
};
feature.init();