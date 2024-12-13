//必须引用layui.js文件，在html页面			
function TitleBar_y1234HTMLStructure_layui(code){
	var Structure_json = TitleBar_y1234Structure_json		//默认数据
	var json_data7894 = jsondata_list()
	$(".right-0-1").text(Structure_json.title);	//修改标题
	
	var TitleBar_y1234json = [];
	if(json_data7894[code]){
		TitleBar_y1234json = json_data7894[code]
	}else{
		TitleBar_y1234json = Structure_json
	}
	
	layui.use(['form', 'laydate', 'util'], function(){
		if(1){		//为了能改代码的时候好折叠。加个if
			var form = layui.form;
			var slider = layui.slider;				//设置滑块组件
			var colorpicker = layui.colorpicker;	//设置颜色组件
			var $ = layui.$;
			var slider_top = slider.render({
			    elem: '.ID-slider-demo-setTips-bianju_top',
			    tips: true, // 开启提示文本
				value:0,	//设置初始值
			    tipsAlways: true ,// 开启始终显示提示文本
				change: function(value){
					$(".bianju_top").text("上 "+value+" px")
					$("."+code).css({
						"margin-top":value+"px"
					})
					TitleBar_y1234json.margin.top = value
					componentTypeStructure_edit(code,TitleBar_y1234json);
				}
			});
			var slider_bottom = slider.render({
			    elem: '.ID-slider-demo-setTips-bianju_bottom',
			    tips: true, // 开启提示文本
				value:0,	//设置初始值
			    tipsAlways: true ,// 开启始终显示提示文本
				change: function(value){
					$(".bianju_bottom").text("下 "+value+" px")
					$("."+code).css({
						"margin-bottom":value+"px"
					})
					TitleBar_y1234json.margin.bottom = value
					componentTypeStructure_edit(code,TitleBar_y1234json);
				}
			});
			var slider_left = slider.render({
			    elem: '.ID-slider-demo-setTips-bianju_left',
			    tips: true, // 开启提示文本
				value:0,	//设置初始值
			    tipsAlways: true ,// 开启始终显示提示文本
				change: function(value){
					$(".bianju_left").text("左 "+value+" px")
					$("."+code).css({
						"margin-left":value+"px"
					})
					TitleBar_y1234json.margin.left = value
					componentTypeStructure_edit(code,TitleBar_y1234json);
				}
			});
			var slider_right = slider.render({
			    elem: '.ID-slider-demo-setTips-bianju_right',
			    tips: true, // 开启提示文本
				value:0,	//设置初始值
			    tipsAlways: true ,// 开启始终显示提示文本
				change: function(value){
					$(".bianju_right").text("右 "+value+" px")
					$("."+code).css({
						"margin-right":value+"px"
					})
					TitleBar_y1234json.margin.right = value
					componentTypeStructure_edit(code,TitleBar_y1234json);
				}
			});
			var slider_kuan = slider.render({
			    elem: '.ID-slider-demo-setTips-kuan',
			    tips: true, // 开启提示文本
				value:0,	//设置初始值
				max:400,
			    tipsAlways: true ,// 开启始终显示提示文本
				change: function(value){
					$(".slider_kuan").text("宽 "+value+" px")
					$("."+code).css({
						"width":value+"px"
					})
					TitleBar_y1234json.width_height.width = value
					componentTypeStructure_edit(code,TitleBar_y1234json);
				}
			});
			var slider_gao = slider.render({
			    elem: '.ID-slider-demo-setTips-gao',
			    tips: true, // 开启提示文本
				value:0,	//设置初始值
				max:400,
			    tipsAlways: true ,// 开启始终显示提示文本
				change: function(value){
					$(".slider_gao").text("高 "+value+" px")
					$("."+code).css({
						"height":value+"px"
					})
					$("."+code+" .TitleBar_y1234_title").css({
						"line-height":value+"px"
					})
					TitleBar_y1234json.width_height.height = value
					componentTypeStructure_edit(code,TitleBar_y1234json);
				}
			});
			
			var slider_fontSize = slider.render({
			    elem: '.ID-slider-demo-setTips-fontSize',
			    tips: true, // 开启提示文本
				value:0,	//设置初始值
				max:400,
			    tipsAlways: true ,// 开启始终显示提示文本
				change: function(value){
					$(".slider_fontSize").text(" "+value+" px")
					$("."+code+" .TitleBar_y1234_title").css({
						"fontSize":value+"px"
					})
					TitleBar_y1234json.fontSize = value
					componentTypeStructure_edit(code,TitleBar_y1234json);
				}
			});
			
			//背景色渲染
			var background = colorpicker.render({
				elem: '.backgroundcolor' ,
				color:TitleBar_y1234json.color.background,
				done: function(color){
					$("."+code).css({
						"background":color
					})
					TitleBar_y1234json.color.background = color
					componentTypeStructure_edit(code,TitleBar_y1234json);
				}
			});
			//文字颜色渲染
			var textcolor = colorpicker.render({
				elem: '.textcolor' ,
				color:TitleBar_y1234json.color.color,
				done: function(color){
					$("."+code).css({
						"color":color
					})
					TitleBar_y1234json.color.color = color
					componentTypeStructure_edit(code,TitleBar_y1234json);
				}
			});
			//监听标题变动
			$('.right-3-1').off('input');		//取消重复监听
			$(".right-3-1").on("input",".TitleBar_y1234 .TitleBar_y1234_title_input",function(){
				var val = $(this).val()
				$("."+code+" .TitleBar_y1234_title").text(val)
				
				TitleBar_y1234json.title = val
				componentTypeStructure_edit(code,TitleBar_y1234json);
			})
			
			  // 提交事件
			form.on('submit(demo1)', function(data){
			  var field = data.field; // 获取表单字段值
			  // 显示填写结果，仅作演示用
			  layer.alert(JSON.stringify(field), {
				title: '当前填写的字段值'
			  });
			  console.log(Structure_json)
			  // 此处可执行 Ajax 等操作
			  // …
			  return false; // 阻止默认 form 跳转
			});
		
		}
		value_add()
		function value_add(){		//默认值设置
			
			slider_top.setValue(TitleBar_y1234json.margin.top);
			slider_bottom.setValue(TitleBar_y1234json.margin.bottom);
			slider_left.setValue(TitleBar_y1234json.margin.left);
			slider_right.setValue(TitleBar_y1234json.margin.right);
			slider_kuan.setValue(TitleBar_y1234json.width_height.width);
			slider_gao.setValue(TitleBar_y1234json.width_height.height);
			slider_fontSize.setValue(TitleBar_y1234json.fontSize);
			
			$("."+code+" .TitleBar_y1234_title").text(TitleBar_y1234json.title)
			$(".right-3-1 .TitleBar_y1234_title_input").val(TitleBar_y1234json.title)
		}
		
	})
	
}