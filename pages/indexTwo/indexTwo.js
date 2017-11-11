//indexTwo.js
//获取应用实例
var app = getApp()
Page({
  data: {
    mode: 'widthFix',
    imgArray: [
      {
        imgUrl: '../../image/more_05.jpg',
      },
      {
        imgUrl: '../../image/more_11.jpg',
      },
      {
        imgUrl: '../../image/more_17.jpg',
      },
    ]
  },
  toMiniProgram:function(){
    wx.navigateToMiniProgram({
      appId: '',
      path: 'pages/index/index',
      extraData: {
        foo: 'bar'
      },
      envVersion: 'develop',
      success(res) {
        // 打开成功
      },
      fail(res){
        wx.showModal({
          title: '提示',
          content: '功能暂未开放，敬请期待！',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    })
  }
})
