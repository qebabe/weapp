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

    console.log("文章ID：" + params.id);
    const _this = this
    const apiUrl = 'http://yantaimls.mhuaxia.com/api/getitem.php?id=' + params.id;
    console.log("当前页URL：" + apiUrl)
    //var that = this;

    console.log(_this.data.data)
    /**
 * 初始化emoji设置
 */
    WxParse.emojisInit('[]', "/wxParse/emojis/", {
      "00": "00.gif",
      "01": "01.gif",
      "02": "02.gif",
      "03": "03.gif",
      "04": "04.gif",
      "05": "05.gif",
      "06": "06.gif",
      "07": "07.gif",
      "08": "08.gif",
      "09": "09.gif",
      "09": "09.gif",
      "10": "10.gif",
      "11": "11.gif",
      "12": "12.gif",
      "13": "13.gif",
      "14": "14.gif",
      "15": "15.gif",
      "16": "16.gif",
      "17": "17.gif",
      "18": "18.gif",
      "19": "19.gif",
    });
    /**
     * html解析示例
     */

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
        WxParse.wxParse('article', 'html', _this.data.data, _this, 5);

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
  onShow: function () {
  
  },

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
  onPullDownRefresh: function () {
  
  }
})