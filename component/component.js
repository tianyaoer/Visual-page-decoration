// "y1234";		//自定义的占用码，占用window全局变量的时候，免得会影响到其他代码的占用，可以直接全局替换,注意，不可数字开头
window.y1234_mouseX = 0;		//鼠标x坐标
window.y1234_mouseY = 0		//鼠标y坐标
window.y1234_middle = $(".middle-1").offset()	//取放置区x(middle.left)，y(middle.top)坐标
window.y1234_middle_component = []		//放置区内组件的高，进行存储
window.y1234_componentType = "";		//组件名称
window.y1234_componentType_arrange = "";		//组件排列是否变化名称
window.y1234_middle_component_add = ""		//组件编号保存，1用来判断是否已加入元素，避免重复触发，2鼠标松开后假设在放置区，则不删除放置区元素
window.y1234_middle_component_edit_class = ""		//组件名称，当前在编辑哪个组件的class
window.y1234_jsondata = {}//已保存的json数据，进行遍历到放置区
window.y1234_jsondata_sort = []		//排列
window.y1234_component_left = [			//需要显示的组件有哪些
	"TitleBar_y1234",	//标题栏
	"GroupofPictures_y1234",	//图片栏
	"Carousel_y1234"	//轮播
]

$(function() {	//先进行处理部分数据
	component_left();		//先遍历组件栏
	$( ".middle-1" ).sortable();		//让放置区可拖动排序
	var width = $('.middle-1').width();
	var height = $('.middle-1').height();
	window.y1234_middle.right = window.y1234_middle.left+width		//获取放置区的右边坐标
	window.y1234_middle.bottom = window.y1234_middle.top+height		//获取放置区的底部坐标
	NavigationBar_y1234_addhtml()		//默认加入导航栏
	middle_component_each()	//页面加载后就执行一次
	jsondata_each()
});
function NavigationBar_y1234_addhtml(){		//加入导航栏
	var code = "NavigationBar_y1234_code";
	var type = "NavigationBar_y1234";
	let html = componentTypeStructure(type,"middle")
	$(".middle-1").append(html)		//加在子元素最后
	//取出结构，写入到本地json数据里
	var array = componentTypeStructure(type,"json")
	array['code'] = code
	window.NavigationBar_y1234_jsondata = []
	window.NavigationBar_y1234_jsondata[code] = array;		//额外存，不影响page的参数排列
	//取出结构，写入到本本地json数据里
	componentTypeStructure_layui(type,code);
}
function component_left(){
	let data = window.y1234_component_left;
	let html = "";
	$.each(data,function(k,v){
		html = componentTypeStructure(v,"left")
		$(".left").append(html)		//加在子元素最后
	})
	$( ".draggable" ).draggable();		//jqui的，让元素可进行拖动
}

function jsondata_each(){
	let jsondata = window.y1234_jsondata;
	let jsondata_each_html = "";
	$.each(jsondata,function(k,v){
		jsondata_each_html = componentTypeStructure(v.componentType,"middle")
		jsondata_each_html = '<div class="middle-2 '+v.componentType+' '+v.code+'" data-component_type="'+v.componentType+'" data-code="'+v.code+'">'+jsondata_each_html+'</div>'
		$(".middle-1").append(jsondata_each_html)		//加在子元素最后
	})
}


function middle_component_each(){
	window.y1234_middle_component = []	//清空记录
	//遍历放置区组件，取所有高度存起来
	$('.middle-2').each(function() {
		// this指向当前遍历的元素
		var middle_component = $(this).offset(); // 获取高度
		var top = middle_component.top+10	//加10px判断范围，避免不能在最顶部插入
		window.y1234_middle_component.push(top)
	});
}

$(".left").on("mousedown",".draggable",function(){		//拖动组件启动监听，判断是否进入放置区
	var code = rand_yw(9);
	window.y1234_componentType = $(this).data("component_type");
	shubiao(code);	//启动监听
})

$(".middle-1").on("click",".middle-2",function(){		//加载结构，数据提交框
	let component_type = $(this).data("component_type")
	let code = $(this).data("code")
	let index = $(this).index()
	let htmlStructure = componentTypeStructure(component_type,"right")
	$(".right-3-1").empty()
	$(".right-3-1").prepend(htmlStructure)
	window.y1234_middle_component_edit_class = code
	componentTypeStructure_layui(component_type,code);
})
$(".NavigationBar_y1234_buttom").on("click",function(){		//加载结构，数据提交框
	let component_type = $(this).data("component_type")
	let code = $(this).data("code")
	let index = $(this).index()
	let htmlStructure = componentTypeStructure(component_type,"right")
	$(".right-3-1").empty()
	$(".right-3-1").prepend(htmlStructure)
	window.y1234_middle_component_edit_class = code
	componentTypeStructure_layui(component_type,code);
})


$(".middle-1").on("mousedown",".middle-2",function(){		//判断位置排在第几
	var code = $(this).data("code")
	window.y1234_middle_component_add = code
	window.y1234_componentType_arrange = $("."+code).index();	//记录排在第几
	window.y1234_middle_component_sort = code
})
$('.middle-1').bind('sortstop', function(event, ui) {		//排序完成后，处理数据的结构排序
	let code = window.y1234_middle_component_sort
	let arrange = $("."+code).index();		//排序结束后触发，判断当前元素已经排在第几
	let jsondata_sort = window.y1234_jsondata_sort;
	if(window.y1234_componentType_arrange!=arrange){		//假如和之前不一样，进行处理json数据
		if(window.y1234_componentType_arrange>arrange){
			var n1 = arrange
			var n2 = window.y1234_componentType_arrange+1
			jsondata_sort.splice(n1, 0,code);
			jsondata_sort.splice(n2, 1);
		}else{
			var n1 = arrange
			var n2 = window.y1234_componentType_arrange
			jsondata_sort.splice(n2, 1);
			jsondata_sort.splice(n1, 0,code);
		}
	}
});

//启动监听鼠标		
function shubiao(code){
	$(document).on('mousemove', function(event) {
		window.y1234_mouseX = event.pageX;	//坐标先加入全局变量
		window.y1234_mouseY = event.pageY;
		let middle = window.y1234_middle;		//取出放置区坐标
		if(event.pageX>middle.left && event.pageY>middle.top && event.pageX<middle.right && event.pageY<middle.bottom){	//判断鼠标是否移动到放置区
			let component = window.y1234_middle_component
			let arrange = -1		//判断第几个
			if(component){
				$.each(component, function(k, v){
					if(event.pageY < v){
						arrange = k
						return false;
					}
				});
			}
			if(arrange==-1){
				arrange = 99999
			}
			if(window.y1234_middle_component_add!=code){
				middle_component(event.pageX,event.pageY,window.y1234_componentType,code,arrange);
			}else{
				// 移动列表中的列表项
				if(window.y1234_componentType_arrange != arrange){
					
					$('.'+code).insertBefore($('.middle-2').eq(arrange));
					window.y1234_componentType_arrange = arrange
					middle_component_each()	//移动完成后重新加载一遍
				}
				
			}
		}else{	
			$("."+code).remove();		//移出放置区，直接移除掉
			// window.y1234_middle_component_add = ""		//组件编号清零
			// window.y1234_componentType_arrange = 0		//清零排序
		}
	});
	
	
	
	$(document).on('mouseup', function(event) {
		let middle = window.y1234_middle;		//取出放置区坐标
		if(event.pageX>middle.left && event.pageY>middle.top && event.pageX<middle.right && event.pageY<middle.bottom){	//判断鼠标是否移动到放置区
			//取出结构，写入到本地json数据里
			var jsondata_sort = window.y1234_jsondata_sort;
			jsondata_sort.splice(window.y1234_componentType_arrange, 0,code);
			var array = componentTypeStructure(window.y1234_componentType,"json")
			array['code'] = code
			var y1234_jsondata = jsondata_list();
			y1234_jsondata[code] = array;
			jsondata_list_add(y1234_jsondata)
			//取出结构，写入到本本地json数据里
			
			let htmlStructure = componentTypeStructure(window.y1234_componentType,"right")
			$(".right-3-1").empty()
			$(".right-3-1").prepend(htmlStructure)
			window.y1234_middle_component_edit_class = code
			
			componentTypeStructure_layui(window.y1234_componentType,code);
		}
		//鼠标松开后，重置位置
		$('.draggable').css({
			'left': 0,
			'top': 0,
		});
		$(document).off('mousemove mouseup');		//关闭掉监听，免得造成多次监听
		window.y1234_componentType = ""				//组件名清零
		// window.y1234_middle_component_add = ""		//组件编号清零
		// window.y1234_componentType_arrange = 0		//清零排序
	});
}
//需要鼠标x，y坐标，componentType组件名,code编号加入class，确保鼠标松开后可以删除掉元素
function middle_component(x,y,componentType,code,arrange){
	let html = componentTypeStructure(componentType,"middle")
	html = '<div class="middle-2 '+componentType+' '+code+'" data-component_type="'+componentType+'" data-code="'+code+'">'+html+'</div>'
	if(arrange){
		let middle2 = $(".middle-2").eq(arrange).height();
		if(middle2){
			$(".middle-2").eq(arrange).before(html)		//在同级之后插入元素
		}else{
			$(".middle-1").append(html)		//加在子元素最后
		}
	}else{
		$(".middle-1").prepend(html)	//加在子元素最前
	}
	componentTypeStructure_layui(window.y1234_componentType,code);
	window.y1234_middle_component_add = code
	window.y1234_componentType_arrange = arrange
	middle_component_each()	//移动完成后重新加载一遍
}
//上移
$(".right_icon_img_up").on("click",function(){
	if(window.y1234_componentType_arrange<=0){
		return layer.msg('已经在最顶了');
	}
	let jsondata_sort = window.y1234_jsondata_sort;
	let code = window.y1234_middle_component_add
	var right_arrange = extend_deep_copy(window.y1234_componentType_arrange)
	var n1 = right_arrange-1
	var n2 = right_arrange
	
	$('.'+code).insertBefore($('.middle-2').eq(n1));
	jsondata_sort.splice(n1, 0,code);
	jsondata_sort.splice(n2+1, 1);
	window.y1234_componentType_arrange = n1
})
//下移
$(".right_icon_img_down").on("click",function(){
	let jsondata_sort = window.y1234_jsondata_sort;
	var length = jsondata_sort.length-1
	if(window.y1234_componentType_arrange>=length){
		return layer.msg('已经在最底部了');
	}
	
	let code = window.y1234_middle_component_add
	var right_arrange = extend_deep_copy(window.y1234_componentType_arrange)
	var n1 = right_arrange+2
	var n2 = right_arrange
	
	$('.'+code).insertBefore($('.middle-2').eq(n1));
	jsondata_sort.splice(n1, 0,code);
	jsondata_sort.splice(n2, 1);
	window.y1234_componentType_arrange = right_arrange+1
})
//删除
$(".right_icon_img_delete").on("click",function(){
	let jsondata_sort = window.y1234_jsondata_sort;
	let code = window.y1234_middle_component_add
	var right_arrange = extend_deep_copy(window.y1234_componentType_arrange)
	jsondata_sort.splice(right_arrange, 1);
	window.y1234_componentType_arrange = right_arrange-1
	window.y1234_middle_component_add = ""
	$('.'+code).remove();
})

//保存
$(".middle-bc").on("click",function(){
	var NavigationBar = window.NavigationBar_y1234_jsondata
	var data = {
		"NavigationBar":NavigationBar['NavigationBar_y1234_code'],
		"page":[]
	}
	let jsondata_sort = window.y1234_jsondata_sort;
	$.each(jsondata_sort,function(k,v){
		data.page[k] = window.y1234_jsondata[v]
	})
	const json = JSON.stringify(data)
	$.ajax({
	   url: "http://example.com/api/data",
	   type: "POST",
	   data: { json: json, id: 1 },
	   dataType: "json",
	   contentType: "application/json",
	   headers: { "X-Auth-Token": "abcdef123456" },
	   timeout: 5000,
	   async: true,
	   beforeSend: function(xhr) {
	      // 在发送请求之前修改请求头或数据
	      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	   },
	   complete: function(xhr, status) {
	      // 请求完成后的处理逻辑
	      console.log("请求完成");
	   },
	   success: function(response) {
	      // 处理成功的响应数据
	      console.log(response);
	   },
	   error: function(xhr, status, error) {
	      // 处理请求失败的情况
	      console.log("请求失败：" + error);
	   }
	});
	layer.msg('点击保存');
})



function extend_deep_copy(data){		//必须用深拷贝，不然会改掉全部数据
	var deep_copy = []
	var deep_copy2 = [data]		//假如对象不是数组，则无法进行深拷贝
	$.extend(true,deep_copy,deep_copy2)
	return deep_copy[0];
}
function extend_deep_copy2(code,data){		//必须用深拷贝，不然会改掉全部数据
	window[code] = ""
	$.extend(true,window[code],data)
	return true;
}
function jsondata_list(){		//必须用深拷贝，不然会改掉全部数据
	var jsondata = []
	$.extend(true,jsondata,window.y1234_jsondata)
	return jsondata;
}
function jsondata_list_add(data){	//必须用深拷贝，不然会改掉全部数据
	window.y1234_jsondata = []	//深度拷贝必须先净化掉原来的
	$.extend(true,window.y1234_jsondata,data)
	return true;
}
//获取长度为len的随机字母
function rand_yw(len){
	len = len || 1;
	var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var maxPos = $chars.length;
	var pwd = '';
	for (i = 0; i < len; i++) {
		pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
	}
	return pwd
}
		

// 查看structure.js文件配置
function componentTypeStructure(component,type){
	var html = window[window[component][type]];
	return html
}
function componentTypeStructure_layui(component,code){
	eval(window[component]["jq_function"]+"('"+code+"')");		//使用变量动态调用方法
}


//设置数据值
function componentTypeStructure_edit(code,value){		//修改数据值
	var json_data = jsondata_list()
	json_data[code] = value;
	jsondata_list_add(json_data)
}


