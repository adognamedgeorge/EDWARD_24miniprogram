Component({
  properties: {
    blockTitle: {
      type: String,
      value: '订单号'
    },
    arr: {
      type: Array,
      value: []
    },
    imgSrc: {
      type: String,
      value: '../../../resources/img/mined.png'
    },
    confirmButton: {
      type: Array,
      value: [{ text: '确定' }]
    }
  },
  data: {
    showConfirmButton: false
  },
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
    }
  }
})