Page({
    datadata:{
        message:"hello 小程序！",
        list   :[]
    },
    onLoad(){
        //加载数据，并呈现到页面。
        this.setData({
            message:Date.now()
        })


        const _this = this

        wx.request({
            url: 'http://api.douban.com/v2/movie/in_theaters', //仅为示例，并非真实的接口地址
            data: {},
            header: {
             'content-type': 'json'
            },
            success: function(res) {
                console.log(res.data)
                _this.setData({
                    list:res.data.subjects
                })

            }
            })










    }
})