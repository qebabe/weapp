Page({
  data: {
  	imgUrls:[
		'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
     	 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
     	 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
		],
	bm_data:[
		{
		  	"id":"idNumber",
			"name":"证件号码：",
			"placeholder":"请输入身份证号码"
		},
		{
		  	"id":"name",
			"name":"姓名：",
			"placeholder":"请输入姓名"
		},
		{
		  	"id":"xb",
			"name":"性别：",
			"placeholder":"请输入性别"
		},
		{
		  	"id":"xb",
			"name":"性别：",
			"placeholder":"请输入性别"
		},
		{
		  	"id":"xb",
			"name":"性别：",
			"placeholder":"请输入性别"
		}
		],

    focus: false,
    inputValue: ''
  },

  bindKeyInput_idNumber: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  }


})