var slide = {
  list: null,
  swiper: null,
  init: function (dom) {
    var root = document.querySelector(dom);
    var list = root.querySelectorAll('img');
    var self = this;
    this.list = list;
    list.forEach(function (img) {
      img.addEventListener('click', self.show.bind(self));
    });
  },
  createSwiper: function () {
    var container = document.createElement('div');
    var mask = document.createElement('div');
    var slideList = document.createElement('div');
    
  },
  show: function (e) {
    if (this.swiper) {
      this.swiper.classList.remove('hide');
    } else {
      this.createSwiper();
    }
  },
  hide: function () {
    this.swiper.classList.add('hide');
  },
  findIndex: function (img) {
    for (var i = 0, len = this.list.length; i < len; i++) {
      if (this.list[i] === img) {
        return i;
      }
    }
  }
}