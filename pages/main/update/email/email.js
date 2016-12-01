// pages/info/info.js
var event = require('../../../../utils/event.js')
Page({
  data:{
    disabled: 'abled'
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      email: options.email
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
      email: event.detail.value
    })

    if (/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(event.detail.value)) {
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
      event.emit('emailChange', that.data.email)
      wx.navigateBack()
    }
  }
})