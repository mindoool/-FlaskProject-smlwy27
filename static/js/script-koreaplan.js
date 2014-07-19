$(document).ready(function(){
	$('body').scrollspy({ target: '.navbar-example' });
	$('.content').hide();
	$('#readers').hover(function(){
		$('#readers').css("background-color","#ffcc00");
		$('#cont1').show();
		$('#explanation').hide();
	},function(){
		$('#readers').css("background-color","#b870b8");
		$('#cont1').hide();
		$('#explanation').show();
	});
	$('#beingndoing').hover(function(){
		$('#beingndoing').css("background-color","#ffcc00");
		$('#cont2').show();
		$('#explanation').hide();
	},function(){
		$('#beingndoing').css("background-color","#8AE68A");
		$('#cont2').hide();
		$('#explanation').show();
	});
	$('#study').hover(function(){
		$('#study').css("background-color","#ffcc00");
		$('#cont3').show();
		$('#explanation').hide();
	},function(){
		$('#study').css("background-color","#6699ff");
		$('#cont3').hide();
		$('#explanation').show();
	});
	$('#c1').click(function(){
		$('#cont1').toggle();	
		$('#cont2').hide();
		$('#cont3').hide();
	});
	$('#cont1').click(function(){
		$('#cont1').hide();
	});
	$('#c2').click(function(){
		$('#cont2').toggle();
		$('#cont1').hide();
		$('#cont3').hide();	
	});
	$('#cont2').click(function(){
		$('#cont2').hide();
	});
	$('#c3').click(function(){
		$('#cont3').toggle();
		$('#cont1').hide();
		$('#cont2').hide();	
	});
	$('#cont3').click(function(){
		$('#cont3').hide();
	});


	$('#b1').hover(function(){
		$('#b1').attr("src","https://dl.dropboxusercontent.com/u/24247548/img/book1.png");
	}, function(){
		$('#b1').attr("src","http://tv02.search.naver.net/ugc?t=252x448&q=http://blogfiles.naver.net/20120719_55/seolae929_1342693553334Gc4S3_JPEG/0.jpg")
	}
	);
	
	$('#b2').hover(function(){
		$('#b2').attr("src","https://dl.dropboxusercontent.com/u/24247548/img/book2.png");
	}, 
	function(){
		$('#b2').attr("src","http://tv01.search.naver.net/ugc?t=252x448&q=http://imgnews.naver.com/image/028/2009/08/14/6000291633_20090815.JPG")
	});
	
	$('#b3').hover(function(){
		$('#b3').attr("src","https://dl.dropboxusercontent.com/u/24247548/img/book3.png");
	}, 
	function(){
		$('#b3').attr("src","http://tv02.search.naver.net/ugc?t=252x448&q=http://blogfiles.naver.net/20110417_264/fydwjddbrwja_1303029930503WNX6g_JPEG/%BD%BA%C4%B5130.jpg")
	});
	

	$('#button1').click(function(){
		var toAdd1 = $('input[name=checkListItem1]').val();
		$('#list1').append("<div class='item'>"+toAdd1+"</div>");
	});
	$(document).on('click','.item', function(){
		$(this).remove();
	});

	$('#button2').click(function(){
		var toAdd2 = $('input[name=checkListItem2]').val();
		$('#list2').append("<div class='item'>"+toAdd2+"</div>");
	});
	$(document).on('click','.item', function(){
		$(this).remove();
	});

	$('#button3').click(function(){
		var toAdd3 = $('input[name=checkListItem3]').val();
		$('#list3').append("<div class='item'>"+toAdd3+"</div>");
	});
	$(document).on('click','.item', function(){
		$(this).remove();
	});
	$('#myModal').modal('hide');
});