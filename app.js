//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    var opt = {
      tel: 15833234443,
      email: "milixie@hcy.com",
      address: "新加坡"
    }

    var infos = wx.getStorageSync('infos') || []
    if (infos.length == 0) {
      infos.push(opt)
    } 
    wx.setStorageSync('infos', infos)

    // wx.removeStorage({key: "infos"})

  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})