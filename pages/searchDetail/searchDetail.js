//indexThree.js
//获取应用实例
var app = getApp()
Page({
  data: {
    searchText: true,
    result: "",
    resultOne: "",
    noData: true,

    hot: [
      {
        bg: 'bgColor-1',
        title: '心理年龄',
        id: 100,
        img: '../../image/index_05.jpg',
        sore: 5.0,
        num: 4,
        info: '厚道的人不会算计你，厚道的人不会欺骗你，厚道的人不会赖着你。'
      },
      {
        bg: 'bgColor-2',
        title: '厚脸皮指数',
        id: 100,
        img: '../../image/index_05.jpg',
        sore: 5.0,
        num: 4,
        info: '厚道的人不会算计你，厚道的人不会欺骗你，厚道的人不会赖着你。'
      },
      {
        bg: 'bgColor-3',
        title: '恋爱智商',
        id: 100,
        img: '../../image/index_05.jpg',
        sore: 5.0,
        num: 4,
        info: '厚道的人不会算计你，厚道的人不会欺骗你，厚道的人不会赖着你。'
      },
      {
        bg: 'bgColor-4',
        title: '潜在性格',
        id: 100,
        img: '../../image/index_05.jpg',
        sore: 5.0,
        num: 4,
        info: '厚道的人不会算计你，厚道的人不会欺骗你，厚道的人不会赖着你。'
      },
      {
        bg: 'bgColor-5',
        title: '内心有多孤独内心有多孤独',
        id: 100,
        img: '../../image/index_05.jpg',
        sore: 5.0,
        num: 4,
        info: '厚道的人不会算计你，厚道的人不会欺骗你，厚道的人不会赖着你。'
      },
      {
        bg: 'bgColor-6',
        title: '逗比等级',
        id: 100,
        img: '../../image/index_05.jpg',
        sore: 5.0,
        num: 4,
        info: '厚道的人不会算计你，厚道的人不会欺骗你，厚道的人不会赖着你。'
      },
      {
        bg: 'bgColor-7',
        title: '爱情观',
        id: 100,
        img: '../../image/index_05.jpg',
        sore: 5.0,
        num: 4,
        info: '厚道的人不会算计你，厚道的人不会欺骗你，厚道的人不会赖着你。'
      },
      {
        bg: 'bgColor-8',
        title: '好色程度',
        id: 100,
        img: '../../image/index_05.jpg',
        sore: 5.0,
        num: 4,
        info: '厚道的人不会算计你，厚道的人不会欺骗你，厚道的人不会赖着你。'
      },
    ],
    datas: [
      {
        id: 100,
        img: '../../image/index_05.jpg',
        title: '测测你有多厚道？',
        sore: 4.3,
        num: 456,
        info: '厚道的人不会算计你，厚道的人不会欺骗你，厚道的人不会赖着你。'
      },
      {
        id: 100,
        img: '../../image/index_12.jpg',
        title: '测测你有多厚道？',
        sore: 0.8,
        num: 46,
        info: '厚道的人不会算计你，厚道的人不会欺骗你，厚道的人不会赖着你。'
      },
      {
        id: 100,
        img: '../../image/index_05.jpg',
        title: '测测你有多厚道？',
        sore: 1.0,
        num: 56,
        info: '厚道的人不会算计你，厚道的人不会欺骗你，厚道的人不会赖着你。'
      },
      {
        id: 100,
        img: '../../image/index_12.jpg',
        title: '测测你有多厚道？',
        sore: 2.4,
        num: 4,
        info: '厚道的人不会算计你，厚道的人不会欺骗你，厚道的人不会赖着你。'
      },
      {
        id: 100,
        img: '../../image/index_05.jpg',
        title: '测测你有多厚道？',
        sore: 5.0,
        num: 4,
        info: '厚道的人不会算计你，厚道的人不会欺骗你，厚道的人不会赖着你。'
      },
      {
        id: 100,
        img: '../../image/index_12.jpg',
        title: '测测你有多厚道？',
        sore: 5.0,
        num: 46,
        info: '厚道的人不会算计你，厚道的人不会欺骗你，厚道的人不会赖着你。'
      },
      {
        id: 100,
        img: '../../image/index_05.jpg',
        title: '测测你有多厚道？',
        sore: 3.4,
        num: 6,
        info: '厚道的人不会算计你，厚道的人不会欺骗你，厚道的人不会赖着你。'
      },
    ]
  },
  // 搜索按钮
  search: function () {
    var that = this;
    that.setData({
      searchText: false,
      result: that.data.resultOne
    })
  },
  // input中间存值
  textInput: function (e) {
    this.setData({
      resultOne: e.detail.value
    })
  },
  // 关闭按钮
  close: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    var a = that.data.datas;
    that.setData({
      datas: that.data.datas.concat(a)
    })
  },
})
