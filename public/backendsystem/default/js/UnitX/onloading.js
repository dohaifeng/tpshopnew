if(navigator.appName=='Microsoft Internet Explorer'){

document.write('<div class="unitLoading" style="width:100%;height:100%;position:fixed;display: table;top:50%;left:50%;right:-50%;bottom:-50%;z-index=123123123;">页面加载中</div>');
	
}else{
	document.write('<div class="unitLoading" style="width:100%;height:100%;position:fixed;text-align:center;top:0;left:0;display:flex;justify-content:center;align-items:center;z-index:11111111;background:#fff;"><div class="loadscccC"><div class="load1"></div></div></div>');
		document.write('<style type="text/css">html, body{height: 100%; }'+
	'@keyframes anim'+
	'{'+
	    'from {background: #000;}'+
	    'to {'+
			'-moz-transform: rotate(230deg) scale(2,2);'+
    '-o-transform: rotate(230deg) scale(2,2);'+
    '-webkit-transform: rotate(230deg) scale(2,2);'+
    'transform: rotate(230deg) scale(2,2);'+
    'opacity: 0;'+
	    '}'+
	'}'+
	'.loadscccC{width:60px;height: 60px;margin: auto;'+
	'animation: anim 1.5s infinite linear;'+
    '-webkit-animation: anim 1.5s infinite linear; /* Safari 与 Chrome */'+
	'}'+
	'.load1{width: 110%;height: 110%;background: #fff;border-radius: 50%;position: absolute;left: -5%;top: -5%;}'+
'</style>')
}
