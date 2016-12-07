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

    wx.getStorageInfo({
      success: function(res) {
        console.log(res)
      }
    })

    var userInfoArr = wx.getStorageSync('userInfo') || {}

    console.log(userInfoArr, '存储')

    // wx.removeStorage({key: "infos"})

    // wx.clearStorage()

  },
  getUserInfo:function(cb){
    var that = this
    var session_key = 'HyVFkGl5F5OQWJZZaNzBBg=='
    console.log('this.globalData.userInfo', this.globalData.userInfo)
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function (res) {
          var appid = 'wx4f4bc4dec97d474b'
          var secret = 'ddddd'
          var js_code = res.code
          var grant_type = 'dddd'
          /* if (res.code) {
            wx.request({
              url: 'https://api.weixin.qq.com/sns/jscode2session?appid=appid&secret=SECRET&js_code=js_code&grant_type=authorization_code',
              data: {
                res.code
              },
              success: function(res) {
                console.log(res.session_key, res.openid, res.expires_in)
                wx.setStorageSync('session_key', res.session_key)
                wx.setStorageSync('openid', res.openid)
              },
              fail: function(res) {
                console.log(res.errcode, res.errmsg)
              }
            })
          }
          */
          // 加入现在得到了用户的 session_key： HyVFkGl5F5OQWJZZaNzBBg==

          wx.getUserInfo({
            success: function (res) {
              wx.request({
                url: 'post url',
                data: res.userInfo,
                method: 'POST',
                success: function(res){
                  console.log('用户信息已经成功发送给了服务端')
                }
              })
              wx.setStorageSync('userInfo', res.userInfo)
              console.log(res, res.encryptedData)
              that.globalData.userInfo = res.userInfo
              // console.log(sha1(res.rawData + session_key))
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