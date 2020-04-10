// pages/common/orderbar/orderbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    tabList: [
      {
        "text": "全部",
        "iconPath": "/resources/img/all.png",
        "selectedIconPath": "/resources/img/alled.png"
      },
      {
        "text": "待上门",
        "iconPath": "/resources/img/sand.png",
        "selectedIconPath": "/resources/img/sanded.png"
      },
      {
        "text": "维修中",
        "iconPath": "/resources/img/fix.png",
        "selectedIconPath": "/resources/img/fixed.png"
      },
      {
        "text": "待验收",
        "iconPath": "/resources/img/wait.png",
        "selectedIconPath": "/resources/img/waited.png"
      },
      {
        "text": "待支付",
        "iconPath": "/resources/img/waitPay.png",
        "selectedIconPath": "/resources/img/waitPayed.png"
      },
      {
        "text": "待评价",
        "iconPath": "/resources/img/assess.png",
        "selectedIconPath": "/resources/img/assessed.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
