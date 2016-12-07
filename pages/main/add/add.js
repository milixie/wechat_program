// pages/add/add.js
var util = require('../../../utils/util.js')
var event = require('../../../utils/event.js')
Page({
  data:{
    warn: false,
    warnStatus: true,
    alert: '',
    animationWarn: {},
    animationLike: {},
    noteExist: true,
    zan: '已赞',
    likeNum: 12322,
    hasLike: true,
    likeSrc: 'like_1',
    currentCount: 3,
    stars: [{
      count: 0,
      src: 'star_1'
    }, {
      count: 1,
      src: 'star_1'
    }, {
      count: 2,
      src: 'star_1'
    }, {
      count: 3,
      src: 'star_0'
    }, {
      count: 4,
      src: 'star_0'
    }],
    formatTime: '00:00:00',
    stop: true,
    playing: false,
    recordTime: 0,
    disabled: 'disabled',
    uploadTitle: '',
    uploadContent: '',
    wordLen: 0,
    limitLen: 140,
    tapIndex: 0,
    infos: [{
      title: '收到退款通知',
      content: '您发的红包对方并没有领取，现在红包的退款金额已经退还给您了，放在了零钱里，请您查收',
      date: '2016.11.30',
      time: '09:10'
    }, {
      title: '您发布了一条您的服务消息',
      content: '您可以为附近的陌生朋友提供一下服务：美甲、陪跑、修图、编辑等等',
      date: '2016.11.30',
      time: '09:10'
    }, {
      title: '付款成功',
      content: '您在美团上消费了68.8元，从您的微信零钱包里扣除了',
      date: '2016.12.30',
      time: '09:10'
    }, {
      title: '付款成功',
      content: '您购买的森马的男装，共花费了102.9元，从您的零钱包中扣除掉了',
      date: '2016.12.30',
      time: '09:10'
    }]
  },
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

  titleTap: function(e){
    console.log(e)
    var that = this

    that.setData({
      tapIndex: e.currentTarget.id
    })

  },

  getUploadTitle: function(e) {
    this.setData({
      uploadTitle: e.detail.value
    })
  },

  getUploadConent: function(e) {
    this.setData({
      wordLen: e.detail.value.length,
      uploadContent: e.detail.value
    })
  },

  // 发布 part

  uploadConfirm: function(){
    var that = this

    var tit = this.data.uploadTitle, con = this.data.uploadContent

    var date = new Date()

    var y = date.getFullYear(), m = date.getMonth() + 1, d = date.getDate(), hh = date.getHours(), mm = date.getMinutes()

    if (tit && con) {
      var obj = {
        title: tit,
        content: con,
        date: y + '.' + m + '.' + d,
        time: hh + ':' + mm
      }
      var arr = that.data.infos

      arr.unshift(obj)

      that.setData({
        disabled: 'abled',
        infos: arr
      })

      wx.showToast({
        title: '正在发布',
        icon: 'loading',
      })

      setTimeout(function(){
        wx.showToast({
          title: '发布成功',
          icon: 'success',
          duration: 2000,
          success: function(res) {
            that.setData({
              disabled: 'disabled',
              uploadTitle: '',
              uploadContent: '',
              tapIndex: 1
            })
          }
        })
      }, 3000)

      console.log(arr, ' this is arr')
    } else {
      that.setData({
        disabled: 'disabled'
      })
    }
  },

  // upload file

  uploadFile: function() {
    wx.chooseImage({
      count: 8,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        console.log('chooseImage part success ', res)
        var tempPath = res.tempFilePaths
        wx.uploadFile({
          url: "https://portal.qiniu.com/api/kodo/bucket/file/a0101/uptokenReques",
          filePath: tempPath[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success: function(res) {
            console.log(res)
          },
          fail: function(res) {
            console.log(res)
          }
        })
      }
    })
  },

  downloadFile: function() {
    wx.downloadFile({
      url: 'https://dn-eee.qbox.me/README.md',
      success: function(res) {
        console.log(res)
        wx.saveFile({
          // tempFilePath: tempFilePath,
          success: function(res) {
            console.log(res, '---')
          }
        })
      }
    })
  },

  // image part

  previewImage: function() {
    wx.previewImage({
      current: "https://dn-eee.qbox.me/12.png",
      urls: ["https://dn-eee.qbox.me/13.png", "https://dn-eee.qbox.me/150.png", "https://dn-eee.qbox.me/2011.png", "https://dn-eee.qbox.me/12.png"],
      success: function(res) {
        console.log(res)
      }
    })
  },

  getImageInfo: function() {
    var that = this
    wx.getImageInfo({
      src: 'https://dn-eee.qbox.me/150.png',
      success: function(res) {
        console.log(res)
        that.setData({
          img: {
            width: res.width,
            height: res.height,
            path: res.path
          }
        })
      }
    })
  },

  showChooseImgInfo: function() {
    var that = this
    wx.chooseImage({
      success: function(res) {
        var tempPath = res.tempFilePaths
        wx.getImageInfo({
          src: tempPath[0],
          success: function(res) {
            that.setData({
              chooseImg: {
                width: res.width,
                height: res.height,
                path: res.path
              }
            })
          }
        })
      }
    })
  },

  // record
  begin: function() {
    var that = this
    that.setData({
      stop: false,
      playing: true
    })

    var interval = setInterval(function(){
      that.data.recordTime += 1
      that.setData({
        formatTime: util.formatRecordTime(that.data.recordTime)
      })
    }, 1000)

    wx.startRecord({
      success: function(res) {
        console.log(res, ' success')
      },
      complete: function() {
        console.log(res, 'complete')
      }
    })
  },


  markStarSelect: function(e) {
    var that = this

    var num = Number(e.currentTarget.id) + 1
    var arr = []

    for (var k in that.data.stars) {
      var obj = {}
      if (k < num) {
        obj.count = that.data.stars[k].count
        obj.src = 'star_1'
        arr.push(obj)
      } else {
        obj.count = that.data.stars[k].count
        obj.src = 'star_0'
        arr.push(obj)
      }
    }

    that.setData({
      currentCount: num,
      stars: arr
    })

  },

  // 点赞

  addLikeNumber: function() {
    var that = this
    var num = that.data.likeNum

    var animation = wx.createAnimation({
      duration: 500,
      delay: 200
    })
    var animation2 = wx.createAnimation({
      duration: 500,
      delay: 200
    })

    that.animation = animation
    that.animation2 = animation2

    animation.opacity(0.5).translateY(-20).step()
    animation2.opacity(0.8).step()

    if (!that.data.hasLike) {
      num ++
      that.setData({
        warn: true,
        alert: '已赞',
        animationWarn: animation2.export(),
        zan: '已赞',
        likeNum: num,
        hasLike: true,
        likeSrc: 'like_1',
        animationLike: animation.export()
      })
      setTimeout(function() {
        animation.opacity(0).step()
        animation2.opacity(0).step()
        that.setData({
          warn: true,
          alert: '已赞',
          animationWarn: animation2.export(),
          animationLike: animation.export()
        })
        setTimeout(function(){
          that.setData({
            warn: false
          })
        }, 1000)
      }, 1000)
    }
  },

  // 通知中心
  lookNote: function() {
    var that = this

    var animation = wx.createAnimation({
      duration: 500,
      delay: 100
    })

    that.animation = animation

    if (that.data.noteExist) {
      animation.scale(0, 0).step()
    } else {
      animation.scale(1, 1).step()
    }


    that.setData({
      noteExist: !that.data.noteExist,
      animationData: animation.export()
    })

  },

  sendRequest: function() {
    console.log('ddd')

    wx.request({
      url: 'https://dn-eee.qbox.me/13.png',
      success: function(res) {
        console.log(res, 'this is a request', res.data)
      }
    })
  }




















})