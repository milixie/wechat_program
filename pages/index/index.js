//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util.js')
var imgSize = require('../../utils/imgSize.js')
Page({
  data: {
    // motto: 'Hello World 小程序的世界',
    // userInfo: {}
    danmuList: [{
      text: '这是弹幕111111',
      color: '#f60',
      time: 1
    }, {
      text: '这是弹幕222',
      color: '#f60',
      time: 3
    }, {
      text: '这是弹幕13333111',
      color: '#f60',
      time: 5
    }, {
      text: '这是弹幕11334444441',
      color: '#f60',
      time: 7
    }],
    currentTab: 0,
    winHeight: 0,
    imgW: 0,
    imgH: 0,
    open: false,
    open1: false,
    navs: [{
      name: '用户中心111',
      url: '',
    }, {
      name: '用户中心',
      url: '',
    }, {
      name: '用户中心',
      url: '',
    }, {
      name: '用户中心',
      url: '',
    }, {
      name: '用户中心',
      url: '',
    }, {
      name: '用户中心',
      url: '',
    }, {
      name: '用户中心',
      url: '',
    }, {
      name: '用户中心',
      url: '',
    }, {
      name: '用户中心111',
      url: '',
    }, {
      name: '用户中心',
      url: '',
    }, {
      name: '用户中心',
      url: '',
    }, {
      name: '用户中心2222',
      url: '',
    }, {
      name: '用户中心333',
      url: '',
    }, {
      name: '用户中心',
      url: '',
    }, {
      name: '用户中心',
      url: '',
    }]
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

  onReady: function(){
    this.videoContext = wx.createVideoContext('myvideo')
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
  },

  toggleNav: function() {
    var that = this
    that.setData({
      open: !that.data.open
    })
  },

  toggleNav1: function() {
    var that = this
    that.setData({
      open1: !that.data.open1
    })
  },

  inputValue: '',

  bindInputBlur: function(e){
    var that = this
    this.inputValue = e.detail.value
  },

  bindSendDanmu: function(){
    var that = this
    var setTime = parseInt(Math.random() * 20)

    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: '#f60'
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

