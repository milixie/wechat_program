// pages/info/info.js
var event = require('../../../../utils/event.js')
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      address: options.address
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

  getInputValue: function(event){
    var that = this

    that.setData({
      address: event.detail.value
    })
  },

  updateTap: function(){

    var that = this

    event.emit('addressChange', that.data.address)

    var oldI = wx.getStorageSync('infos')[0];

    var newI = {}

    for (var k in oldI) {
      if (k === 'address') {
        newI[k] = that.data.tel
      } else {
        newI[k] = oldI[k]
      }
    }

    var newInfos = []
    newInfos.push(newI)

    wx.setStorageSync('infos', newInfos)

    wx.navigateBack()
  }
})