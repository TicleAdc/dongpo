var head = {
  list: [{
    name: '首页',
    url: '',
    childList: []
  }, {
    name: '医院概况',
    url: '',
    childList: [{
      name: '医院介绍',
      url: ''
    }, {
      name: '领导团队',
      url: ''
    }, {
      name: '医院荣誉',
      url: ''
    }]
  }, {
    name: '医疗服务',
    url: '',
    childList: [{
      name: '预约挂号',
      url: ''
    }, {
      name: '报告查询',
      url: ''
    }, {
      name: '院内导航',
      url: ''
    }, {
      name: '就诊指南',
      url: ''
    }, {
      name: '体检查询',
      url: ''
    }, {
      name: '常见问题',
      url: ''
    }]
  }, {
    name: '母婴保健',
    url: ''
  }, {
    name: '新闻动态',
    url: '',
    childList: [{
      name: '医院新闻',
      url: ''
    }, {
      name: '业界新闻',
      url: ''
    }, {
      name: '媒体指导',
      url: ''
    }]
  }, {
    name: '特色医疗',
    url: '',
    childList: [{
      name: '科室设置',
      url: ''
    }, {
      name: '专家介绍',
      url: ''
    }]
  }, {
    name: '党群工作',
    url: ''
  }, {
    name: '医院文化',
    url: '',
    childList: [{
      name: '品牌形象',
      url: ''
    }, {
      name: '院训宗旨',
      url: ''
    }, {
      name: '特色文化',
      url: ''
    }, {
      name: '职工风采',
      url: ''
    }]
  }, {
    name: '专题活动',
    url: ''
  }, {
    name: '健康科普',
    url: '',
    childList: [{
      name: '在线辟谣',
      url: ''
    }, {
      name: '健康宝典',
      url: ''
    }, {
      name: '情满东坡',
      url: ''
    }]
  }, {
    name: '通知公告',
    url: '',
    childList: [{
      name: '医院公告',
      url: ''
    }, {
      name: '招标信息',
      url: ''
    }]
  }],
  init: function () {
    var self = this;
    var ul = document.createElement('ul');
    var nav = document.querySelector('.head-nav-container');
    ul.setAttribute('class', 'head-nav flex-box');
    this.list.forEach(function (item) {
      var li = self.setLine(item);
      ul.appendChild(li);
      if (item.childList) {
        li.appendChild(self.setList(item.childList, 'head-nav-list'));
      }
    });
    nav.appendChild(ul);
  },
  setList: function (list, cssClass) {
    var ul = document.createElement('ul');
    var self = this;
    if (cssClass) ul.setAttribute('class', cssClass);
    list.forEach(function (item) {
      var li = self.setLine(item);
      ul.appendChild(li);
    })
    return ul;
  },
  setLine: function (data) {
    var li = document.createElement('li');
    li.innerHTML = '<a href="'
      + data.url
      + '">' + data.name + '</a>';
    return li;
  }
}
head.init();