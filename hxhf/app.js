//app.js
App({
    see:function(){
    // 查看缓存信息
    var that=this;
    wx.getStorageInfo({
      success: function(res) {

          console.log('缓存中存在的key:'+res.keys+'已缓存的数据大小:'+res.currentSize+'kb'+'缓存限制的大小:'+res.currentSize+'kb')

      }
    })
  },

  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})