var index = {
  init: function () {
    this.initSwiper();
    this.initTabs();
    this.initImgList();
  },
  initSwiper: function () {
    new Swiper('.index-top-swiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    new Swiper('.index-banner-swiper', {
      // direction: 'vertical',
      followFinger: false,
      mousewheel: true,
      navigation: {
        el: '.swiper-pagination'
      },
      on: {
        init: function (swiper) {
          slide = this.slides.eq(0);
          slide.addClass('ani-slide');
        },
        transitionStart: function () {
          for (i = 0; i < this.slides.length; i++) {
            slide = this.slides.eq(i);
            slide.removeClass('ani-slide');
          }
        },
        transitionEnd: function () {
          slide = this.slides.eq(this.activeIndex);
          slide.addClass('ani-slide');
          console.log(this);
        },
      }
    });
  },
  initTabs: function () {
    var container = document.querySelector('.news-container');
    var list = container.querySelectorAll('.tab-list > li');
    var more = container.querySelector('.tab-more a');
    if (list.length === 0) return;
    [].forEach.call(list, function (li, index) {
      if (index === list.length - 1) return;
      li.addEventListener('click', checkList);
    });
    checkList({
      currentTarget: list[0]
    });
    function checkList (e) {
      [].forEach.call(list, function (li) {
        if (li === e.currentTarget) {
          li.classList.add('active');
          more.setAttribute('href', li.getAttribute('href'));
        } else {
          li.classList.remove('active');
        }
      })
    }
  },
  initImgList: function () {
    var list = document.querySelectorAll('.img-list > li');
    if (list.length === 0) return;
    [].forEach.call(list, function (li) {
      li.addEventListener('click', checkList);
    });
    checkList({
      currentTarget: list[0]
    });
    function checkList(e) {
      [].forEach.call(list, function (li) {
        if (li === e.currentTarget) {
          li.classList.add('active');
        } else {
          li.classList.remove('active');
        }
      })
    }
  }
}
index.init();


// var swiper = new Swiper('.swiper-container', {
//   direction: 'vertical',
//   followFinger: false,
//   speed: 800,
//   mousewheel: true,
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   on: {
//     init: function (swiper) {
//       slide = this.slides.eq(0);
//       slide.addClass('ani-slide');
//     },
//     transitionStart: function () {
//       for (i = 0; i < this.slides.length; i++) {
//         slide = this.slides.eq(i);
//         slide.removeClass('ani-slide');
//       }
//     },
//     transitionEnd: function () {
//       slide = this.slides.eq(this.activeIndex);
//       slide.addClass('ani-slide');

//     },
//   }
// });
