/*自己写的JS*/
$(function(){
	// 获取屏幕宽度
	function resize() {
		var windowWidth = $(window).width();

	// 判断屏幕大小
 	var isSmallScreen = windowWidth < 768;
	// 根据大小，设置轮播图背景
	
	$("#main_lunbo > .carousel-inner > .item").each(function(i,item) {
		var $item = $(item);//因为拿到的是DOM对象，因此要转换成本函数的设置数据
		
		var imgSrc =
		isSmallScreen ? $item.data("image-xs") : $item.data("image-lg");
	// jQuery方式
      // $element.data()
      // 是一个函数 ，专门用于取元素上的自定义属性（data-abc）
      // 函数的参数是我们要取得属性名称（abc）
      //
      // $element.attr('data-abc')
      //
      // JS中的写法
      // element.dataset['abc']
      //
      // element.getAttribute('data-abc')
      // element.setAttribute('data-abc','')
		
		$item.css("backgroundImage","url('" + imgSrc + "')" );
		
		// 因为我们需要小图时 尺寸等比例变化，所以小图时我们使用img方式
      if (isSmallScreen) {
      	console.log ("123");
        $item.html('<img src="' + imgSrc + '" alt="" />');
        
      } else {
        $item.empty();
        
      }	
		
	});
	}
	$(window).on('resize',resize);
	//让window对象立即触发一下resize
	$(window).trigger('resize');
	// 初始化tooltips插件，这样小标题就能看见了
  	$('[data-toggle="tooltip"]').tooltip();
  	/* 控制标签页的容器宽度*/
  	var $ulContainer = $('.nav-tabs');
  	// 获取所有子元素的宽度和
  	var width = 40;/*因为UL上有padding-left=20像素的影响，因此它的宽度实际上是比css设置的小，所以要给其额外的加上30像素，才能保证所有的li在同一标签上*/
  	// 遍历所有的li子元素
  	// console.log($ulContainer.children());检查是否正确
  	$ulContainer.children().each(function(index,element) {
  		// console.log(element.clientWidth);这是js方式
  		// console.log($(element).width());这是JQ方式
  		width += element.clientWidth;
  	})
	// 此时设置ul的宽度为li子元素总和的宽度
	// 并且判断当前UL的宽度是否超出屏幕，如果超出，则显示滚动条，如果不超出，就影藏
	if(width > $(window).width()){

	$ulContainer
	.css('width',width)
	.parent().css('overflow-x','scroll');
	}

	// 列表新闻下的A标签点击注册事件
	var $newtitle = $('.new-title');//设置一个全局变量
	$('#main_liebiao .nav-pills a').on('click',function(){
		//获取当前元素
		var $qiehuan = $(this);
		//获取对应元素的title值
		var title = $qiehuan.data('title');
		//将dqys的title设置到相应的位置
		$newtitle.text(title);
	});
})
