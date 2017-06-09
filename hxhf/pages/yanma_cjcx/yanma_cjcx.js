// pages/yanma_cjcx/yanma_cjcx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.login({
      success: function (res) {
        if (res.code) {
          console.log(res)
          //发起网络请求
          //const url = 'https://qebsc.sinaapp.com/xcx/getopenid.php?js_code='+ res.code
          const url = "https://api.weixin.qq.com/sns/jscode2session?appid=wx234410d0eeafbcf3&secret=83b36b04a606796a5000e59bc3239af5&js_code=" + res.code+"&grant_type=authorization_code";
          wx.request({
            url: url,
            data: {},
            header: {
              'content-type': 'json'
            },
            success: function (ress) {

              console.log("url:"+url)

              console.log(">>>>")
              console.log(ress.data)



            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  
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
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  }
})