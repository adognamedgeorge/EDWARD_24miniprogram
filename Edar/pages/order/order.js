// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    blockTitle: '已完成',
    tabList: [
      {
        "text": "全部",
        "iconPath": "/resources/img/home.png",
        "selectedIconPath": "/resources/img/homed.png"
      },
      {
        "text": "待上门",
        "iconPath": "/resources/img/log.png",
        "selectedIconPath": "/resources/img/loged.png"
      },
      {
        "text": "维修中",
        "iconPath": "/resources/img/log.png",
        "selectedIconPath": "/resources/img/loged.png"
      },
      {
        "text": "待验收",
        "iconPath": "/resources/img/log.png",
        "selectedIconPath": "/resources/img/loged.png"
      },
      {
        "text": "待支付",
        "iconPath": "/resources/img/log.png",
        "selectedIconPath": "/resources/img/loged.png"
      },
      {
        "text": "待评价",
        "iconPath": "/resources/img/log.png",
        "selectedIconPath": "/resources/img/loged.png"
      }
    ],
    orderArr: [
      {
        name: '维修员工',
        content: '陈萍萍  13012345678'
      },
      {
        name: '预约时间',
        content: '2020-3-13 14:00-14:30'
      },
      {
        name: '预约姓名',
        content: '范闲闲'
      },
      {
        name: '联系电话',
        content: '13234567890'
      },
      {
        name: '维修地址',
        content: '浙江省杭州市江干区详细地址详细地址详细地址详细地址'
      },
      {
        name: '地址标签',
        content: '我的家'
      },
      {
        name: '维修类型',
        content: '电路类型维修'
      }
    ]
  },

  tabChange (e) {
    this.setData({
      blockTitle: e.detail.item.text
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})