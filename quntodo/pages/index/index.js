//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    shareTickets: "",
    stepInfoList:{}
  },
  onShareAppMessage: function () {
    var that = this
    return {
      title: '转发到微信群',
      path: '/page/index?id=123',
      success: function (res) {
        console.log('转发成功')
        console.log(res)
        that.setData({
          shareTickets: res.shareTickets
        })
        wx.getShareInfo({
          shareTicket: that.data.shareTickets,
          success: function (res) {
            console.log(res)
            const arrayBuffer = wx.base64ToArrayBuffer(res.encryptData)
            console.log(arrayBuffer)
          }

        })
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  
  //事件处理函数
  getWeRunData: function() {
    const that=this;
    wx.getWeRunData({
      success(res) {
        const encryptedData = res.encryptedData
        const iv = res.iv
        console.log(res)
        const url = 'https://qebsc.applinzi.com/xcx/demo.php';
        wx.request({
          url: url,
          data:{
            sessionKey: that.data.userInfo.session_key,
            iv: iv,
            encryptedData: encryptedData
            },
          success: function (ress) {
            console.log(url)
            console.log("<encryptedData")
            console.log(ress.data)
            console.log("encryptedData>")
            //console.log(ress.data)
            that.setData({
              stepInfoList: ress.data
            })
            //stepInfoList
            
          }
        })
      }
    })
  },
  onLoad: function () {
    wx.showShareMenu({
      withShareTicket: true
    })
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
