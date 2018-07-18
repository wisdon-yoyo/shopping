1  * Ajax的实现步骤(面试题)
   * 创建核心对象
   * 建立连接 - open()
   * 发送请求数据 - send()
   * 注册监听 - onreadystatechange
   * 获取通信状态 - readyState
   * 接收响应数据 - status
	// 闭包原理，回调函数封装方法

 
 function loadXMLDoc()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","/ajax/test1.txt",true);
xmlhttp.send();
}

2、post；
xmlhttp.open("POST","ajax_test.asp",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("fname=Bill&lname=Gates");
//向请求添加 HTTP 头。
//header: 规定头的名称
//value: 规定头的值