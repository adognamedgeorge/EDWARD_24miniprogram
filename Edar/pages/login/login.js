const app = getApp()
Page({
  data: {
    btnType: 'default'
  },
  bindKeyInput: function (e) {
    if (e.detail.value == '') {
      this.setData({
        btnType: 'default'
      })
    } else {
      this.setData({
        btnType: 'primary'
      })
    }
  },
  formSubmit: function (e) {
    let user = {name: 'Edward', password: '123456'}
    if(e.detail.value.Number == '' || e.detail.value.Pwd == '') {
      wx.showToast({
        title: '帐号或密码不能为空',
        icon: 'none',
        duration: 2000
      })
    } else if (e.detail.value.Number != user.name) {
      wx.showToast({
        title: '帐号错误',
        icon: 'none',
        duration: 2000
      })
    } else if (e.detail.value.Pwd != user.password) {
      wx.showToast({
        title: '密码错误',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 1000,
        success: function () {
          setTimeout(function () {
            wx.switchTab({
              url: '../firstp/firstp'
            })
          }, 500)
        }
      })
    }
    // wx.showLoading({
    //   title: '登录中...'
    // }),
    // setTimeout(function () {
    //   wx.hideLoading()
    // }, 2000),
    console.log(user, e.detail.value)
    // wx.request({
    //   url: '',
    //   data: {
    //     username: e.detail.value.Number,
    //     password: e.detail.value.Pwd
    //   },
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //   }
    // })
  }
})