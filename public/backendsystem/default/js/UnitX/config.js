//name哪个页面需要用   config需要引用的 js库
debugs=Object();

if(typeof UnitXloading!='undefined' || typeof UnitXloadingFalse!='undefined'){
	if(typeof UnitXloadingFalse!=='boolean'){
		debugs[5]='自定义loading：\n'+UnitXloading+'UnitX/onloading';
		document.write('<script type="text/javascript" src='+UnitXloading+'UnitX/onloading.js></script>')
	}else{
		debugs[5]='自定义loading：\n'+'关闭状态';
	}
}
function Unit(websiteName,Path,depath){
	
	//开启响应式js书写方式
	this.webResponse=false;
	
	this.syspath=depath[0]?depath[0]:'.';
	debugs[1]='框架文件引入路径：[syspath][0]\n'+depath[0];
	debugs[2]='网站根目录：[syspath][1]\n'+depath[1];
	this.websiteName=websiteName;
	this.debug=true;
	//自定义主js路径
	this.initPath='/js/';
	//自定义主js文件名
	this.main='main';
	//系统内置js加载配置
	if(typeof UnitXloadingFalse==='boolean' || typeof UnitXloadingFalse===true || typeof UnitXloading!='undefined'){
		this.systemLoad([this.syspath+this.initPath+this.main],'system');
	}else{
		debugs[5]='系统loading：[syspath][1]\n'+this.syspath+this.initPath+'UnitX/onloading';
		this.systemLoad([this.syspath+this.initPath+'UnitX/onloading',this.syspath+this.initPath+this.main],'system');
	}
	
	if(Path) this.systemLoad(Path);
	var self=this;
	//屏幕宽度
	self.clientWidth=document.documentElement.clientWidth;
	window.onload=function(){
		var obj=Object();
			obj=depath;
		var box=new Box(obj);
		
		
		
		//初始化应用函数库
		debugs[0]='加载模块：'
		for(var si=0;si<self.websiteName.length;si++){
			debugs[0]+=('\n'+self.websiteName[si]);
			self.UnitWidth(box,self.clientWidth,self.websiteName[si]);
		}
		debugs[3]='是否开启响应式js模式：\n'+self.webResponse;
	
		if(self.webResponse){
			window.onresize = function(){
				self.clientWidth=document.documentElement.clientWidth;
				for(var si=0;si<self.websiteName.length;si++){
					self.UnitWidth(box,self.clientWidth,self.websiteName[si]);
				}
			}
		}
		$('.unitLoading').fadeOut(400)
		//debug信息输出
		self.Unitlog(debugs);
		
		//self.systemRoute(box,self);
	}
}

	//debu输出
Unit.prototype.Unitlog=function(str){
	if(this.debug===true){
		var i=0;
		while(str[i]){
			console.log('%c'+str[i],'color:#008010');
			i++;
		}
	}
}

//检测js运行环境
Unit.prototype.UnitWidth=function(box,a,websiteName){

	//检测是否使用响应式js环境

	if(this.webResponse){
		box[websiteName].defaults();
		if(a<=400){
			box[websiteName].phone();
			//eval('box.'+websiteName+'.phone()');
		}else if(a<=1200){
			box[websiteName].ipad();
			//eval('box.'+websiteName+'.ipad()');
		}else{
			box[websiteName].pc();
			//eval('box.'+websiteName+'.pc()');
		}
	}else{
		box[websiteName].defaults();
		//eval('box.'+websiteName+'.defaults()');
	}
}

//系统内置js解析
Unit.prototype.systemLoad=function(arr,a){

	if(a){
		debugs[4]='加载框架内置js：';
		for(var i=0;i<arr.length;i++){
			debugs[4]+='\n'+arr[i]+'.js';
			document.write('<script type="text/javascript" src='+arr[i]+'.js></script>')
		}
	}else{
		debugs[4]+='\n加载外部js：';
		for(var i=0;i<arr.length;i++){
			debugs[4]+='\n'+this.syspath+this.initPath+arr[i]+'.js';
			document.write('<script type="text/javascript" src='+this.syspath+this.initPath+arr[i]+'.js></script>')
		}
	}
}
//
/*Unit.prototype.systemRoute=function(box,self){
	const Foo = { template: foo }
	const Bar = { template: '<div><h2>index</h2>bar</div>' }
	const Fs1 = { template: '<div class="fs"><h2>foo1</h2>faa</div>' }
	const Fs2 = { template: '<div class="fs"><h2>foo2</h2>faa2</div>' }
	//定义路由
	const routes = [
		{	path: '/foo', 
			component: Foo

		 },
		{ path: '/foo/:id',component: Foo,
			children: [
		    {
		      // 当 /user/:id/profile 匹配成功，
		      // UserProfile 会被渲染在 User 的 <router-view> 中
		      path: '1',
		      component: Fs1,
		      name:'app'

		    },
		    {
		      // 当 /user/:id/posts 匹配成功
		      // UserPosts 会被渲染在 User 的 <router-view> 中
		      path: '2',
		      component: Fs2,
		      name:'index'
		    }
		]
		},
	  { path: '/bar', component: Bar,name:false }
	]
	// 创建 router 实例，然后传 `routes` 配置
	const router = new VueRouter({
	  routes // （缩写）相当于 routes: routes
	})
	 
	// 创建和挂载根实例。
	const app = new Vue({
		
	  router,
	}).$mount('#app')
			
	//检测点击事件刷新函数库
	document.getElementById("app").addEventListener("click",function(event){
		if(app.$route.name){
			self.websiteName=app.$route.name;
			self.UnitWidth(box,self.clientWidth,app.$route.name);
		}
		
	},false);
}
foo=
'<div class="foo">\
	<h2>app</h2>\
	<router-link to="/foo/id/1">链接1</router-link>\
	<router-link to="/foo/id/2">链接2</router-link>\
	foo\
	<router-view></router-view>\
</div>';*/