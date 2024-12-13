//必须引用layui.js文件，在html页面			
function NavigationBar_y1234HTMLStructure_layui(code){
	var Structure_json = NavigationBar_y1234Structure_json		//默认数据
	var json_data7894 = jsondata_list()
	$(".right-0-1").text(Structure_json.title);	//修改标题
	
	var NavigationBar_y1234json = [];
	if(json_data7894[code]){
		NavigationBar_y1234json = json_data7894[code]
	}else{
		NavigationBar_y1234json = Structure_json
	}
	
	layui.use(['form', 'laydate', 'util'], function(){
		if(1){		//为了能改代码的时候好折叠。加个if
			var form = layui.form;
			var slider = layui.slider;				//设置滑块组件
			var colorpicker = layui.colorpicker;	//设置颜色组件
			var util = layui.util;
			var upload = layui.upload;				//图片上传
			var element = layui.element;			
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
					NavigationBar_y1234json.margin.top = value
					componentTypeStructure_edit(code,NavigationBar_y1234json);
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
					NavigationBar_y1234json.margin.bottom = value
					componentTypeStructure_edit(code,NavigationBar_y1234json);
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
					NavigationBar_y1234json.margin.left = value
					componentTypeStructure_edit(code,NavigationBar_y1234json);
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
					NavigationBar_y1234json.margin.right = value
					componentTypeStructure_edit(code,NavigationBar_y1234json);
				}
			});
			
			//设置字体大小
			var slider_fontSize = slider.render({
			    elem: '.ID-slider-demo-setTips-fontSize',
			    tips: true, // 开启提示文本
				value:0,	//设置初始值
				max:400,
			    tipsAlways: true ,// 开启始终显示提示文本
				change: function(value){
					$(".slider_fontSize").text(" "+value+" px")
					$("."+code+" .NavigationBar_y1234_title").css({
						"fontSize":value+"px"
					})
					NavigationBar_y1234json.fontSize = value
					componentTypeStructure_edit(code,NavigationBar_y1234json);
				}
			});
			//设置内边距
			var slider_img_bianju = slider.render({
			    elem: '.ID-slider-demo-setTips-img_bianju',
			    tips: true, // 开启提示文本
				value:0,	//设置初始值
				max:30,
			    tipsAlways: true ,// 开启始终显示提示文本
				change: function(value){
					$(".slider_img_bianju").text("内边距 "+value+" px")
					$("."+code+" .NavigationBar_y1234_imgthis").css({
						"padding":value+"px "+value+"px 0px "+value+"px "
					})
					NavigationBar_y1234json.imgthis = value
					componentTypeStructure_edit(code,NavigationBar_y1234json);
				}
			});
			//设置左边距
			var slider_img_bianju_left = slider.render({
			    elem: '.ID-slider-demo-setTips-img_bianju_left',
			    tips: true, // 开启提示文本
				value:0,	//设置初始值
				max:30,
			    tipsAlways: true ,// 开启始终显示提示文本
				change: function(value){
					$(".slider_img_bianju_left").text("左边距 "+value+" px")
					$("."+code+" .NavigationBar_y1234_imgthis").css({
						"margin-left":value+"px"
					})
					NavigationBar_y1234json.imgthisLeft = value
					componentTypeStructure_edit(code,NavigationBar_y1234json);
				}
			});
			
			//背景色渲染
			var background = colorpicker.render({
				elem: '.backgroundcolor' ,
				color:NavigationBar_y1234json.color.background,
				done: function(color){
					$("."+code).css({
						"background":color
					})
					NavigationBar_y1234json.color.background = color
					componentTypeStructure_edit(code,NavigationBar_y1234json);
				}
			});
			//文字颜色渲染
			var textcolor = colorpicker.render({
				elem: '.textcolor' ,
				color:NavigationBar_y1234json.color.color,
				done: function(color){
					$("."+code).css({
						"color":color
					})
					NavigationBar_y1234json.color.color = color
					componentTypeStructure_edit(code,NavigationBar_y1234json);
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
					NavigationBar_y1234json.width_height.width = value
					componentTypeStructure_edit(code,NavigationBar_y1234json);
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
					NavigationBar_y1234json.width_height.height = value
					componentTypeStructure_edit(code,NavigationBar_y1234json);
				}
			});
			//监听标题变动
			$('.right-3-1').off('input');		//取消重复监听
			$(".right-3-1").on("input",".NavigationBar_y1234 .NavigationBar_y1234_title_input",function(){
				var type = $(this).data("type")
				var index = $(this).parent(".imgup").index()-1
				var val = $(this).val()
				switch (type){
					case "name":
						$("."+code).find(".NavigationBar_y1234_imgfind").eq(index).find(".NavigationBar_y1234_img_name").text(val)
						NavigationBar_y1234json.img_arr[index].name = val
						break;
					case "xcxurl":
						NavigationBar_y1234json.img_arr[index].xcxurl = val
						break;
					case "appurl":
						NavigationBar_y1234json.img_arr[index].appurl = val
						break;
					default:
						break;
				}
				componentTypeStructure_edit(code,NavigationBar_y1234json);
			})
			//监听点击
			$('.right-3-1').off('click');		//取消重复监听
			$(".right-3-1").on("click",".NavigationBar_y1234 .add_img",function(){
				if(NavigationBar_y1234json.img_arr.length>=5){
					return layer.msg('最多不能超过5个');
				}
				var html = NavigationBar_y1234HTMLStructureimg_a54sa41;
				$(".NavigationBar_y1234 .add_img").before(html)
				$(".NavigationBar_y1234 .add_img").prev().find(".layui-upload-img").attr('src',NavigationBar_y1234Structure_img_arr.imgurl)
				
				var html2 = NavigationBar_y1234HTML2;
				$("."+code).find(".NavigationBar_y1234_div").append(html2)
				slider_img_bianju.setValue(NavigationBar_y1234json.imgthis);
				slider_img_bianju_left.setValue(NavigationBar_y1234json.imgthisLeft);
				
				NavigationBar_y1234json.img_arr.push(NavigationBar_y1234Structure_img_arr)
				componentTypeStructure_edit(code,NavigationBar_y1234json);
				
				img_arr_length()
			})
			//上移
			$(".right-3-1").on("click",".NavigationBar_y1234 .icon_img_up",function(){
				var index = $(this).parents(".imgup").index()-1
				if(index==0){
					return layer.msg('已经在最前了');
				}
				var scrollTop = $(".right-3").scrollTop();
				$('.imgup').eq(index).insertBefore($('.imgup').eq(index-1));
				// $("."+code).find(".NavigationBar_y1234_imgfind").eq(index).insertBefore($("."+code).find(".NavigationBar_y1234_imgfind").eq(index-1));
				
				var c1 = NavigationBar_y1234json.img_arr[index-1]
				var c2 = NavigationBar_y1234json.img_arr[index]
				$("."+code).find(".NavigationBar_y1234_imgfind").eq(index).find(".NavigationBar_y1234_imgthis").find("img").attr('src', c1.imgurl)
				$("."+code).find(".NavigationBar_y1234_imgfind").eq(index).find(".NavigationBar_y1234_img_name").text(c1.name)
				
				$("."+code).find(".NavigationBar_y1234_imgfind").eq(index-1).find(".NavigationBar_y1234_imgthis").find("img").attr('src', c2.imgurl)
				$("."+code).find(".NavigationBar_y1234_imgfind").eq(index-1).find(".NavigationBar_y1234_img_name").text(c2.name)
				
				$(".right-3").scrollTop(scrollTop);
				var arr = NavigationBar_y1234json.img_arr[index]
				NavigationBar_y1234json.img_arr.splice(index-1, 0,arr);
				NavigationBar_y1234json.img_arr.splice(index+1, 1);
				componentTypeStructure_edit(code,NavigationBar_y1234json);
			})
			//下移
			$(".right-3-1").on("click",".NavigationBar_y1234 .icon_img_down",function(){
				var index = $(this).parents(".imgup").index()-1
				if(index==5){
					return layer.msg('已经在最后了');
				}
				var scrollTop = $(".right-3").scrollTop();
				$('.imgup').eq(index+1).insertBefore($('.imgup').eq(index));
				
				// $("."+code).find(".NavigationBar_y1234_imgfind").eq(index+1).insertBefore($("."+code).find(".NavigationBar_y1234_imgfind").eq(index));
				
				$(".right-3").scrollTop(scrollTop);
				var arr = NavigationBar_y1234json.img_arr[index]
				NavigationBar_y1234json.img_arr.splice(index, 1);
				NavigationBar_y1234json.img_arr.splice(index+1, 0,arr);
				
				var c1 = NavigationBar_y1234json.img_arr[index]
				var c2 = NavigationBar_y1234json.img_arr[index+1]
				$("."+code).find(".NavigationBar_y1234_imgfind").eq(index).find(".NavigationBar_y1234_imgthis").find("img").attr('src', c1.imgurl)
				$("."+code).find(".NavigationBar_y1234_imgfind").eq(index).find(".NavigationBar_y1234_img_name").text(c1.name)
				
				$("."+code).find(".NavigationBar_y1234_imgfind").eq(index+1).find(".NavigationBar_y1234_imgthis").find("img").attr('src', c2.imgurl)
				$("."+code).find(".NavigationBar_y1234_imgfind").eq(index+1).find(".NavigationBar_y1234_img_name").text(c2.name)
				
				componentTypeStructure_edit(code,NavigationBar_y1234json);
			})
			//删除
			$(".right-3-1").on("click",".NavigationBar_y1234 .icon_img_delete",function(){
				var index = $(this).parents(".imgup").index()-1
				if(NavigationBar_y1234json.img_arr.length==1){
					return layer.msg('至少保留一个');
				}
				var scrollTop = $(".right-3").scrollTop();
				$('.imgup').eq(index).remove();
				$("."+code).find(".NavigationBar_y1234_imgfind").eq(index).remove();
				
				$(".right-3").scrollTop(scrollTop);
				NavigationBar_y1234json.img_arr.splice(index, 1);
				componentTypeStructure_edit(code,NavigationBar_y1234json);
				img_arr_length()
			})
			// radio 事件
			form.on('radio(demo-radio-filter)', function(data){
			    var elem = data.elem; // 获得 radio 原始 DOM 对象
			    var checked = elem.checked; // 获得 radio 选中状态
			    var value = elem.value; // 获得 radio 值
			    var othis = data.othis; // 获得 radio 元素被替换后的 jQuery 对象
				console.log(code)
				var html = ""	
				value = parseInt(value)
				NavigationBar_y1234json.type = value
			    switch (value){
			    	case 1:		//横排列
						$("."+code).css({"display":"block"})
			    		break;
			    	default:
						$("."+code).css({"display":"none"})
						
			    		break;
			    }
				componentTypeStructure_edit(code,NavigationBar_y1234json);
			});
			//查找数据值写入元素内
			function img_arr_each(){
				$(".imgup").remove()
				$.each(NavigationBar_y1234json.img_arr,function(k,v){
					var html = NavigationBar_y1234HTMLStructureimg_a54sa41;
					$(".NavigationBar_y1234 .add_img").before(html)
					$(".NavigationBar_y1234 .add_img").prev().find(".layui-upload-img").attr('src', v.imgurl)
					$("."+code).find(".NavigationBar_y1234_imgfind").eq(k).find(".NavigationBar_y1234_imgthis").find("img").attr('src', v.imgurl)
					$(".NavigationBar_y1234 .add_img").prev().find(".name").val(v.name)
					$("."+code).find(".NavigationBar_y1234_imgfind").eq(k).find(".NavigationBar_y1234_img_name").text(v.name)
					$(".NavigationBar_y1234 .add_img").prev().find(".xcxurl").val(v.xcxurl)
					$(".NavigationBar_y1234 .add_img").prev().find(".appurl").val(v.appurl)
				})
				img_arr_length()
			}
			
			//根据还剩几个图片，处理放置区css图片宽度
			function img_arr_length(){
				if(NavigationBar_y1234json.type = 1){
					switch (NavigationBar_y1234json.img_arr.length){
						case 1:
							$("."+code).find(".NavigationBar_y1234_imgfind-0").css({"width":"100%"})
							break;
						case 2:
							$("."+code).find(".NavigationBar_y1234_imgfind-0").css({"width":"50%"})
							break;
						case 3:
							$("."+code).find(".NavigationBar_y1234_imgfind-0").css({"width":"33.3%"})
							break;
						case 4:
							$("."+code).find(".NavigationBar_y1234_imgfind-0").css({"width":"25%"})
							break;
						case 5:
							$("."+code).find(".NavigationBar_y1234_imgfind-0").css({"width":"20%"})
							break;
						default:
							break;
					}
				}
				
				$(".NavigationBar_y1234 .add_img").text("("+NavigationBar_y1234json.img_arr.length+"/5)")
			}
			
			function uploadimg(){
				// 单图片上传
				var uploadInst = upload.render({
					elem: '.NavigationBar_y1234_uploadimg',
					url: 'https://layui.dev/docs/2/upload/', // 实际使用时改成您自己的上传接口即可。
					before: function(obj){
						var imgpailie = $(this)[0].item.data("imgpailie")
						var that = $(this)[0].item.parent(".imgup").find(".NavigationBar_y1234_tupian"+imgpailie)
						var ind = $(this)[0].item.parent(".imgup").index()-1
						
						
					  // 预读本地文件示例，不支持ie8
					  obj.preview(function(index, file, result){
							//测试用，如果需要真正执行，请放到执行成功
							if(imgpailie==1){
								$("."+code).find(".NavigationBar_y1234_imgfind").eq(ind).find(".NavigationBar_y1234_imgthis").find("img").attr('src', result)
							}
							// NavigationBar_y1234json.img_arr[ind].imgurl = val
							// componentTypeStructure_edit(code,NavigationBar_y1234json);
							//测试用，如果需要真正执行，请放到执行成功
							
							that.find(".NavigationBar_y1234_img").attr('src', result); // 图片链接（base64）
					  });
					  
					  element.progress('filter-demo', '0%'); // 进度条复位
					  layer.msg('上传中', {icon: 16, time: 0});
					},
					done: function(res){
					  // 若上传失败
					  if(res.code > 0){
						return layer.msg('上传失败');
					  }
					  // 上传成功的一些操作
					  // …
					  
					  that.find(".NavigationBar_y1234_text").html(''); // 置空上传失败的状态
					},
					error: function(){
					  // 演示失败状态，并实现重传
					  var that = $(this)[0].item.next().next()
					  var demoText = that.find(".NavigationBar_y1234_text")
					  demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
					  demoText.find('.demo-reload').on('click', function(){
						uploadInst.upload();
					  });
					},
					// 进度条
					progress: function(n, elem, e){
					  element.progress('filter-demo', n + '%'); // 可配合 layui 进度条元素使用
					  
					  
					  if(n == 100){
						  //执行成功后，修改参数值
						  // if(imgpailie==1){
						  // 	$("."+code).find(".NavigationBar_y1234_imgfind").eq(ind).find(".NavigationBar_y1234_imgthis").find("img").attr('src', result)
						  // }
						  // NavigationBar_y1234json.img_arr[ind].imgurl = val
						  // componentTypeStructure_edit(code,NavigationBar_y1234json);
						  //执行成功后，修改参数值
						layer.msg('上传完毕', {icon: 1});
					  }
					}
				});
			}
			
						
			
			
			
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
			
			
			slider_top.setValue(NavigationBar_y1234json.margin.top);
			slider_bottom.setValue(NavigationBar_y1234json.margin.bottom);
			slider_left.setValue(NavigationBar_y1234json.margin.left);
			slider_right.setValue(NavigationBar_y1234json.margin.right);
			slider_fontSize.setValue(NavigationBar_y1234json.fontSize);
			slider_img_bianju.setValue(NavigationBar_y1234json.imgthis);
			slider_img_bianju_left.setValue(NavigationBar_y1234json.imgthisLeft);
			slider_kuan.setValue(NavigationBar_y1234json.width_height.width);
			slider_gao.setValue(NavigationBar_y1234json.width_height.height);
			
			$("."+code+" .NavigationBar_y1234_title").text(NavigationBar_y1234json.title)
			$(".right-3-1 .NavigationBar_y1234_title_input").val(NavigationBar_y1234json.title)
			$('.right-3-1 input[name="NavigationBar_y1234_radio"][value="'+NavigationBar_y1234json.type+'"]').prop('checked','checked');
			img_arr_each()	//查找数据值写入元素内
			uploadimg()		//加载上传的代码
			form.render();	//渲染整个表单
		}
		
	})
	
}