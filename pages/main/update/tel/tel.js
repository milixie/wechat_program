// pages/info/info.js
var event = require('../../../../utils/event.js')
Page({
  data:{
    disabled: 'abled'
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数

    this.setData({
      tel: options.tel
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

    console.log(event.detail.value, typeof event.detail.value)

    that.setData({
      tel: event.detail.value
    })

    if ((/^1[3|4|5|7|8][0-9]\d{8}$/.test(event.detail.value))) {
      that.setData({
        disabled: 'abled'
      })
    } else {
      that.setData({
        disabled: 'disabled'
      })
    }
  },

  updateTap: function(){

    var that = this

    if (that.data.disabled == 'abled') {
      event.emit('telChange', that.data.tel)
      wx.navigateBack()
    }
  }
})