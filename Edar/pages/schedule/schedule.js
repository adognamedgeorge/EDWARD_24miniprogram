Page({
  data: {
    scheduleArr: [
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
    ],
    showConfirmButton: false,
    confirmButton: [{ text: '确定' }]
  },
  tapConfirmButton(e) {
    this.setData({
      showConfirmButton: true
    })
  },
  tapDialogButton(e) {
    this.setData({
      showConfirmButton: false
    })
  }
})