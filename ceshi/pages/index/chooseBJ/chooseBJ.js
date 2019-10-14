// pages/index/chooseBJ/chooseBJ.js
const app = getApp();
var WxParse = require('../../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    article: [],
    moudle:[
      { moudle_name: '前保险杆', id: '1', isShowFrom: false, iamges:'/images/car_1_pic.png'},
      { moudle_name: '后保险杠', id: '2', isShowFrom: false ,iamges: '/images/car_2_pic.png'},
      { moudle_name: '左前翼子板', id: '3', isShowFrom: false, iamges: '/images/car_3_pic.png'},
      { moudle_name: '右前翼子板', id: '4', isShowFrom: false, iamges: '/images/car_4_pic.png'},
      { moudle_name: '左后翼子板', id: '5', isShowFrom: false, iamges: '/images/car_5_pic.png'},
      { moudle_name: '右后翼子板', id: '6', isShowFrom: false, iamges: '/images/car_6_pic.png'},
      { moudle_name: '左前车门', id: '7', isShowFrom: false, iamges: '/images/car_7_pic.png'},
      { moudle_name: '右前车门', id: '8', isShowFrom: false, iamges: '/images/car_8_pic.png'},
      { moudle_name: '左后车门', id: '9', isShowFrom: false, iamges: '/images/car_9_pic.png'},
      { moudle_name: '右后车门', id: '10', isShowFrom: false, iamges: '/images/car_10_pic.png'},
      { moudle_name: '前车盖', id: '11', isShowFrom: false, iamges: '/images/car_11_pic.png'},
      { moudle_name: '后车盖', id: '12', isShowFrom: false, iamges: '/images/car_12_pic.png'},
      { moudle_name: '车顶', id: '13', isShowFrom: false, iamges: '/images/car_13_pic.png'},
      { moudle_name: '左裙边', id: '14', isShowFrom: false, iamges: '/images/car_14_pic.png'},
      { moudle_name: '右裙边', id: '15', isShowFrom: false, iamges: '/images/car_15_pic.png'},
      { moudle_name: '左后视镜', id: '16', isShowFrom: false, iamges: '/images/car_16_pic.png'},
      { moudle_name: '右后视镜', id: '17', isShowFrom: false, iamges: '/images/car_17_pic.png'},
      { moudle_name: '左A柱', id: '18', isShowFrom: false, iamges: '/images/car_18_pic.png'},
      { moudle_name: '右A柱', id: '19', isShowFrom: false, iamges: '/images/car_19_pic.png'},
      { moudle_name: '左C柱', id: '20', isShowFrom: false, iamges: '/images/car_20_pic.png'},
      { moudle_name: '右C柱', id: '21', isShowFrom: false, iamges: '/images/car_21_pic.png'},
      { moudle_name: '整车喷漆', id: '22', isShowFrom: false, iamges: '/images/car_22_pic.png' }, 
      
    ],
    images: [],
  },
  backs: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  showFrom(e) {
    var id = e.target.dataset.id;
    var isShowFrom = "moudle[" + (id - 1) + "].isShowFrom";//先用一个变量，把(serviceList[0].isShowFrom)用字符串拼接起来
    var i = "images[" + (id - 1) + "]";
    var s='';
    var list = this.data.images;
    if (this.data.moudle[(id - 1)].isShowFrom == false&&id!=22){
      s = this.data.moudle[(id - 1)].iamges;
    } else if (this.data.moudle[(id - 1)].isShowFrom == false&&id==22){
      s = this.data.moudle[(id - 1)].iamges;
      list.splice(0, 21);
    } else if (this.data.moudle[(id - 1)].isShowFrom == true && id == 22){
      list.splice(0, 22);
    }else{
      list.splice(id, 1);
    }
    this.setData({
      [isShowFrom]: this.data.moudle[(id - 1)].isShowFrom == false ? true : false,
      [i]:s,
      images:list,
      // [images]: this.data.moudle[(id - 1)].isShowFrom == false ? this.data.moudle[(id - 1)].iamges : '',
    });
  },
  bjqrOrder: function () {
    wx.navigateTo({
      url: '../bj_order/bj_order',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
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