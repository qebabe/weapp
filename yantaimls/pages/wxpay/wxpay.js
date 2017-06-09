// pages/wxpay/wxpay.js
const md5 = require('../../utils/md5.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid:"",
    ready :false,
    pay :false,
    response:{}

  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    wx.getStorage({
      key: 'openid',
      success: function (res) {
        //console.log("openid:"+res.data)
        wx.showLoading({
          title: '加载中',
        })
        const url = 'https://qebsc.sinaapp.com/xcx/WxpayAPI_php_v3/test1.php'
        wx.request({
          url: url,
          data: {
            openid: res.data,
            title: "王仕晓男子半程-报名费",
            trade_no: "nanc370521199101031214",
            total_fee: "1"
          },
          success: function (response) {
            console.log(that.data.openid);
            console.log(response.data);
            //result_code:"SUCCESS"
            if (response.data.result_code == "SUCCESS" && response.data.return_code == "SUCCESS"){
              that.setData({
                response: response.data,
                ready : true
              })
            }else{
              wx.showModal({
                title: '系统错误',
                content: response.data.return_msg,
              })
            }
          wx.hideLoading();
          that.setData({
            openid: res.data,
            //ready :true
        });
      }
    })
  }
});
},
  gopay :function(){
  var that = this
  var appId = that.data.response.appid;
  var timeStamp = (Date.parse(new Date()) / 1000).toString();
  var pkg = 'prepay_id=' + that.data.response.prepay_id;
  var nonceStr = that.data.response.nonce_str;
  var stringSignTemp = 'appId=' + appId + '&nonceStr=' + nonceStr + '&package=' + pkg + '&signType=MD5&timeStamp=' + timeStamp + "&key=e10adc3949ba59abbe56e057f20f883e"
  var paySign = md5.hex_md5(stringSignTemp).toUpperCase();
  console.log(paySign);
  console.log(appId);
  wx.requestPayment({
    'timeStamp': timeStamp,
    'nonceStr': nonceStr,
    'package': pkg,
    'signType': 'MD5',
    'paySign': paySign,
    'success': function (res) {
      console.log('success');
      console.log(res);
      that.setData({
        pay :true
      });
    }
  });
  }, 
  onPullDownRefresh: function () {
    console.log('下拉刷新。')
    wx.stopPullDownRefresh()

  },
})