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
        img:"../../../images/icon_nav_z-index.png"
      },
      {
        title: "信息查询",
        img: "../../../images/icon_nav_widget.png"
      },
      {
        title: "成绩查询",
        img: "../../../images/search.png"
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
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    const _this = this
    const apiUrl = 'http://yantaimls.mhuaxia.com/api/json1.php?page=' + _this.data.thisPage;
    console.log("当前页URL：" + apiUrl)
    wx.request({
      url: apiUrl, 
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {

        _this.setData({ textList: res.data.list,
                        slideData: res.data.slide,
                        pageCount: res.data.pageCount,
                        thisPage: res.data.thisPage,
        
         });

        console.log(res.data)

      }
    })
  },
  loadMore: function(){
    const _this = this
    var nextPage = parseInt(_this.data.thisPage) + 1
    const hisData = _this.data.textList;
    const apiUrl = 'http://yantaimls.mhuaxia.com/api/json1.php?page=' + nextPage;
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











  }

})
