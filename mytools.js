//封装工具
var mytools={
	//浮动导航条置顶
	var navfix=(function($){$.fn.navfix=function(mtop,zindex){
        var nav=$(this),mtop=mtop,zindex=zindex,dftop=nav.offset().top-$(window).scrollTop(),dfleft=nav.offset().left-$(window).scrollLeft(),dfcss=new Array;dfcss[0]=nav.css("position"),dfcss[1]=nav.css("top"),dfcss[2]=nav.css("left"),dfcss[3]=nav.css("zindex"),$(window).scroll(function(e){$(this).scrollTop()>dftop?$.browser.msie&&$.browser.version=="6.0"?nav.css({position:"absolute",top:eval(document.documentElement.scrollTop),left:dfleft,"z-index":zindex}):nav.css({position:"fixed",top:mtop+"px",left:dfleft,"z-index":zindex}):nav.css({position:dfcss[0],top:dfcss[1],left:dfcss[2],"z-index":dfcss[3]})})}})(jQuery)

}
//text is just text