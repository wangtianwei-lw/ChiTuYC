// pages/store/storeInf/storeInf.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ["http://image-chitu.test.upcdn.net/chitu/storImg/20190815112110668.jpg", "http://image-chitu.test.upcdn.net/chitu/storImg/20190807152643278.jpg"],
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    time: ['06:00-17:00']
  }, 
  backs: function () {
    wx.navigateBack({
      url: '../home/store'
    })
  },

})