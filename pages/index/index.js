//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    searchText: true,
    result: "",
    resultOne: "",
    noData: true,
    imgUrls: [
      {
        id: 1,
        img: '../../image/index_05.jpg',
        title: '测测你有多厚道？',
        sore: 4.3,
        num: 456,
        info: '厚道的人不会算计你，厚道的人不会欺骗你，厚道的人不会赖着你。'
      },
      {
        id: 2,
        img: '../../image/index_12.jpg',
        title: '测测你有多厚道？',
        sore: 4.3,
        num: 456,
        info: '厚道的人不会算计你，厚道的人不会欺骗你，厚道的人不会赖着你。'
      },
      {
        id: 1,
        img: '../../image/index_05.jpg',
        title: '测测你有多厚道？',
        sore: 4.3,
        num: 456,
        info: '厚道的人不会算计你，厚道的人不会欺骗你，厚道的人不会赖着你。'
      },
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
    hot: [
      {
        bg: 'bgColor-1',
        hotText: '全部',
      },
      {
        bg: 'bgColor-2',
        hotText: '情感'
      },
      {
        bg: 'bgColor-3',
        hotText: '性格'
      },
      {
        bg: 'bgColor-4',
        hotText: '智商'
      },
      {
        bg: 'bgColor-5',
        hotText: '影视'
      },
      {
        bg: 'bgColor-6',
        hotText: '恶搞'
      },
      {
        bg: 'bgColor-7',
        hotText: '星座'
      },
      {
        bg: 'bgColor-8',
        hotText: '其他'
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
  onLoad: function () {
    var that = this;
    // 获取用户信息
    wx.getUserInfo({
      success: function (res) {
        console.log(res);
        // success
        // that.setData({
        //   nickName: res.userInfo.nickName,
        //   userInfoAvatar: res.userInfo.avatarUrl,
        //   province: res.userInfo.province,
        //   city: res.userInfo.city
        // })
        // switch (res.userInfo.gender) {
        //   case 0:
        //     that.setData({
        //       sex: '未知'
        //     })
        //     break;
        //   case 1:
        //     that.setData({
        //       sex: '男'
        //     })
        //     break;
        //   case 2:
        //     that.setData({
        //       sex: '女'
        //     })
        //     break;
        // }
      },
      fail: function () {
        // fail
        console.log("获取失败！")
      },
      complete: function () {
        // complete
        console.log("获取用户信息完成！")
      }
    })
  },
  changClassify: function () {
    var that = this;
    var a = [
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
        img: '../../image/index_05.jpg',
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
    ];
    that.setData({
      datas: a
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
