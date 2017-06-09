Page({
  data:{
    textList:[]


  },
  showLocation: function(e) {

    const _this = this
    //console.log(params.type)
    const apiUrl = 'https://qebsc.sinaapp.com/xcxzhuanfa.php';
    wx.request({
        url: apiUrl, //仅为示例，并非真实的接口地址
        data: {},
        header: {
            'content-type': 'json'
        },
        success: function(res) {

        _this.setData({textList:res});

        }
      })



  }
})