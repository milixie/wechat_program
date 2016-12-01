// pages/info/info.js
Page({
  data:{
    showActionItem: 'Red',
    buttons: {
      size: 'mini',
      type: 'primary',
      plain: true,
      disabled: false,
      loading: false,
      hover: 'none'
    },
    checkboxs: [{
      name: "白种人",
      value: 'white'
    }, {
      name: "黄种人",
      value: 'yellow'
    }, {
      name: "黑种人",
      value: 'black'
    }],
    slider: {
      status: true,
      min: 20,
      max: 80,
      step: 2,
      currentValue: 24,
      show: true
    },
    currentRadio: 'china',
    radios: [{
      value: 'china',
      name: '中国',
      checked: true
    }, {
      value: 'Am',
      name: '美国',
      checked: false
    }, {
      value: 'riben',
      name: '日本',
      checked: false
    }],
    array: ['中国', '法国', '日本', '韩国', '新加坡'],
    index: 3,
    texts: [{
      type: '普通文本',
      content: '',
      id: 'input_0'
    }, {
      type: '密码',
      content: '',
      id: 'input_1'
    }, {
      type: '身份证',
      content: '',
      id: 'input_2'
    }, {
      type: '数字',
      content: '',
      id: 'input_3'
    }, {
      type: '时间',
      content: '',
      id: 'input_4'
    }, {
      type: '日期',
      content: '',
      id: 'input_5'
    }],
    list: [{
      id: 'view',
      name: '容器',
      open: false,
      pages: ['view1', 'view2', 'view3']
    }, {
      id: 'wrap',
      name: '总结',
      open: false,
      pages: ['wrap1', 'wrap2']
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

  payBtn: function(){
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: '',
      paySign: '',
      success: function(res){
        console.log(res)
      },
      fail: function(res) {
        console.log(res)
      }
    })
  },

  request: function(){

    wx.request({
      url: "http://www.baidu.com",
      data: {
        tel: 18334343434,
        email: 'xiemeili@5wei.com'
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      success: function(res) {
        console.log('success')
      },
      fail: function(res){
        console.log('fail')
      }
    })

  },

  showEvent: function(event) {
    console.log(event)
  },

  listToggle: function(e){

    var id = e.currentTarget.id, list = this.data.list
    var len = list.length

    for (var i = 0; i < len; i ++) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }

    this.setData({
      list: list
    })
  },

  showInputContent: function(event){

    var id = event.currentTarget.id, texts = this.data.texts, value = event.detail.value

    for (var j = 0, len = texts.length; j < len; j++) {
      if (texts[j].id == id) {
        texts[j].content = value
      }
    }
    this.setData({
      texts: texts
    })
  },

  setPicker: function(e) {
    console.log(e)

    this.setData({
      index: e.detail.value
    })

    console.log(this.data.index, '-----')
  },

  radioChange: function(e) {
    console.log(e, ' radio change ')

    this.setData({
      currentRadio: e.detail.value
    })
  },

  getRadioValue: function(){

    console.log('get current radio ', this.data.currentRadio)
  },

  changeSlider: function(e){
    console.log(e.detail.value)
  },

  getSwitch: function(e) {
    console.log(e.detail.value)
  },

  getCheckbox: function(e) {
    console.log(e.detail.value)
  },

  changeButton: function(e) {
    console.log(this.data.buttons)

    this.setData({
      buttons: {
        size: 'default',
        type: 'warn',
        plain: false,
        disabled: true,
        loading: true,
        hover: 'none'
      }
    })
  },

  showActionSheet: function(){
    var that = this
    var itemlist = ['Green', 'Red', 'Yellow', 'Blue']
    wx.showActionSheet({
      itemList: itemlist,
      itemColor: '#ff6600',
      success: function(res) {
        console.log('调用 showActionSheet 成功啦', res)

        console.log(itemlist)

        if (!res.cancel) {
          that.setData({
            showActionItem: itemlist[res.tapIndex]
          })
        }
      }
    })
  },

  showModal: function(){
    var that = this
    var typeArr = ['取消', '确定']
    wx.showModal({
      title: '这是一个模态框',
      content: '这是模态框的内容区域',
      showCancel: true,
      cancelText: '取消按钮',
      cancelColor: '#ff0000',
      confirmText: '确认按钮',
      confirmColor: 'green',
      success: function(res) {
        console.log('模态框调用成功', res)
        that.setData({
          clickModalType: typeArr[res.confirm]
        })
      }
    })
  },

  showToast: function(){
    var that = this
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000,
      success: function(res) {
        console.log('show toast success ', res)
      }
    })

    setTimeout(function(){
      wx.hideToast()
    }, 2000)
  },

  showToast2: function(){
    var that = this
    wx.showToast({
      title: '成功啦',
      icon: 'success',
      duration: 1000,
      success: function(res) {
        console.log('show toast success ', res)
      }
    })
  }































})