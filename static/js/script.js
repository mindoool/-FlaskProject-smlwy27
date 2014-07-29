$(document).ready(function(){
	$('.content').hide();
	$('.hi').hover(function(){
		$(this).css("opacity","1");
	},function(){
		$(this).css("opacity","0.5");
	});

	$('#menu1').click(function(){
		$('.menu').css("color","black");
		$('.menu').css("background-color","white");
		$('.hi').css("opacity","0.5");
		$('#menu1').css("color","orange");
		$('#menu1').css("background-color","black");
		$('#me').css("opacity","1");
		$('.content').hide();
		$('#minseokkim').show();		
	});
	$('#me').click(function(){
		$('.menu').css("color","black");
		$('.menu').css("background-color","white");
		$('.hi').css("opacity","0.5");
		$('#menu1').css("color","orange");
		$('#menu1').css("background-color","black");
		$('#me').css("opacity","1");
		$('.content').hide();
		$('#minseokkim').show();
	});
	$('#minseokkim-close').click(function(){
		$('#minseokkim').hide();
		$('#menu1').css("color","black");
		$('#menu1').css("background-color","white");
		$('#me').css("opacity","0.5");
	});
	$('#menu2').click(function(){
		$('.menu').css("color","black");
		$('.menu').css("background-color","white");
		$('.hi').css("opacity","0.5");
		$('#menu2').css("color","orange");
		$('#menu2').css("background-color","black");
		$('#snu').css("opacity","1");
		$('.content').hide();	
		$('#education').show();
	});

	$('#snu').click(function(){
		$('.menu').css("color","black");
		$('.menu').css("background-color","white");
		$('.hi').css("opacity","0.5");
		$('#menu2').css("color","orange");
		$('#menu2').css("background-color","black");
		$('#snu').css("opacity","1");
		$('.content').hide();	
		$('#education').show();
	});

	$('#education-close').click(function(){
		$('#education').hide();
		$('#menu2').css("color","black");
		$('#menu2').css("background-color","white");
		$('#snu').css("opacity","0.5");
	});
	
	$('#menu3').click(function(){
		$('.menu').css("color","black");
		$('.menu').css("background-color","white");
		$('.hi').css("opacity","0.5");
		$('#menu3').css("color","orange");
		$('#menu3').css("background-color","black");
		$('#com2us').css("opacity","1");
		$('.content').hide();	
		$('#careers').show();
	});

	$('#com2us').click(function(){
		$('.menu').css("color","black");
		$('.menu').css("background-color","white");
		$('.hi').css("opacity","0.5");
		$('#menu3').css("color","orange");
		$('#menu3').css("background-color","black");
		$('#com2us').css("opacity","1");
		$('.content').hide();	
		$('#careers').show();
	});


	$('#career-close').click(function(){
		$('#careers').hide();
		$('#menu3').css("color","black");
		$('#menu3').css("background-color","white");
		$('#com2us').css("opacity","0.5");
	});

	$('#menu4').click(function(){
		$('.menu').css("color","black");
		$('.menu').css("background-color","white");
		$('.hi').css("opacity","0.5");
		$('#menu4').css("color","orange");
		$('#menu4').css("background-color","black");
		$('#abouttime').css("opacity","1");
		$('.content').hide();	
		$('#likes').show();
	});

	$('#abouttime').click(function(){
		$('.menu').css("color","black");
		$('.menu').css("background-color","white");
		$('.hi').css("opacity","0.5");
		$('#menu4').css("color","orange");
		$('#menu4').css("background-color","black");
		$('#abouttime').css("opacity","1");
		$('.content').hide();	
		$('#likes').show();
	});


	$('#likes-close').click(function(){
		$('#likes').hide();
		$('#menu4').css("color","black");
		$('#menu4').css("background-color","white");
		$('#abouttime').css("opacity","0.5");
	});


	$('#menu5').click(function(){
		$('.menu').css("color","black");
		$('.menu').css("background-color","white");
		$('.hi').css("opacity","0.5");
		$('#menu5').css("color","orange");
		$('#menu5').css("background-color","black");
		$('#bnd').css("opacity","1");
		$('.content').hide();	
		$('#now').show();
	});

	$('#bnd').click(function(){
		$('.menu').css("color","black");
		$('.menu').css("background-color","white");
		$('.hi').css("opacity","0.5");
		$('#menu5').css("color","orange");
		$('#menu5').css("background-color","black");
		$('#bnd').css("opacity","1");
		$('.content').hide();	
		$('#now').show();
	});


	$('#now-close').click(function(){
		$('#now').hide();
		$('#menu5').css("color","black");
		$('#menu5').css("background-color","white");
		$('#bnd').css("opacity","0.5");
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



	$('#keyword_cont').on('keydown', function(e){
    	if(e.which==13) {
    		e.preventDefault();
			$('#search').click();
		}
  	});


  	// $('form').submit(function(){

  	// 	return false;
  	// });


	$('#search').click(function(){
		var keyword=$('#keyword_cont').val();
		$.ajax({
			url: '/twittersearch',
			type:'POST',
			data:{"keyword":keyword},
			success:function(response){
				$('#result').empty()
				var result = $.parseJSON(response);
				var content = "<table>"
				for(i=0;i<result.length;i++) {
					content +='<tr><td>'+result[i]['name']+'</td>'
					content +='<td>'+result[i]['text']+'</td></tr>'
				}
				content += "</table>"
				$('#result').append(content)
				console.log('success');
			},
			error: function(){
				console.log('error');
			},
			complete:function(){
				console.log('complete');
			}
		});
		$('#keyword_cont').val("");
	});
});