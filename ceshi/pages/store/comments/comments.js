// pages/store/comments/comments.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    ScreenHeight: app.globalData.ScreenHeight,
    number: [0],
    evalPicUrlList: [
      { evalPicUrl: 'http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg' },
      { evalPicUrl: 'http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg' },
      { evalPicUrl: 'http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg' }
    ],
  },
  backs: function () {
    wx.navigateBack({
      delta: 1
    })
  },
})