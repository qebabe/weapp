// pages/test2/test2.js
var base64 = require("../images/base64");
Page({
  data:{
    imgUrls:[
    'http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2397337958.jpg',
    'http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2402824160.jpg',
    'http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2403319543.jpg'
    ],
    listData:[
    {
      "type":"in_theaters",
      "name":"正在热映",
      "icon":base64.icon20,
      "shuoMing":"最热门电影."
    },
    {
      "type":"coming_soon",
      "name":"即将上映",
      "icon":base64.icon20,
      "shuoMing":"最新电影."
    },
    {
      "type":"top250",
      "name":"TOP250",
      "icon":base64.icon20,
      "shuoMing":"排行榜前二十."
    }
    ],
    textList:[],
    load:false
  },
  onLoad:function(options){
    this.setData({
      imgUrls: wx.getStorageSync('shouYeSwiper')||null,
    })
    // 页面初始化 options为页面跳转所带来的参数
  },


  onReady:function(){

//      wx.showToast({
//      title: '更新中...',
//      duration: 10000
    const _this = this
    //console.log(params.type)
    const apiUrl = 'https://api.douban.com/v2/movie/in_theaters?count=5';
    this.loading();
    wx.request({
        url: apiUrl, //仅为示例，并非真实的接口地址
        data: {},
        header: {
            'content-type': 'json'
        },
        success: function(res) {
          wx.hideToast()
          console.log(res.data)
          _this.setData({
            imgUrls:res.data.subjects
          })
          _this.loading(false);
          wx.setStorageSync('shouYeSwiper',res.data.subjects)
        }
      })
  },


  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
loading:function(msg=true){
  if(msg==true){
  this.setData({load:true});
  }
  else if(msg==false){
    this.setData({load:false});
  }
  }
})