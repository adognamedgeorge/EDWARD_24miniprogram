Component({
  properties: {
    blockTitle: {
      type: String,
      value: '已完成'
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