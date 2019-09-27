// pages/store/order/order.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom
  },
  backs: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  toyhj: function () {
    wx.navigateTo({
      url: '../orderyhj/orderyhj'
    })
  },
  toChooseStore: function () {
    wx.navigateTo({
      url: '../orderChooseStore/orderChooseStore'
    })
  },
})