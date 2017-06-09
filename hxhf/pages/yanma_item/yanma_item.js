// pages/item/item.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: ">>>>",
    pageCount: 1,
    thisPage: 1,
    title: "",
    senddate: "",
    writer: "",
    click: "",
    wxParseData:[]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {

    wx.showLoading({
      title: '加载中',
    })
    const _this = this

    

    console.log("文章ID：" + params.id);
    
    const apiUrl = 'https://qebsc.sinaapp.com/xcx/service.php?v=yanmagetitem&id=' + params.id;
    console.log("当前页URL：" + apiUrl)
    //var that = this;

    console.log(_this.data.data)


    wx.request({
      url: apiUrl,
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {

        var body = res.data[0].body.replace(/\/uploads/g, 'http://www.yantaimls.com/uploads');

        _this.setData({
          data: body ,
          //wxParseData: WxParse('html', body),
          title: res.data[0].title,
          senddate: res.data[0].senddate,
          click: res.data[0].click
        });
        //WxParse.wxParse('article', 'html', res.data[0].body, _this, 5);
        console.log(res.data)
        wx.setNavigationBarTitle({
          title: _this.data.title
        })
        WxParse.wxParse('article', 'html', _this.data.data, _this, 0);
        wx.hideLoading();

      }
    })
    //console.log("2121221"+_this.data.data+"555")
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */


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
    console.log('下拉刷新。')
    wx.stopPullDownRefresh()
  
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
 
})