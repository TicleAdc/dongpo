var slide = {
  list: null,
  swiper: null,
  init: function (dom) {
    var root = document.querySelector(dom);
    var list = root.querySelectorAll('img');
    var self = this;
    this.list = [];
    [].forEach(list, function (img) {
      self.list.push(img);
      img.addEventListener('click', self.show.bind(self));
    });
  },
  createSwiper: function (isShow) {
    var container = document.createElement('div');
    var mask = document.createElement('div');
    var slideList = document.createElement('ul');
    var prev = document.createElement('div');
    var next = document.createElement('div');
    var hide = document.createElement('i');
    mask.classList.add('mask');
    container.classList.add('slide-container');
    slideList.classList.add('slide-list');
    slideList.classList.add('swiper-wrapper');
    prev.classList.add('swiper-button-prev');
    next.classList.add('swiper-button-next');
    hide.classList.add('swiper-close');
    container.appendChild(mask);
    container.appendChild(hide);
    container.appendChild(slideList);
    this.list.forEach(function (img) {
      var li = document.createElement('li');
      li.classList.add('swiper-slide');
      img = img.cloneNode(img);
      li.appendChild(img);
      slideList.appendChild(li);
    });
    container.appendChild(prev);
    container.appendChild(next);
    document.body.appendChild(container);
    hide.addEventListener('click', this.hide.bind(this));
    var swiper = new Swiper('.slide-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    this.swiper = {
      element: container,
      swiper: swiper
    };
    if (!isShow) {
      this.swiper.element.classList.add('hide');
    }
    return container;
  },
  show: function (e) {
    var index = this.list.indexOf(e.currentTarget) || 0;
    if (this.swiper) {
      this.swiper.element.classList.remove('hide');
    } else {
      this.createSwiper(true);
    }
    this.swiper.swiper.slideTo(index);
  },
  hide: function () {
    this.swiper.element.classList.add('hide');
  },
  findIndex: function (img) {
    for (var i = 0, len = this.list.length; i < len; i++) {
      if (this.list[i] === img) {
        return i;
      }
    }
  }
}