var foot = {
  init: function () {
    var foot = document.querySelector('.main-foot');
    var backTop = foot.querySelector('.back-top');
    backTop.addEventListener('click', this.backTop);
  },
  backTop: function () {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
}
foot.init();