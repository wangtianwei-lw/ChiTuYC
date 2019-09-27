// pages/store/goodsInf/goodsInf.js
const app = getApp();
var WxParse = require('../../../wxParse/wxParse.js');
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
    buyNumber:[1200],
    number:[2],
    evalPicUrlList: [
      { evalPicUrl: 'http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg' },
      { evalPicUrl: 'http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg' },
      { evalPicUrl: 'http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg' }
     ],
    article:[]
  },
  backs: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  onLoad: function () {
    var that = this;
    var article = '<html><head>'+
      '< meta charset = "UTF-8" >'+
      '<title></title>'+
      '< link rel = "stylesheet" href = "/layuiadmin/layui/css/layui.css" media = "all" > '+
       ' < link rel = "stylesheet" href = "/layuiadmin/style/admin.css" media = "all" > '+
       ' < link href = "/edit/themes/default/css/umeditor.css" type = "text/css" rel = "stylesheet" > '+
       ' < script type = "text/javascript" src = "/edit/third-party/jquery.min.js" ></script> '+
      '< script type = "text/javascript" charset = "utf-8" src = "/edit/umeditor.config.js" ></script > '+
     ' < script type = "text/javascript" charset = "utf-8" src = "/edit/umeditor.min.js" ></script > '+
      '< script type = "text/javascript" src = "/edit/lang/zh-cn/zh-cn.js" ></script > '+
     ' < style type = "text/css" > '+
               ' .edui-modal-body {'+
      'position: relative; '+
     ' max - height: 300px; '+
     ' font - size: 12px; '+
     ' overflow - y: auto; '+
 '   } '+
'</style > '+
      '< script src = "https://www.chituyc.com:8443/edit/dialogs/link/link.js" type = "text/javascript" defer = "defer" ></script > <script src="https://www.chituyc.com:8443/edit/dialogs/image/image.js" type="text/javascript" ' + 'defer="defer"></script><script src="https://www.chituyc.com:8443/edit/dialogs/video/video.js" type="text/javascript" defer="defer"></script><script src="https://www.chituyc.com:8443/edit/dialogs/map/map.js" type="text/javascript" ' + 'defer="defer" ></script > <script src="https://www.chituyc.com:8443/edit/dialogs/formula/formula.js" type="text/javascript" defer="defer"></script> <script src="https://www.chituyc.com:8443/edit/dialogs/emotion/emotion.js" type="text/javascript" '+'defer="defer"></script><link id="layuicss-layer" rel="stylesheet" href="https://www.chituyc.com:8443/layuiadmin/layui/css/modules/layer/default/layer.css?v=3.1.1" media="all"><link id="layuicss-laydate" rel="stylesheet" ' + 'href="https://www.chituyc.com:8443/layuiadmin/layui/css/modules/laydate/default/laydate.css?v=5.0.9" media = "all" ></head > <body ><p><img src="http://image-chitu.test.upcdn.net/chitu/editImg/20190419174126163.jpg" /></p><p><img '+'src="http://image-chitu.test.upcdn.net/chitu/editImg/20190419174147401.jpg" style="" /></p><p></p><p><br /></p></body></html>';
    WxParse.wxParse('article', 'html', article, that, 0);  
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
  toOrderInf: function () {
    wx.navigateTo({
      url: '../order/order'
    })
  }, 
})