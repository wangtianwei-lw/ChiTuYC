// pages/store/store.js
const app = getApp();
Page({
  data: {
    region: ['浙江省', '杭州市', '西湖区'],
    service:['爱车保养', '轮胎更换', '品牌机油','洗车'],
    area:['全部区域'],
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      this.getCityInfo()
    }
  },
  RegionChange: function (e) {
    this.setData({
      region: e.detail.value,
      area:e.detail.value[2],
    })
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../storeInf/storeInf'
    })
  },
  PickerChanges(e) {
    this.setData({
      index: e.detail.value
    })
  },
  onLoad:function(e){
    // console.log(app.globalData.StatusBar),
    //   console.log(app.globalData.CustomBar)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //获取数据库数据
    getCityInfo: function () {
      wx.showLoading({
        title: 'Loading...',
      })  
   var city = '330100';//获取到全局变量
   var that = this
    wx.request({
       url: 'http://192.169.3.35:8080/weChatQueryController/query',//给函数传递服务器地址参数 
      data: {
        key: '1000',
         city:city,
       },//给服务器传递数据
       header: {
         'content-type': 'application/json' // 默认值，返回的数据设置为json数组格式
       },
      success: function (res) {
         console.log(res);//打印出返回的数据
        var temp = res.data.data;
        //初始化更新数据
        that.setData({
          provinces: temp,
          multiArray: [temp, temp[0].citys, temp[0].citys[0].areas],
          multiIndex: [0, 0, 0]
        })//通过setData方法把返回的数据复制给本页面定义的list数组
       },
     })
    },
    //点击确定
    bindMultiPickerChange: function (e) {
      // console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        multiIndex: e.detail.value
      })
    },
  }
})
       