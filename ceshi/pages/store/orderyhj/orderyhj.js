// pages/store/orderyhj/orderyhj.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    ScreenHeight: app.globalData.ScreenHeight
  },
  backs: function () {
    wx.navigateBack({
      delta: 1
    })
  },
})