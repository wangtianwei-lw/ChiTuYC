// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: ['']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var phones = '15283666229';
    that.setData({
      phone:phones.substring(0, 3) + "****" + phones.substring(7, phones.length)
    })
  },
  userInf: function () {
    wx.navigateTo({
      url: '../userInf/userInf',
    })
  },
 toAllOrderList :function(){
   wx.navigateTo({
     url: '../orderList/orderList',
   })
 },
  feedback: function () {
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  },
  collcetion: function () {
    wx.navigateTo({
      url: '../collcetion/collcetion',
    })
  },
  car: function () {
    wx.navigateTo({
      url: '../car/car',
    })
  },
  toMyTG: function () {
    wx.navigateTo({
      url: '../myTG/myTG',
    })
  },
  tomaintenanceManual: function () {
    wx.navigateTo({
      url: '../maintenanceManual/maintenanceManual',
    })
  },
  toYHJ: function () {
    wx.navigateTo({
      url: '../yhj/yhj',
    })
  },
  to_user_money: function () {
    wx.navigateTo({
      url: '../userMoney/userMoney',
    })
  },
  totuiguang: function () {
    wx.navigateTo({
      url: '../../public/noData/noData?title=分享好友',
    })
  },
})