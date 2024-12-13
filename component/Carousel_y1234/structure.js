// 所有变量名都要唯一，各组件不同
var Carousel_y1234 = {		
	"left":"Carousel_y1234HTMLLeft",			//左边显示的html代码
	"middle":"Carousel_y1234HTML",			//中间显示的html代码
	"right":"Carousel_y1234HTMLStructure",	//右边的html数据名
	"jq_function":"Carousel_y1234HTMLStructure_layui"			,//layui方法，
	"json":"Carousel_y1234Structure_json"		//默认数据
}

var Carousel_y1234Structure_json = {
	"componentType":"Carousel_y1234",
	"code":"",
	"title":"轮播组",
	"type":1,
	"margin":{
		"top":0,
		"bottom":0,
		"left":0,
		"right":0
	},
	"color":{
		"background":"#fff",
		"color":"#000"
	},
	"width_height":{
		"width":400,
		"height":120,
	},
	"fontSize":20,
	"imgthis":0,
	"img_arr":[
		{
		"imgurl":"https://gw.alicdn.com/bao/uploaded/i1/725677994/O1CN01n4SRoc28vIm75wP4r_!!0-item_pic.jpg",
		"name":"名称",
		"xcxurl":"",
		"appurl":"",
		},
		{
		"imgurl":"https://gw.alicdn.com/bao/uploaded/i1/725677994/O1CN01n4SRoc28vIm75wP4r_!!0-item_pic.jpg",
		"name":"名称",
		"xcxurl":"",
		"appurl":"",
		},
		{
		"imgurl":"https://gw.alicdn.com/bao/uploaded/i1/725677994/O1CN01n4SRoc28vIm75wP4r_!!0-item_pic.jpg",
		"name":"名称",
		"xcxurl":"",
		"appurl":"",
		},
	]
}
var Carousel_y1234Structure_img_arr = {"imgurl":"https://gw.alicdn.com/bao/uploaded/i1/725677994/O1CN01n4SRoc28vIm75wP4r_!!0-item_pic.jpg"
		}
		
var Carousel_y1234HTMLLeft = 	'<div class="left-1 Carousel_y1234_left">'+
									'<div class="Carousel_y1234_ditu">'+
										'<i class="layui-icon layui-icon-picture Carousel_y1234_tubiao"></i>'+
										'<p class="Carousel_y1234_biaotilan">轮播组</p>'+
									'</div>'+
									'<div class="Carousel_y1234_ditu draggable" data-component_type="Carousel_y1234">'+
										'<i class="layui-icon layui-icon-picture Carousel_y1234_tubiao"></i>'+
										'<p class="Carousel_y1234_biaotilan">轮播组</p>'+
									'</div>'+
								'</div>';
						
var Carousel_y1234HTML = 	'<div class="Carousel_y1234_middle">'+
								'<div class="layui-carousel Carousel_y1234_carousel">'+
								  '<div carousel-item class="Carousel_y1234_carousel_item">'+
								    '<div class="Carousel_y1234_imgfind Carousel_y1234_imgfind-0 layui-col-xs3">'+
										'<div class="Carousel_y1234_imgthis">'+
											'<img src="https://gw.alicdn.com/bao/uploaded/i1/725677994/O1CN01n4SRoc28vIm75wP4r_!!0-item_pic.jpg"/>'+
										'</div>'+
										'<p class="Carousel_y1234_img_name">名字</p>'+
									'</div>'+
								    '<div class="Carousel_y1234_imgfind Carousel_y1234_imgfind-0 layui-col-xs3">'+
								    	'<div class="Carousel_y1234_imgthis">'+
								    		'<img src="https://gw.alicdn.com/bao/uploaded/i1/725677994/O1CN01n4SRoc28vIm75wP4r_!!0-item_pic.jpg"/>'+
								    	'</div>'+
								    	'<p class="Carousel_y1234_img_name">名字</p>'+
								    '</div>'+
									'<div class="Carousel_y1234_imgfind Carousel_y1234_imgfind-0 layui-col-xs3">'+
										'<div class="Carousel_y1234_imgthis">'+
											'<img src="https://gw.alicdn.com/bao/uploaded/i1/725677994/O1CN01n4SRoc28vIm75wP4r_!!0-item_pic.jpg"/>'+
										'</div>'+
										'<p class="Carousel_y1234_img_name">名字</p>'+
									'</div>'+
								  '</div>'+
								'</div> '+
							'</div>';
							
var Carousel_y1234HTML1 =	'<div class="Carousel_y1234_imgfind Carousel_y1234_imgfind-0 layui-col-xs3">'+
								'<div class="Carousel_y1234_imgthis">'+
									'<img src="https://gw.alicdn.com/bao/uploaded/i1/725677994/O1CN01n4SRoc28vIm75wP4r_!!0-item_pic.jpg"/>'+
								'</div>'+
								'<p class="Carousel_y1234_img_name">名字</p>'+
							'</div>';
							

var Carousel_y1234HTMLStructureimg_a54sa41 = '<div class="layui-input-block imgup">'+
												'<button type="button" class="layui-btn ID-upload-demo-btn">'+
												  '<i class="layui-icon layui-icon-upload"></i> 单图片上传'+
												'</button>'+
												'<div class="Carousel_y1234_icon_img_div">'+
													'<button type="button" class="Carousel_y1234_icon_img Carousel_y1234_icon_img_up layui-btn layui-btn-primary layui-btn-sm" data-hover-text="上移">'+
														'<i class="layui-icon layui-icon-up"></i>'+
													'</button>'+
													'<button type="button" class="Carousel_y1234_icon_img Carousel_y1234_icon_img_down layui-btn layui-btn-primary layui-btn-sm" data-hover-text="下移">'+
													   ' <i class="layui-icon layui-icon-down"></i>'+
													'</button>'+
													'<button type="button" class="Carousel_y1234_icon_img Carousel_y1234_icon_img_delete layui-btn layui-btn-primary layui-btn-sm" data-hover-text="删除">'+
														'<i class="layui-icon layui-icon-delete"></i>'+
													'</button>'+
												'</div>'+
												'<div style="width: 132px;">'+
												  '<div class="layui-upload-list">'+
													'<img class="layui-upload-img ID-upload-demo-img" style="width: 100%; height: 92px;">'+
													'<div class="ID-upload-demo-text"></div>'+
												  '</div>'+
												  '<div class="layui-progress layui-progress-big" lay-showPercent="yes" lay-filter="filter-demo">'+
													'<div class="layui-progress-bar" lay-percent=""></div>'+
												  '</div>'+
												'</div>'+
												'<div class="bianju">名字</div>'+
												'<input type="text" name="name" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input Carousel_y1234_title_input name" data-type="name">'+
												'<div class="bianju">跳转链接（小程序）</div>'+
												'<input type="text" name="xcxurl" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input Carousel_y1234_title_input xcxurl" data-type="xcxurl">'+
												'<div class="bianju">跳转链接（APP）</div>'+
												'<input type="text" name="appurl" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input Carousel_y1234_title_input appurl" data-type="appurl">'+
											'</div>';
											
var Carousel_y1234HTMLStructure = 	'<div class="Carousel_y1234">'+
										
										'<div class="layui-form-item">'+
											'<label class="layui-form-label">图片</label>'+
											'<div class="add_img">(0/5)</div>'+
										'</div>'+
										'<div class="layui-form-item">'+
											'<label class="layui-form-label">图片边距</label>'+
											'<div class="layui-input-block">'+
												'<div class="bianju slider_img_bianju"></div>'+
												'<div class="ID-slider-demo-setTips-img_bianju"></div>'+
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