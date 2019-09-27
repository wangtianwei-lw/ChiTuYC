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
    time: ['06:00-17:00'],
    distance: ['960'],
    collection:['已收藏'],
    number:["666"],
    serviceList: [{
        serviceName: "轮胎更换"
        },{
        serviceName: "爱车保养"
        },{
        serviceName: "洗车"
        },{
        serviceName: "汽车维修"
        }
        ],
        evalPicUrlList: [
      { evalPicUrl: 'http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg' },
      { evalPicUrl: 'http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg' },
      { evalPicUrl: 'http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg' }
    ],
  }, 
  toOrderInf: function () {
    wx.navigateTo({
      url: '../order/order'
    })
  }, 
  toGoodsInf: function() {
    wx.navigateTo({
      url: '../goodsInf/goodsInf'
    })
  }, 
  backs: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  toComments: function () {
    wx.navigateTo({
      url: '../comments/comments'
    })
  },
})