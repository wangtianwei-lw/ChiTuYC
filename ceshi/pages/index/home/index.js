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
