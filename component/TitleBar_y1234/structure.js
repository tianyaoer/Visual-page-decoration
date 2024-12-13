// 所有变量名都要唯一，各组件不同
var TitleBar_y1234 = {		
	"left":"TitleBar_y1234HTMLLeft",			//左边显示的html代码
	"middle":"TitleBar_y1234HTML",			//中间显示的html代码
	"right":"TitleBar_y1234HTMLStructure",	//右边的html数据名
	"jq_function":"TitleBar_y1234HTMLStructure_layui"			,//layui方法，
	"json":"TitleBar_y1234Structure_json"		//默认数据
}

var TitleBar_y1234Structure_json = {
	"componentType":"TitleBar_y1234",
	"code":"",
	"title":"文本栏",
	"margin":{
		"top":0,
		"bottom":0,
		"left":0,
		"right":0
	},
	"width_height":{
		"width":400,
		"height":50,
	},
	"color":{
		"background":"#fff",
		"color":"#000"
	},
	"fontSize":20
}
var TitleBar_y1234HTMLLeft = '<div class="left-1 TitleBar_y1234_left">'+
							'<div class="TitleBar_y1234_ditu">'+
								'<i class="layui-icon layui-icon-list TitleBar_y1234_tubiao"></i>'+
								'<p class="TitleBar_y1234_biaotilan">标题栏</p>'+
							'</div>'+
							'<div class="TitleBar_y1234_ditu draggable" data-component_type="TitleBar_y1234">'+
								'<i class="layui-icon layui-icon-list TitleBar_y1234_tubiao"></i>'+
								'<p class="TitleBar_y1234_biaotilan">标题栏</p>'+
							'</div>'+
						'</div>';
						
var TitleBar_y1234HTML = 	'<div class="TitleBar_y1234_middle">'+
						'<div class="TitleBar_y1234_title">标题内容</div>'+
					'</div>';
				
var TitleBar_y1234HTMLStructure = '<div class="TitleBar_y1234">'+
								'<div class="layui-form-item">'+
									'<label class="layui-form-label">标题</label>'+
									'<div class="layui-input-block">'+
										'<input type="text" name="username" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input TitleBar_y1234_title_input">'+
									'</div>'+
								'</div>'+
								'<div class="layui-form-item">'+
									'<label class="layui-form-label">背景颜色</label>'+
									'<div class="layui-input-block">'+
										'<div class="backgroundcolor"></div>'+
									'</div>'+
								'</div>'+
								'<div class="layui-form-item">'+
									'<label class="layui-form-label">字体颜色</label>'+
									'<div class="layui-input-block">'+
										'<div class="textcolor"></div>'+
									'</div>'+
								'</div>'+
								'<div class="layui-form-item">'+
									'<label class="layui-form-label">字体大小</label>'+
									'<div class="layui-input-block">'+
										'<div class="bianju slider_fontSize"></div>'+
										'<div class="ID-slider-demo-setTips-fontSize"></div>'+
									'</div>'+
								'</div>'+
								'<div class="layui-form-item">'+
									'<label class="layui-form-label">宽，高</label>'+
									'<div class="layui-input-block">'+
										'<div class="bianju slider_kuan">宽</div>'+
										'<div class="ID-slider-demo-setTips-kuan"></div>'+
										'<div class="bianju slider_gao">高</div>'+
										'<div class="ID-slider-demo-setTips-gao"></div>'+
									'</div>'+
								'</div>'+
								'<div class="layui-form-item">'+
									'<label class="layui-form-label">边距</label>'+
									'<div class="layui-input-block">'+
										'<div class="bianju bianju_top">上</div>'+
										'<div class="ID-slider-demo-setTips-bianju_top"></div>'+
										'<div class="bianju bianju_bottom">下</div>'+
										'<div class="ID-slider-demo-setTips-bianju_bottom"></div>'+
										'<div class="bianju bianju_left">左</div>'+
										'<div class="ID-slider-demo-setTips-bianju_left"></div>'+
										'<div class="bianju bianju_right">右</div>'+
										'<div class="ID-slider-demo-setTips-bianju_right"></div>'+
									'</div>'+
								'</div>'+
							'</div>';