//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    textList:[],
    hisData :[],
    pageCount: 0,
    thisPage: 1,
    slideData: [],
    gridData :[
      {title:"赛事报名",
        img:"../../images/icon_nav_z-index.png"
      },
      {
        title: "信息查询",
        img: "../../images/search.png"
      },
      {
        title: "成绩查询",
        img: "../../images/icon_nav_widget.png"
      }
      ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '烟台国际马拉松'
    })
    wx.showLoading({
      title: '加载中',
    })
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        console.log(res)
      }
    })
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    const _this = this
    const apiUrl = 'https://qebsc.sinaapp.com/xcx/service.php?v=yanmagetlist&page=' + _this.data.thisPage;
    console.log("当前页URL：" + apiUrl)
    wx.request({
      url: apiUrl,
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {

        _this.setData({
          textList: res.data.list,
          slideData: res.data.slide,
          pageCount: res.data.pageCount,
          thisPage: res.data.thisPage,

        });
        wx.hideLoading();

        console.log(res.data)

      }
    })
   
  },
  onShow: function () {


  },
  loadMore: function(){
    const _this = this
    var nextPage = parseInt(_this.data.thisPage) + 1
    const hisData = _this.data.textList;
    const apiUrl = 'https://qebsc.sinaapp.com/xcx/service.php?v=yanmagetlist&page=' + nextPage;
    console.log("当前页URL：" + apiUrl)
    wx.request({
      url: apiUrl,
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log("历史数据：")
        console.log(hisData)

        _this.setData({
          textList: hisData.concat(res.data.list),
          slideData: res.data.slide,
          pageCount: res.data.pageCount,
          thisPage: res.data.thisPage,

        });

        console.log(res.data)

      }
    })











  },
  cjcx: function () {
    wx.showModal({
      title: '成绩查询',
      content: '2017烟台国际马拉松成绩查询暂未开放！',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    // wx.navigateTo({
    //   url: '../yanma_cjcx/yanma_cjcx'
    // })
  },
  ssbm: function () {
    wx.showModal({
      title: '赛事报名',
      content: '暂未开放！',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    // wx.navigateTo({
    //   url: '../yanma_cjcx/yanma_cjcx'
    // })
  },
  xxcx: function () {
    wx.showModal({
      title: '信息查询',
      content: '暂未开放！',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    // wx.navigateTo({
    //   url: '../yanma_cjcx/yanma_cjcx'
    // })
  },
  onPullDownRefresh: function () {

    console.log('下拉刷新。')
    wx.showLoading({
      title: '页面刷新...',
    })
    
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    const _this = this
    const apiUrl = 'https://qebsc.sinaapp.com/xcx/service.php?v=yanmagetlist&page=1';
    console.log("当前页URL：" + apiUrl)
    wx.request({
      url: apiUrl,
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {

        _this.setData({
          textList: res.data.list,
          slideData: res.data.slide,
          pageCount: res.data.pageCount,
          thisPage: res.data.thisPage,

        });
        
        wx.stopPullDownRefresh()
        wx.hideLoading();

        console.log(res.data)

      }
    })


  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    const _this = this

    if (_this.data.pageCount != _this.data.thisPage){
      wx.showLoading({
        title: '加载中',
      })
    var nextPage = parseInt(_this.data.thisPage) + 1
    const hisData = _this.data.textList;
    const apiUrl = 'https://qebsc.sinaapp.com/xcx/service.php?v=yanmagetlist&page=' + nextPage;
    console.log("当前页URL：" + apiUrl)
    wx.request({
      url: apiUrl,
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log("历史数据：")
        console.log(hisData)

        _this.setData({
          textList: hisData.concat(res.data.list),
          slideData: res.data.slide,
          pageCount: res.data.pageCount,
          thisPage: res.data.thisPage,

        });
        wx.hideLoading();

        console.log(res.data)

      }
    })
}

  },

})
