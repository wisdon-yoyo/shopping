// 自己的工具库

var mytools = {
	//XMLHttpRequest对象
	getXhr : function(){
		// 1. 创建XMLHttpRequest空对象
		var xhr = null;//不占用内存空间
		// 2. 判断当前的浏览器
		if(window.XMLHttpRequest){//其他浏览器
			xhr = new XMLHttpRequest();
		}else{//IE浏览器
			xhr = new ActiveXObject("Microsoft.XMLHttp");
		}
		// 3. 将XMLHttpRequest对象返回
		return xhr;
	},
	// 实现Ajax异步交互
	ajax : function(opts){
		// 1. 创建核心对象
		var xhr = null;
		if(window.XMLHttpRequest){
			xhr = new XMLHttpRequest();
		}else{
			xhr = new ActiveXObject("Microsoft.XMLHttp");
		}
		// 2. 建立连接
		xhr.open(opts.method, opts.url);
		// 3. 发送请求数据
		if(opts.method == "GET"){
			xhr.send(null);
		}else{
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			xhr.send(opts.data);
		}
		// 4. 接收响应数据
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				var result = xhr.responseText;
				opts.callback(result);
			}
		}
	}
}

// 封装创建XMLHttpRequest对象的函数
function getXhr(){
	// 1. 创建XMLHttpRequest空对象
    var xhr = null;//不占用内存空间
    // 2. 判断当前的浏览器
    if(window.XMLHttpRequest){//其他浏览器
        xhr = new XMLHttpRequest();
    }else{//IE浏览器
        xhr = new ActiveXObject("Microsoft.XMLHttp");
    }
    // 3. 将XMLHttpRequest对象返回
    return xhr;
}

/* 封装实现Ajax的步骤
function ajax(method, url, data, callback){
	// 1. 创建核心对象
	var xhr = null;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject("Microsoft.XMLHttp");
	}
	// 2. 建立连接
	xhr.open(method, url);
	// 3. 发送请求数据
	if(method == "GET"){
		xhr.send(null);
	}else{
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xhr.send(data);
	}
	// 4. 接收响应数据
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			var result = xhr.responseText;
			callback(result);
		}
	}
}*/
/*
   ajax()方法只有一个参数opts
   * opts参数是一个对象 { key : value }
   * 选项
     * method - 请求类型
	 * url - 请求地址
	 * data - 请求数据
	 * callback - 请求成功后的回调函数
 */
function ajax(opts){
	// 1. 创建核心对象
	var xhr = null;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject("Microsoft.XMLHttp");
	}
	// 2. 建立连接
	xhr.open(opts.method, opts.url);
	// 3. 发送请求数据
	if(opts.method == "GET"){
		xhr.send(null);
	}else{
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xhr.send(opts.data);
	}
	// 4. 接收响应数据
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			var result = xhr.responseText;
			opts.callback(result);
		}
	}
}