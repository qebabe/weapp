// pages/test2Item/test2Item.js
const app = getApp();
Page({
 data:{
    itemm:[],
    titlee:'',
    load:false
  },

  onLoad (params){

    console.log("影片ID："+params.id)
    const _this = this
    const apiUrl = 'https://api.douban.com/v2/movie/subject/'+params.id;
    this.loading();
    wx.request({

        url: apiUrl, //仅为示例，并非真实的接口地址
        data: {},
        header: {
            'content-type': 'json'
        },
        success: function(res) {
          //wx.hideToast()
          _this.setData({itemm:res.data,titlee:res.data.title});
          _this.loading(false);

          console.log("影片数据：",res.data);
          //console.log(_this.data);
        }
      })
  },
  onReady:function(){
    wx.hideToast();
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
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
  }
  else if(msg==false){
    this.setData({load:false});
  }
  },
})