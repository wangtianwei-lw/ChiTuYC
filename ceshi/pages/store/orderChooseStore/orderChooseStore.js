// pages/store/orderChooseStore/orderChooseStore.js
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
    allStoreList: [{
      storeName: ' 赤兔通统一润滑油(含机油+机滤+工时)',
      storeLogo: 'http://image-chitu.test.upcdn.net/chitu/storImg/20190815112110668.jpg',
      storeAddr: '赤兔通统一润滑油(含机油+机滤+工时)赤兔通统一润滑油(含机油+机滤+工时)赤兔通统一润滑油(含机油+机滤+工时)',
      distance: '1327.37',
      buyNumber: '9600'
    }, {
        storeName: ' 赤兔通统一润滑油(含机油+机滤+工时)',
        storeLogo: 'http://image-chitu.test.upcdn.net/chitu/storImg/20190815112110668.jpg',
        storeAddr: '赤兔通统一润滑油(含机油+机滤+工时)赤兔通统一润滑油(含机油+机滤+工时)赤兔通统一润滑油(含机油+机滤+工时)',
        distance: '1327.37',
        buyNumber: '9600'
      }]
  }, backs: function () {
    wx.navigateBack({
      delta: 1
    })
  },

})