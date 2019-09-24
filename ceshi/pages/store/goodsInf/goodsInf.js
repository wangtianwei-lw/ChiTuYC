// pages/store/goodsInf/goodsInf.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ["http://image-chitu.test.upcdn.net/chitu/manyGoodsImg/20190420135432644.jpg",
		  "http://image-chitu.test.upcdn.net/chitu/manyGoodsImg/20190420135435037.jpg",
      "http://image-chitu.test.upcdn.net/chitu/manyGoodsImg/20190420135437248.jpg"],
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    originalPrice:[128.00],
    presentPrice:[118.00],
    courier:[100],
    buyNumber:[1200]
  },
  backs: function () {
    wx.navigateBack({
      delta: 1
    })
  },

})