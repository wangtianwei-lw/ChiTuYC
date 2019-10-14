//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: ["http://image-chitu.test.upcdn.net/chitu/bannerImg/20190821160014592.jpg",    "http://image-chitu.test.upcdn.net/chitu/bannerImg/20190821155909867.jpg"],
    indicatorDots: true,//轮播图的点
    autoplay: true,//自动播放
    interval: 5000,
    duration: 1000,
    circular:true,//自动循环
    storeList: [{ 
      storeName:'赤兔养车红涛汽车快修年检测试测试测试测试三生三世',
      storeLogo:'http://image-chitu.test.upcdn.net/chitu/storImg/20190703144931691.jpg'
    }, {
        storeName: '赤兔养车红涛汽车快修年检',
        storeLogo: 'http://image-chitu.test.upcdn.net/chitu/storImg/20190703144931691.jpg'
      }, {
        storeName: '赤兔养车红涛汽车快修年检',
        storeLogo: 'http://image-chitu.test.upcdn.net/chitu/storImg/20190703144931691.jpg'
      }]
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  carWX: function () {
    wx.navigateTo({
      url: '../carWX/carWX',
    })
  },
  addCar: function () {
    wx.navigateTo({
      url: '../../user/addCar/addCar',
    })
  },
  toNodata: function(){
    wx.navigateTo({
      url: '../../public/noData/noData?title=赤兔通润滑油',
    })
  },
  toNodatas: function () {
    wx.navigateTo({
      url: '../../public/noData/noData?title=加入我们',
    })
  },
  toNodatad: function () {
    wx.navigateTo({
      url: '../../public/noData/noData?title=道路救援',
    })
  },
  toXiaDan: function () {
    wx.navigateTo({
      url: '../../public/noData/noData?title=下单流程',
    })
  },
  toGoodsInf: function () {
    wx.navigateTo({
      url: '../../store/goodsInf/goodsInf',
    })
  },
  toStoreInf: function () {
    wx.navigateTo({
      url: '../../store/storeInf/storeInf',
    })
  },
  toAIche: function () {
    wx.navigateTo({
      url: '../chooseGoods/chooseGoods?title=爱车保养',
    })
  },
  toluntai: function () {
    wx.navigateTo({
      url: '../chooseGoods/chooseGoods?title=轮胎更换',
    })
  },
  tojiyou: function () {
    wx.navigateTo({
      url: '../chooseGoods/chooseGoods?title=机油购买',
    })
  },
  // onLoad: function () {
  //   var city = '330100';//获取到全局变量
  //   wx.request({
  //     url: 'https://wx.chituyc.com/test/weChatQueryController/query',//给函数传递服务器地址参数
  //     data: {
  //       key: '1000',
  //       city:city,
  //     },//给服务器传递数据，若本次请求不需要数据，可以不填
  //     header: {
  //       'content-type': 'application/json' // 默认值，返回的数据设置为json数组格式
  //     },
  //     success: function (res) {
  //       console.log(res);//打印出返回的数据
  //       this.setData({
  //         imgUrls:res.banner
  //       })//通过setData方法把返回的数据复制给本页面定义的list数组
  //     },
  //   })
  // },
})
