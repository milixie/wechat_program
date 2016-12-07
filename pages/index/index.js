//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util.js')
var imgSize = require('../../utils/imgSize.js')
Page({
  data: {
    // motto: 'Hello World 小程序的世界',
    // userInfo: {}
    currentTab: 0,
    winHeight: 0,
    imgW: 0,
    imgH: 0
  },
  //事件处理函数
  // bindViewTap: function () {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    wx.getSystemInfo({
      success: function(res){
        that.setData({
          winHeight: res.windowHeight
        })
      }
    })
  },

  switchBtn: function(e) {
    this.setData({
      currentTab: e.currentTarget.dataset.current
    })
  },

  switchContent: function(e) {
    this.setData({
      currentTab: e.detail.current
    })
  },

  imgLoad: function(e) {
    var imgUtil = imgSize.imgSize(e)
    this.setData({
      imgW: imgUtil.imgW,
      imgH: imgUtil.imgH
    })
  }
  
  // pay: function() {
  //   wx.requestPayment({
  //     timeStamp: (new Date()).getTime(),
  //     nonceStr: util.randomString(),
  //     package: 'prepay_id=12312333333333333',
  //     signType: 'MD5',
  //     paySign: '',
  //     success: function(res) {}
  //   })
  // }
})

