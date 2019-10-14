// pages/user/collcetion/collcetion.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    navTab: ['店铺收藏', '产品收藏'],
    currentTab: 0,
    allStoreList: [{
      storeName: ' 赤兔通统一润滑油(含机油+机滤+工时)',
      storeLogo: 'http://image-chitu.test.upcdn.net/chitu/storImg/20190815112110668.jpg',
      storeAddr: '赤兔通统一润滑油(含机油+机滤+工时)赤兔通统一润滑油(含机油+机滤+工时)赤兔通统一润滑油(含机油+机滤+工时)',
      distance: '1327.37',
      buyNumber: '9600'
    }]
  },
  toGoodsInf: function () {
    wx.navigateTo({
      url: '../../store/goodsInf/goodsInf',
    })
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../../store/storeInf/storeInf'
    })
  },
  currentTab: function (e) {
    if (this.data.currentTab == e.currentTarget.dataset.idx) {
      return;
    }
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    this.select = {
      page: 1,
      size: 6,
      isEnd: false
    }
    this.data.sendList = [];
    // this.getData()
  },
  backs: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})