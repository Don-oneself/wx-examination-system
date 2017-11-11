//获取应用实例
var app = getApp()
Page({
  data: {
    scrollTop: 0,
    id: '',
    img: '',
    info: '',
    num: '',
    sore: '',
    title: '',
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
    wx.setNavigationBarTitle({ title: option.title });
    that.setData({
      id: option.id,
      img: option.img,
      info: option.info,
      num: option.num,
      sore: option.sore,
      title: option.title
    })

  },
  changePage: function (option) {
    var that = this;
    wx.redirectTo({
      url: '../itemDetail/itemDetail?id=' + option.target.dataset.id + '&img=' + option.target.dataset.img + '&info=' + option.target.dataset.info + '&num=' + option.target.dataset.num + '&sore=' + option.target.dataset.sore + '&title=' + option.target.dataset.title
    })
    // that.setData({
    //   id: option.target.dataset.id,
    //   img: option.target.dataset.img,
    //   info: option.target.dataset.info,
    //   num: option.target.dataset.num,
    //   sore: option.target.dataset.sore,
    //   title: option.target.dataset.title
    // });
    // wx.setNavigationBarTitle({ title: option.target.dataset.title });
  },
  lower: function (e) {
    console.log(e);
  }
})