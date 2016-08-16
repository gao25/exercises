/*myJavascript*/
/** addHandler方法
  * 区分使用DOM0级方法、DOM2级方法或IE方法来添加事件
  * 接受三个参数：要操作的元素，事件名称、事件处理程序函数
  **/
/** removeHandler方法
  * 移除事件
  **/

var EventUtil = {
	addHandler: function(element, type, handler){
		if (element.addEventListener){
			element.addEventListener(type, handler, false);
		} else if (element.detachEvent){
			element.attachEvent("on" + type, handler);
		} else {
			element["on" + type] = handler;
		}
	},
	/*返回对event对象的引用*/
	getEvent: function(event){
		return event ? event : window.event;
	},
	/*返回事件的目标*/
	getTarget: function(event){
		return event.target || event.srcElement;
	},
	/*取消事件的默认属性*/
	preventDefault: function(event){
		if(evnet.preventDefault){
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},

	removeHandler: function(element, type, handler){
		if (element.removeElementListener){
			element.removeElementListener(type, handler, false);
		} else if (element.detachEvent){
			element.detachEvent("on" + type, handler);
		} else {
			element["on" + type] = null;
		}
	},
	/*阻止事件流*/
	stopPropagation: function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	}

};

/***递归***/
/*arguments.callee:指向正在执行的函数的指针,在严格模式下失效*/
// function factrial(num) {
// 	if(num <= 1) {
// 		return 1;
// 	} else {
// 		return num * arguments.callee(num-1);
// 	}
// }

/*利用命名函数表达式来实现递归*/
var factrial = (function f(n){
	if (n <= 1){
		return 1;
	} else {
		return n * f(n-1);
	}
});

// factrial(3);

/*比较函数，排列数组*/
//升序
function compare(value1, value2) {
	if(value1 < value2) {
		return -1;
	}else if(value1 > value2) {
		return 1;
	}else {
		return 0;
	}
}

// var values = [0,1,5,10,15];
// value.sort(compare);
// alert(values); 

/*对于valueOf方法返回数值了类型的对象类型*/
 function compare(value1, value2){
 	return value2-value1;
 }

 /*生成某个区间内的随机数*/
 /* lowerValue: 应该返回的最小值，
    upperValue: 应该返回的最大值，
    **/

 function selectFrom(lowerValue, upperValue) {
 	var choices = upperValue - lowerValue + 1;
 	var random = Math.random();
 	return Math.floor(random * choices + lowerValue);
 }
 var num = selectFrom(2, 10);
console.log("随机数："+num);

/*判断属性存在于对象或原型中*/
function hasPrototypeProperty(object, name){
	return !object.hasOwnProperty(name) && (name in object)
}

/*跨浏览器取得窗口左边和上边的位置*/
//var leftPos = (typeof window.screenLeft == "number")?window.screenLeft : window.screenX;
//var topPos = (typeof window.screenTop == "number")? window.screenTop : window.screenY;

/*获取页面视口大小*/
var pageWidth = window.innerWidth,
	pageHeight = window.innerHeight;

if (typeof pageWidth != "number"){
	if (document.compatMode == "CSSlCompat"){ //页面是否处于标准模式
		pageWidth = document.documentElement.clientWidth;
		pageHeight = document.documentElement.clientHeight;
	} else { //IE6
		pageWidth = document.body.clientWidth;
		pageHeight = document.body.clientHeight;
	}
}

/*检测弹出窗口是否被屏蔽*/
var blocked = false;

try{
	var wroxWin = window.open("http://www.wrox.com", "_blank");
	if(wroxWin == null){
		blocked = true;
	}
}catch(ex){
	blocked = true;
}

if(blocked) {
	alert("The popup was blocked!");
}

/*查询字符串参数*/
function getQueryStringArgs(){
	//取得查询字符串并去掉开头的问号
	var qs = (location.search.length > 0 ? location.search.substring(1) : ""),

	//保存数据的对象
	args = {},

	//取得每一项
	items = qs.length ? qs.split("&") : [],
	item = null,
		name = null,
		value = null,

		//在for循环中使用
		i = 0,
		len = items.length;

		//逐个将每一项添加到args对象中
		for(i=0; i<len; i++){
			item = items[i].split("=");
			name = decodeURIComponent(item[0]);
			value = decodeURIComponent(item[1]);

			if(name.length){
				args[name] = value;
			}
		}
		return args;
}

/*检测插件ie无效*/
function hasPlugin(name){
	name = name.toLowerCase();
	for(var i=0; i<navigator.plugins.length; i++){
		if(navigator.plugins[i].name.toLowerCase().indexOf(name) > -1){
			return true;
		}
	}
	return false;
}

//使用 -- 检测Flash QuickTime
// alert(hasPlugin("Flash"));
// alert(hasPlugin("QuickTime"));


/*检测ie*/
function hasIEPlugin(name){
	try {
		new ActiveXObject(name);
		return true;
	} catch (ex) {
		return false;
	}
}

//检测flash(接受COM标识符)
//alert(hasIEPlugin("ShockwaveFlash.ShockwaveFlash"))

 /* 封装的 Ajax 调用，返回 json 字符串 */
(function ($) {
    $.extend({
        postJson: function (options) { //ajax封装
            var defaults = {
                ServiceName: "",
                FuncName: "",
                Params: {},
                dataType: "json",
                async: false,
                SuccessFunc: function () {
                }
            };

            var opts = $.extend(defaults, options);

            var url = serviceRoot + opts.ServiceName + "/" + opts.FuncName;
            var jsonData;
            if(typeof(opts.Params)=="string" && opts.Params.constructor==String ) 
            	jsonData=opts.Params;
            else
                jsonData = JSON.stringify(opts.Params);
            //alert(jsonData);
             
            $.ajax({
            	type:"POST",
                url: url, 
                data: jsonData,
                dataType: opts.dataType,
                async: opts.async,
                cache: false,
                contentType: "application/json",
                success: function (data) {
                    if (data) {
                        opts.SuccessFunc(data);
                    } else {
                         alert("错误", "系统繁忙！");

                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    if (XMLHttpRequest.responseText)
                    	 alert("错误", "系统繁忙！");
                }
            });
        }
    })
})(jQuery);