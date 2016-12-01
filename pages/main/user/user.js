// pages/user/user.js
var app = getApp()
var event = require('../../../utils/event.js')
Page({
  data:{
    userInfo: {},
    servers: "美甲、按摩、修图"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var _self = this

    var optObj2 = {}
    wx.getStorage({
      key: "infos",
      success: function(res) {
        for (var k in res.data[0]) {
          optObj2[k] = res.data[0][k]
        }
        _self.setData({
          opt: res.data[0],
          contact: [{
            titName: "手机号",
            content: optObj2['tel'],
            url: "../update/tel/tel?tel=" + optObj2['tel']
          }, {
            titName: "邮箱",
            content: optObj2['email'],
            url: "../update/email/email?email=" + optObj2['email']
          }, {
            titName: "地址",
            content: optObj2['address'],
            url: "../update/address/address?address=" + optObj2['address']
          }]
        })

      }
    })

    app.getUserInfo(function(userInfo) {
      //更新数据
      _self.setData({
        userInfo: userInfo
      })
    })

    event.on('addressChange', this, function(data) {
      var optObj = {}
      for (var k in _self.data.opt) {
        if (k == 'address') {
          optObj[k] = data
        } else {
          optObj[k] = _self.data.opt[k]
        }
      }

      var optArr = []
      optArr.push(optObj)

      wx.setStorageSync({
        key: "infos",
        data: optArr
      })
      
      _self.setData({
        opt: optObj,
        contact: [{
          titName: "手机号",
          content: optObj['tel'],
          url: "../update/tel/tel?tel=" + optObj['tel']
        }, {
          titName: "邮箱",
          content: optObj['email'],
          url: "../update/email/email?email=" + optObj['email']
        }, {
          titName: "地址",
          content: optObj['address'],
          url: "../update/address/address?address=" + optObj['address']
        }]
      })
    })

    event.on('telChange', this, function(data) {
      var optObj = {}
      for (var k in _self.data.opt) {
        if (k == 'tel') {
          optObj[k] = data
        } else {
          optObj[k] = _self.data.opt[k]
        }
      }

      var optArr = []
      optArr.push(optObj)

      wx.setStorageSync({
        key: "infos",
        data: optArr
      })

      _self.setData({
        opt: optObj,
        contact: [{
          titName: "手机号",
          content: optObj['tel'],
          url: "../update/tel/tel?tel=" + optObj['tel']
        }, {
          titName: "邮箱",
          content: optObj['email'],
          url: "../update/email/email?email=" + optObj['email']
        }, {
          titName: "地址",
          content: optObj['address'],
          url: "../update/address/address?address=" + optObj['address']
        }]
      })
    })

    event.on('emailChange', this, function(data) {
      var optObj = {}
      for (var k in _self.data.opt) {
        if (k == 'email') {
          optObj[k] = data
        } else {
          optObj[k] = _self.data.opt[k]
        }
      }

      var optArr = []
      optArr.push(optObj)

      wx.setStorageSync({
        key: "infos",
        data: optArr
      })
      
      _self.setData({
        opt: optObj,
        contact: [{
          titName: "手机号",
          content: optObj['tel'],
          url: "../update/tel/tel?tel=" + optObj['tel']
        }, {
          titName: "邮箱",
          content: optObj['email'],
          url: "../update/email/email?email=" + optObj['email']
        }, {
          titName: "地址",
          content: optObj['address'],
          url: "../update/address/address?address=" + optObj['address']
        }]
      })
    })



    

  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },


})

