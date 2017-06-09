Page({
  data:{
    swiper:{
    imgUrls:[
    'http://mhuaxia.com/wp-content/uploads/2016/12/半版报广钢铁侠.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
    },
    jiuGongGe:[]
  },
  onLoad: function(options) {



    },
onReady: function() {

},
onShow: function() {

      wx.showLoading({
        title: '加载中',
        })
      const _this = this;

wx.request({
  url: 'https://qebsc.sinaapp.com/1.php', //仅为示例，并非真实的接口地址
  data: {
     x: '' ,
     y: ''
  },
  header: {
      'content-type': 'application/json'
  },
  success: function(res) {
    wx.hideLoading();
     console.log(res.data)
    _this.setData({swiper:res.data.swiper,
                   jiuGongGe:res.data.jiuGongGe
    });//读取swiper图片数据

  }
})

  }













})
