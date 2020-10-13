var head = {
  init: function () {
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
          node: a
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
  similar: function similar (s, t, f) {
    if (!s || !t) {
      return 0
    }
    var l = s.length > t.length ? s.length : t.length
    var n = s.length
    var m = t.length
    var d = []
    f = f || 3
    var min = function (a, b, c) {
      return a < b ? (a < c ? a : c) : (b < c ? b : c)
    }
    var i, j, si, tj, cost
    if (n === 0) return m
    if (m === 0) return n
    for (i = 0; i <= n; i++) {
      d[i] = []
      d[i][0] = i
    }
    for (j = 0; j <= m; j++) {
      d[0][j] = j
    }
    for (i = 1; i <= n; i++) {
      si = s.charAt(i - 1)
      for (j = 1; j <= m; j++) {
        tj = t.charAt(j - 1)
        if (si === tj) {
          cost = 0
        } else {
          cost = 1
        }
        d[i][j] = min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost)
      }
    }
    var res = (1 - d[n][m] / l)
    return res.toFixed(f)
  }
};
head.init();