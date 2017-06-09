// pages/dxxwitem/dxxwitem.js
var WxParse = require('../../wxParse/wxParse.js');
Page({
  data:{
    itemData:[],
    content:""
  },
  onLoad:function(params){
    console.log("文章ID："+params.id)
    const _this = this;
    var that = this;

    const apiUrl = 'http://mobile.ytcutv.com/yantai/item.php?appid=6&appkey=BuXh0nr3lkOnLT1XpPWSOapcQwjXAFD2&client_id_android=2039edc117f0474e54932b4aa9b93cfd&id='+params.id;
    //this.loading();
    wx.request({

        url: apiUrl, //仅为示例，并非真实的接口地址
        data: {},
        header: {
            'content-type': 'json'
        },
        success: function(res) {
          //wx.hideToast()
          _this.setData({itemData:res.data});
          //_this.setData({content:res.data.content.replace(/<p/g, "<view").replace(/<\/p>/g, "<\/view>")});
          //const aa = res.data.content
          console.log(res.data);
          console.log("文章数据：",res.data.content.replace(/<div m2o_mark="pic_0" style="display:none">/g, "【img】"));

          WxParse.wxParse('article', 'html', res.data.content.replace(/<div m2o_mark="(*)" style="display:none">/g, "【img】") , that,5);
        }
      })
  },
  onReady:function(){
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