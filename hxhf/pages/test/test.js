Page({
		data:{
		    imgUrls:[
		    'http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2397337958.jpg',
		    'http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2402824160.jpg',
		    'http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2403319543.jpg'
		    ],
		    bm_data:[
		{	"type":"input",
		  	"id":"idNumber",
			"name":"证件号码",
			"placeholder":"请输入身份证号码",
			"value":""
		},
		{
			"type":"input",
		  	"id":"name",
			"name":"姓名",
			"placeholder":"请输入姓名",
			"value":""
		},
		{
			"type":"radio",
		  	"id":"xb",
			"name":"性别",
			"placeholder":"请输入性别",
			"value":"",
			"data":["男","女"],
			"indexx":0,
		},
		{
			"type":"input",
		  	"id":"gj",
			"name":"国籍",
			"placeholder":"请输入国籍",
			"value":"中国"
		},
		{
			"type":"input",
		  	"id":"tel",
			"name":"电话",
			"placeholder":"请输入电话",
			"value":""
		},
		{
			"type":"input",
		  	"id":"dz",
			"name":"地址",
			"placeholder":"请输入地址",
			"value":""
		},
		{
			"type":"input",
		  	"id":"jjTel",
			"name":"紧急电话",
			"placeholder":"请输入紧急联系人电话",
			"value":""
		},
		{
			"type":"input",
		  	"id":"jjName",
			"name":"紧急姓名",
			"placeholder":"请输入紧急联系人姓名",
			"value":""
		},
		{
			"type":"input",
		  	"id":"Email",
			"name":"电子邮箱",
			"placeholder":"请输入电子邮箱",
			"value":""
		},
		{
			"type":"select",
		  	"id":"xm",
			"name":"项目",
			"placeholder":"请选择所报项目",
			"value":"",
			"data":["全程马拉松","半程马拉松","十公里","五公里"],
			"indexx":0
		},
		{
			"type":"select",
		  	"id":"yfxh",
			"name":"衣服型号",
			"placeholder":"请选择衣服型号",
			"value":"",
			"data":["儿童","S","M","L","XL","XXL","XXXL"],
			"indexx":0
		}
		],

		idToName:{},

        showTopTips: false,
        topTips:"",

        checkboxItems: [
            {name: 'standard is dealt for u.', value: '0', checked: true},
            {name: 'standard is dealicient for u.', value: '1'}
        ],
        date: "2016-09-01",
        time: "12:01",
        isAgree: false
  		},
  		bindxbChange: function(e) {
	        	console.log('性别 发生选择改变，携带值为', e.detail.value);
	        	var a = this.data.bm_data;
           		a[2].indexx = e.detail.value;
           		//console.log(a);

	        	this.setData({
           			bm_data:a
     			})
	        },
	   bindxmChange: function(e) {
	        	console.log('项目 发生选择改变，携带值为', e.detail.value);
	        	var a = this.data.bm_data;
           		a[9].indexx = e.detail.value;
           		//console.log(a);

	        	this.setData({
           			bm_data:a
     			})
	        },
	    bindyfxhChange: function(e) {
	        	console.log('衣服型号 发生选择改变，携带值为', e.detail.value);
	        	var a = this.data.bm_data;
           		a[10].indexx = e.detail.value;
           		//console.log(a);

	        	this.setData({
           			bm_data:a
     			})
	        },
	    bindAgreeChange: function (e) {

	    	this.setData({
	            			isAgree: !!e.detail.value.length
	        			  });

	        console.log(this.data.isAgree);
	    },
	    formSubmit: function(e) {
	    	var props = "";
	    	var a = e.detail.value;
	    	var sub={}
	    	for(var p in a){
			    if(typeof(a[p])=="function"){

			    }else{
			        // p 为属性名称，obj[p]为对应属性的值
			        props += p + "=" + a[p] + ";  ";

			        if(a[p]==""){

			        	//console.log(p+"为空！");
			        	var that = this;
			        	var pp = this.data.idToName["'"+p+"'"];
			        	var msg = "请填写"+pp+"！"
				        this.setData({
				            showTopTips: true,
				            topTips:msg
				        });
				        setTimeout(function(){
				            that.setData({
				                showTopTips: false,
				                topTips:""
				            });
				        }, 3000);

				        return
			        }
			        else{
			        	sub["'"+p+"'"]=""+a[p]+""
			        }


			    }
			}



    		console.log("sub:",sub)
  		},
  		onReady: function() {
  			//console.log("页面加载完成。");
    	// Do something when page ready.
    	var that = this;
    	var a = this.data.bm_data;
    	var idToName = this.data.idToName;
    	var props,b={}
    	for(var p in a){
			    if(typeof(a[p])=="function"){

			    }else{
			    	//console.log(a[p].id+":"+a[p].name)
			        b["'"+a[p].id+"'"]=""+a[p].name+""
			        that.setData({
				                idToName:b
				            });
			        //console.log(this.data.idToName)



			    }
				}
  		}




})



