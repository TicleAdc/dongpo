var picTitleList = {
  init: function () {
    this.initSwiper();
  },
  initSwiper: function () {
    new Swiper('.picture-swiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
picTitleList.init()