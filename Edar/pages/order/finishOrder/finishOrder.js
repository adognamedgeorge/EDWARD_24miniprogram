// pages/order/finishOrder/finishOrder.js
const date = new Date()
const years = []
const months = []
const days = []

for (let i = 2015; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

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
    blockTitle: '已完成',
    finishArr: [
      {name: '维修员工', content: '陈萍萍  13011112222'},
      {name: '预约时间', content: '2020-4-15 13:30'},
      {name: '预约姓名', content: '范闲闲'},
      {name: '联系电话', content: '13122223333'},
      {name: '维修地址', content: '浙江省杭州市江干区详细地址详细地址详细地址详细地址详细地址'},
      {name: '地址标签', content: '我的家'},
      {name: '维修类型', content: '电路类型维修'}
    ],
    confirmButton: [{text: '取消'}, {text: '确定'}],
    showConfirmButton: false,
    hidTime: true,
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 2,
    days: days,
    day: 2,
    value: [9999, 1, 1]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tapConfirmButton(e) {
      this.setData({
        showConfirmButton: true
      })
    },
    tapDialogButton(e) {
      this.setData({
        showConfirmButton: false
      })
    },
    tapChangeTime(e) {
      this.setData({
        hidTime: false
      })
    },
    bindTime(e) {
      this.setData({
        hidTime: true
      })
    },
    bindChange: function (e) {
      const val = e.detail.value
      this.setData({
        year: this.data.years[val[0]],
        month: this.data.months[val[1]],
        day: this.data.days[val[2]]
      })
    }
  }
})
