const app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    orderList: [
      {
        imgSrc: '../../resources/img/sand.png',
        text: '待上门'
      },
      {
        imgSrc: '../../resources/img/fix.png',
        text: '维修中'
      },
      {
        imgSrc: '../../resources/img/wait.png',
        text: '待验收'
      },
      {
        imgSrc: '../../resources/img/waitPay.png',
        text: '待支付'
      },
      {
        imgSrc: '../../resources/img/assess.png',
        text: '待评价'
      },
      {
        imgSrc: '../../resources/img/all.png',
        text: '全部'
      }
    ]
  },
  // 跳转到“我的”页面
  toMineView: function (e) {
    wx.showLoading({
      title: '跳转中...',
      success: function () {
        setTimeout(function () {
          wx.switchTab({
            url: '../mine/mine'
          })
        }, 500)
      }
    }),
    setTimeout(function () {
      wx.hideLoading()
    }, 500)
  },
  // 跳转到“订单页面”
  bindToOrder: function (e) {
    console.log(e)
    // 给传递给order页面的dataName参数赋值
    app.globalData.dataName = e.currentTarget.dataset.name
    wx.showLoading({
      title: '加载中...',
      success: function () {
        setTimeout(function () {
          wx.switchTab({
            url: '../order/order'
          })
        }, 200)
      }
    }),
    setTimeout(function () {
      wx.hideLoading()
    }, 200)
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})