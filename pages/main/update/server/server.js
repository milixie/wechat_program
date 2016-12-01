// pages/info/info.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
      server: event.detail.value
    })
  },

  updateTap: function(){

  	console.log('1111')

    var that = this

    wx.navigateTo({
      url: "../../user/user?server=" + that.data.server,
      success: function(options){
      	console.log('success')
      },
      fail: function(){
      	console.log('fail')
      }
    })
  }
})