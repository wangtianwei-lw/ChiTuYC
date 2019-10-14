// pages/store/storeInf/storeInf.js
const app = getApp();
var WxParse = require('../../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ["http://image-chitu.test.upcdn.net/chitu/storImg/20190815112110668.jpg", "http://image-chitu.test.upcdn.net/chitu/storImg/20190807152643278.jpg"],
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    ScreenHeight: app.globalData.ScreenHeight,
    time: ['06:00-17:00'],
    distance: ['1960'],
    collection:['已收藏'],
    number:["666"],
    modalName:null,
    serviceList: [
      {
        serviceName: "轮胎更换", serviceImg: '/images/icon_rb_unselect.png',checkImg:false,
        article:[],
        goodslist: [
        { 
            goodsname: '壳牌喜力HX3高品质机油（机油4L+机滤+工时费，运营车辆专享', ids: "1", goodsnumber: 1, id: 1, maxGoodsnumber: 1000,
             serviceImg: '/images/icon_rb_unselect.png', checkImg: false,        
        },{ 
            goodsname: '壳牌喜力HX3高品质机油（机油4L+机滤+工时费，运营车辆专享', ids: "2", goodsnumber: 1, id: 1, maxGoodsnumber: 7,
            serviceImg: '/images/icon_rb_unselect.png', checkImg: false,
        }
      ],
      id: '1', isShowFrom: true, pic:'store_arrow_top_pic'},
      {
        serviceName: "爱车保养", serviceImg: '/images/icon_rb_unselect.png', id: '2', isShowFrom: false, checkImg: false,
      pic: 'store_arrow_down_pic'
        },{
        serviceName: "洗车", serviceImg: '/images/icon_rb_unselect.png', checkImg: false,
      goodslist: [
          { 
          goodsname: '壳牌喜力HX3高品质机油（机油4L+机滤+工时费，运营车辆专享', ids: "1", goodsnumber: 1, id: 3, maxGoodsnumber: 5, 
          serviceImg: '/images/icon_rb_unselect.png', checkImg: false,
        },{ 
          goodsname: '壳牌喜力HX3高品质机油（机油4L+机滤+工时费，运营车辆专享', ids: "2", goodsnumber: 1, id: 3, maxGoodsnumber: 5, 
          serviceImg: '/images/icon_rb_unselect.png', checkImg: false,
        }
        ],
      id: '3', isShowFrom: false, pic: 'store_arrow_down_pic'},
      { 
        serviceName: "汽车维修", serviceImg: '/images/icon_rb_unselect.png', id: '4', isShowFrom: true, checkImg: false,
      pic: 'store_arrow_down_pic'
      }
        ],
     evalPicUrlList: [
      { evalPicUrl: 'http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg' },
      { evalPicUrl: 'http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg' },
      { evalPicUrl: 'http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg' }
    ]
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  }, 
  hideModal(e) {
    this.setData({
      modalName: null
    })
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
  cellPhone:function(e){
  //  console.log(e.currentTarget.dataset.phone);
   wx.makePhoneCall({
     phoneNumber: e.currentTarget.dataset.phone,
   })
  },
  toCheck(e){
    var id = e.target.dataset.id;//获取服务排序id
    var serviceImg = "serviceList[" + (id - 1) + "].serviceImg";
    var checkImg = "serviceList[" + (id - 1) + "].checkImg";
    this.setData({
      [checkImg]:this.data.serviceList[(id - 1)].checkImg == false ? true : false,
      [serviceImg]: this.data.serviceList[(id - 1)].checkImg == true ? '/images/icon_rb_unselect.png' : '/images/icon_rb_selected.png',
    })
  },
  checkGoods(e) {
    var id = e.target.dataset.id;//获取服务排序id
    var ids = e.target.dataset.ids;//获取服务排序id
    var serviceImg = "serviceList[" + (id - 1) + "].goodslist[" + (ids - 1) +"].serviceImg";//改变商品最左边的图片（那个圈）
    var checkImg = "serviceList[" + (id - 1) + "].goodslist[" + (ids - 1) +"].checkImg";//判断商品是否被选中
    var serviceImgs = "serviceList[" + (id - 1) + "].serviceImg";//改变服务最左边的图片（那个圈）
    var checkImgs = "serviceList[" + (id - 1) + "].checkImg";//判断服务是否被选中
    this.setData({
      [checkImg]: this.data.serviceList[(id - 1)].goodslist[(ids - 1)].checkImg == false ? true : false,
      [serviceImg]: this.data.serviceList[(id - 1)].goodslist[(ids - 1)].checkImg == true ? '/images/icon_rb_unselect.png' : '/images/icon_rb_selected.png',
      [serviceImgs]: this.data.serviceList[(id - 1)].goodslist[(ids - 1)].checkImg == true ? '/images/icon_rb_unselect.png' :'/images/ex_choose_no_all.png',
    })
  },
  showFrom(e) {
    var param = e.target.dataset.param;
    var isShowFrom = "serviceList[" + (param - 1) + "].isShowFrom";//先用一个变量，把(serviceList[0].isShowFrom)用字符串拼接起来
    var pic = "serviceList[" + (param - 1) + "].pic";
    this.setData({
      [isShowFrom]: this.data.serviceList[(param - 1)].isShowFrom == false ? true : false,
      [pic]: this.data.serviceList[(param - 1)].isShowFrom == false ? 'store_arrow_top_pic' : 'store_arrow_down_pic', 
    });
  },
  jian(e) {
    var goodsnumber = e.target.dataset.goodsnumber;//商品数量
    var id = e.target.dataset.id;//店铺服务排序id
    var ids = e.target.dataset.ids;//商品排序id
    var goodsnumbers = "serviceList[" + (id - 1) + "].goodslist[" + (ids - 1) +"].goodsnumber"; 
    if (goodsnumber == 1) {
      this.setData({
        [goodsnumbers]: 1,
      });
    } else {
      this.setData({
        [goodsnumbers]: goodsnumber - 1,
      });
    }
  },
  add(e) {
    var goodsnumber = e.target.dataset.goodsnumber;//商品数量
    var id = e.target.dataset.id;//店铺服务排序id
    var ids = e.target.dataset.ids;//商品排序id
    var maxGoodsnumber = this.data.serviceList[(id - 1)].goodslist[(ids - 1)].maxGoodsnumber;//商品的库存（最大量）
    if(maxGoodsnumber>999){
      maxGoodsnumber=999;
    }
    var goodsnumbers = "serviceList[" + (id - 1) + "].goodslist[" + (ids - 1) + "].goodsnumber";
    if (goodsnumber < maxGoodsnumber && goodsnumber >= 1) {
      this.setData({
        [goodsnumbers]: goodsnumber + 1,
      });
    } else {
      this.setData({
        [goodsnumbers]: maxGoodsnumber,
      });
    }
  },
  onLoad: function () {
    var that = this;
    var article = '<html><head>' +
      '< meta charset = "UTF-8" >' +
      '<title></title>' +
      '< link rel = "stylesheet" href = "/layuiadmin/layui/css/layui.css" media = "all" > ' +
      ' < link rel = "stylesheet" href = "/layuiadmin/style/admin.css" media = "all" > ' +
      ' < link href = "/edit/themes/default/css/umeditor.css" type = "text/css" rel = "stylesheet" > ' +
      ' < script type = "text/javascript" src = "/edit/third-party/jquery.min.js" ></script> ' +
      '< script type = "text/javascript" charset = "utf-8" src = "/edit/umeditor.config.js" ></script > ' +
      ' < script type = "text/javascript" charset = "utf-8" src = "/edit/umeditor.min.js" ></script > ' +
      '< script type = "text/javascript" src = "/edit/lang/zh-cn/zh-cn.js" ></script > ' +
      ' < style type = "text/css" > ' +
      ' .edui-modal-body {' +
      'position: relative; ' +
      ' max - height: 300px; ' +
      ' font - size: 12px; ' +
      ' overflow - y: auto; ' +
      '   } ' +
      '</style > ' +
      '< script src = "https://www.chituyc.com:8443/edit/dialogs/link/link.js" type = "text/javascript" defer = "defer" ></script > <script src="https://www.chituyc.com:8443/edit/dialogs/image/image.js" type="text/javascript" ' + 'defer="defer"></script><script src="https://www.chituyc.com:8443/edit/dialogs/video/video.js" type="text/javascript" defer="defer"></script><script src="https://www.chituyc.com:8443/edit/dialogs/map/map.js" type="text/javascript" ' + 'defer="defer" ></script > <script src="https://www.chituyc.com:8443/edit/dialogs/formula/formula.js" type="text/javascript" defer="defer"></script> <script src="https://www.chituyc.com:8443/edit/dialogs/emotion/emotion.js" type="text/javascript" ' + 'defer="defer"></script><link id="layuicss-layer" rel="stylesheet" href="https://www.chituyc.com:8443/layuiadmin/layui/css/modules/layer/default/layer.css?v=3.1.1" media="all"><link id="layuicss-laydate" rel="stylesheet" ' + 'href="https://www.chituyc.com:8443/layuiadmin/layui/css/modules/laydate/default/laydate.css?v=5.0.9" media = "all" ></head > <body ><p><img src="http://image-chitu.test.upcdn.net/chitu/editImg/20190419174126163.jpg" /></p><p><img ' + 'src="http://image-chitu.test.upcdn.net/chitu/editImg/20190419174147401.jpg" style="" /></p><p></p><p><br /></p></body></html>';
    WxParse.wxParse('article', 'html', article, that, 0);
  },
})