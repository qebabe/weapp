// pages/test2List/test2List.js
const app = getApp();
Page({
 data:{
    list:[],
    title:'',
    load:false
  },

  onLoad (params){
    console.log(params.type)
    this.setData({
      list: wx.getStorageSync(params.type)||null,
    })
    const _this = this

    const apiUrl = 'https://api.douban.com/v2/movie/'+params.type;
    this.loading();
    wx.request({

        url: apiUrl, //仅为示例，并非真实的接口地址
        data: {},
        header: {
            'content-type': 'json'
        },
        success: function(res) {
          //wx.hideToast()
          wx.setStorageSync(params.type,res.data.subjects);
          console.log(res.data);
          _this.setData({list:res.data.subjects,title:res.data.title});
          _this.loading(false);
          //app.see();
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
  },
 loading:function(msg=true){
  if(msg==true){
  this.setData({load:true});
  }
  else if(msg==false){
    this.setData({load:false});
  }
  },

})