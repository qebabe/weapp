
Page({
  data:{
    list:[],
    title:'loading...'
  },

  onLoad (params){
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
    const _this = this
    console.log(params.type)
    const apiUrl = 'http://api.douban.com/v2/movie/'+params.type;

    wx.request({
        url: apiUrl, //仅为示例，并非真实的接口地址
        data: {},
        header: {
            'content-type': 'json'
        },
        success: function(res) {
          wx.hideToast()
          console.log(res.data)
          _this.setData({list:res.data.subjects,title:res.data.title})
        }
      })
     
  }
})