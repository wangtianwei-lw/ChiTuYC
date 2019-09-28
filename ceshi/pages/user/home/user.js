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
 toAllOrderList :function(){
   wx.navigateTo({
     url: '../orderList/orderList',
   })
 }
})