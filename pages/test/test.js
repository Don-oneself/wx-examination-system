// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    img: '',
    info: '',
    num: '',
    sore: '',
    title: '',
    total: 2,
    titleType: 1,
    numOption: 1,
    titleOption: '你的饮食习惯是？',
    imgOption: '',
    options: [
      {
        optionId: 1,
        title: '有啥吃啥'
      },
      {
        optionId: 2,
        title: '吃自己想吃的'
      },
      {
        optionId: 3,
        title: '最近胖了，要节制饮食'
      },
      {
        optionId: 4,
        title: '高血压，这些都不能吃'
      },
      {
        optionId: 5,
        title: '还是多吃点养生食品'
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
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
  answer: function (option) {
    var that = this;
    if (option.target.dataset.numoption == option.target.dataset.total){
      wx.redirectTo({
        url: '../testResource/testResource?id=1'
      })
    }else{
      var datas = [
        {
          titleType: 1,
          num: 1,
          title: '你的饮食习惯是？',
          img: '',
          options: [
            {
              optionId: 1,
              title: '有啥吃啥'
            },
            {
              optionId: 2,
              title: '吃自己想吃的'
            },
            {
              optionId: 3,
              title: '最近胖了，要节制饮食'
            },
            {
              optionId: 4,
              title: '高血压，这些都不能吃'
            },
            {
              optionId: 5,
              title: '还是多吃点养生食品'
            },
          ]
        },
        {
          titleType: 2,
          num: 2,
          title: '你的饮食习惯是？',
          img: '../../image/more_17.jpg',
          options: [
            {
              optionId: 1,
              title: '有啥吃啥'
            },
            {
              optionId: 2,
              title: '吃自己想吃的'
            },
            {
              optionId: 3,
              title: '最近胖了，要节制饮食'
            },
            {
              optionId: 4,
              title: '高血压，这些都不能吃'
            },
            {
              optionId: 5,
              title: '还是多吃点养生食品'
            },
          ]
        },
      ]
      that.setData({
        titleType: 2,
        numOption: datas[1].num,
        titleOption: datas[1].title,
        imgOption: datas[1].img,
        options: datas[1].options,
      })
    }
    
    
  },
})