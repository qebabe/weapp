// pages/dxxw/index.js
Page({
  data:{
    imgUrls:[
    'http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2397337958.jpg',
    'http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2402824160.jpg',
    'http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2403319543.jpg'
    ],
    slideData:[],
    listData:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    const _this = this
    //console.log(params.type)
    const apiUrl = 'http://mobile.ytcutv.com/yantai/news_hunhe.php?appid=6&appkey=BuXh0nr3lkOnLT1XpPWSOapcQwjXAFD2&column_id=9';
    //this.loading();
    wx.request({
        url: apiUrl, //仅为示例，并非真实的接口地址
        data: {},
        header: {
            'content-type': 'json'
        },
        success: function(res) {
          wx.hideToast()
          console.log(res.data.slide)
          console.log(res.data.list)
          _this.setData({
            slideData:res.data.slide,
            listData:res.data.list
          })
          //_this.loading(false);
          wx.setStorageSync('shouYeSwiper',res.data.subjects)
        }
      })

    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})