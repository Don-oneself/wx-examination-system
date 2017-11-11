//获取应用实例
var app = getApp()
Page({
  data: {
    id: 2,
    img: '../../image/index_12.jpg',
    info: '你的厚道指数是70%，总是优先考虑b别人！你天生善良,做不了坏人,所以自私自利的事情你也敢不出来;认识你的人对你评价很高,认为你是一个值得信赖的人,因为你重来没有坏心眼,当然不会做损人利己的事情。',
    num: 43,
    sore: 2.3,
    title: '测测你有多厚道?',
    resourceName: '厚道指数',
    resource: '70%',
    dates: [
      {
        id: 2,
        img: '../../image/index_12.jpg',
        info: '你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？',
        num: 43,
        sore: 2.3,
        title: '你对恋人有多溺爱？？',
      },
      {
        id: 2,
        img: '../../image/index_12.jpg',
        info: '你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？',
        num: 43,
        sore: 2.3,
        title: '你对恋人有多溺爱？？？你对恋人有多溺爱？？？你对恋人有多溺爱？？？你对恋人有多溺爱？？？',
      },
      {
        id: 2,
        img: '../../image/index_12.jpg',
        info: '你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？',
        num: 43,
        sore: 2.3,
        title: '你对恋人有多溺爱？？？？？',
      },
      {
        id: 2,
        img: '../../image/index_12.jpg',
        info: '你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？',
        num: 43,
        sore: 2.3,
        title: '你对恋人有多溺爱？？',
      },
      {
        id: 2,
        img: '../../image/index_12.jpg',
        info: '你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？',
        num: 43,
        sore: 2.3,
        title: '你对恋人有多溺爱？？',
      },
      {
        id: 2,
        img: '../../image/index_12.jpg',
        info: '你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？',
        num: 43,
        sore: 2.3,
        title: '你对恋人有多溺爱？？？你对恋人有多溺爱？？？你对恋人有多溺爱？？？你对恋人有多溺爱？？？',
      },
      {
        id: 2,
        img: '../../image/index_12.jpg',
        info: '你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？',
        num: 43,
        sore: 2.3,
        title: '你对恋人有多溺爱？？？？？',
      },
      {
        id: 2,
        img: '../../image/index_12.jpg',
        info: '你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？',
        num: 43,
        sore: 2.3,
        title: '你对恋人有多溺爱？？',
      },
      {
        id: 2,
        img: '../../image/index_12.jpg',
        info: '你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？',
        num: 43,
        sore: 2.3,
        title: '你对恋人有多溺爱？？？？？',
      },
      {
        id: 2,
        img: '../../image/index_12.jpg',
        info: '你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？你对恋人有多溺爱？',
        num: 43,
        sore: 2.3,
        title: '你对恋人有多溺爱？？',
      }
    ]
  },
  onLoad: function (option) {
    var that = this;
    wx.setNavigationBarTitle({ title: '测测你有多厚道?' });
    that.setData({
      id: option.id
    })

  },
  changePage: function (option) {
    var that = this;
    wx.redirectTo({
      url: '../itemDetail/itemDetail?id=' + option.target.dataset.id + '&img=' + option.target.dataset.img + '&info=' + option.target.dataset.info + '&num=' + option.target.dataset.num + '&sore=' + option.target.dataset.sore + '&title=' + option.target.dataset.title
    })
  },
  testIndex: function (e) {
    wx.switchTab({
      url: '../index/index'
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '测测你有多厚道？',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})