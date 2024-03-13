$(document).ready(function(){
	//index
	AOS.init({
		duration: 1000,
		delay:300,
	});
	var isMobileAnd = (navigator.userAgent.match(/android|iPhone|iPad/i) === null) ? false : true;
	if(isMobileAnd){
		if(detectLine() === true || isFacebookApp() === true){
			$('.mask').show();
			$('.mask').click(function(){
				$('.mask').hide();
			});
		}
	}

	$('.fb-btn').click(function(){
		window.open('https://www.facebook.com/Shiseidotokyo/');
	});
	$('.home-btn').click(function(){
		window.open('http://www.shiseido.com.tw/');
	});

	$('.menu').click(function(){
		$('.menu-bg').slideDown(800);
		$('.menu-bg').css('display','flex');
	});

	$('.close').click(function(){
		$('.menu-bg').slideUp(800);
	});

	$('.jolin').delay(500).fadeIn(800);
	$('.top-title').delay(1200).fadeIn(800);

	$('.exper-fb-btn').click(function(){
		$('html,body').animate({
			scrollTop:$('.info').offset().top
		},800);
	});

	$('.fb-share').click(function(){
		$('html,body').animate({
			scrollTop:$('.info').offset().top
		},800);
	});

	$('.blogger-1').click(function(){
		window.open('http://angelbibi.com/elixir/');
	});

	$('.blogger-2').click(function(){
		window.open('http://youwin721.pixnet.net/blog/post/65453251');
	});

	$('.m-blogger-1').click(function(){
		window.open('http://angelbibi.com/elixir/');
	});

	$('.m-blogger-2').click(function(){
		window.open('http://youwin721.pixnet.net/blog/post/65453251');
	});

	$('.exper-fixed').click(function(){
		$('html,body').animate({
			scrollTop:$('.info').offset().top
		},800);
	});

	$(window).scroll(function(){
		if($('.exper-fixed').offset().top > $('.info').offset().top){
			$('.exper-fixed').stop().fadeOut('fast');
		}else{
			$('.exper-fixed').fadeIn();
		}
	});

	$('.link-top').click(function(e){
		e.preventDefault();
		$('html,body').animate({
			scrollTop:$('.top').offset().top
		},800);
		$('.menu-bg').slideUp(800);
	});

	$('.link-exper').click(function(e){
		e.preventDefault();
		$('html,body').animate({
			scrollTop:$('.exper').offset().top
		},800);
		$('.menu-bg').slideUp(800);
	});

	$('.link-blog').click(function(e){
		e.preventDefault();
		$('html,body').animate({
			scrollTop:$('.blog').offset().top
		},800);
		$('.menu-bg').slideUp(800);
	});

	$('.link-prod').click(function(e){
		e.preventDefault();
		$('html,body').animate({
			scrollTop:$('.prod').offset().top
		},800);
		$('.menu-bg').slideUp(800);
	});

	$('.link-yt').click(function(e){
		e.preventDefault();
		$('html,body').animate({
			scrollTop:$('.yt').offset().top
		},800);
		$('.menu-bg').slideUp(800);
	});

	$('.link-info').click(function(e){
		e.preventDefault();
		$('html,body').animate({
			scrollTop:$('.info').offset().top
		},800);
		$('.menu-bg').slideUp(800);
	});


	$('.back-btn').click(function(){
		$('.show-info').remove();
		$('.done-title,.done-info,.done-check,.done-btn').fadeOut(200);
		$('.info-words,.input,.agree,.info-btn').fadeIn(300);
		
	});

	if($(window).width() <= 960){
		$('.top-fixed').css('display','block');
		$(window).bind('scroll resize',function(){
			var $this = $(this);
			var $this_top = $this.scrollTop();

			if($this_top < 100){
				$('.top-fixed').stop().animate({top:'-70px'});
			}

			if($this_top > 100){
				$('.top-fixed').stop().animate({top:'0px'});
			}
		}).scroll();
	}

	var age = 0;

	$('.ages').change(function(){
		age = parseInt($(this).find(':selected').val());
	});

	$('.exper-btn').click(function(){
		if(parseInt($('.ages').find(':selected').val()) == 0){
			alert("請選擇你的出生西元年");
		}else{

			if($(window).width() <= 960){
				$('.exper-white').css({
					'transform-style':'preserve-3d',
					'transform':'rotateY(180deg)',
					'background':'url(./img/m_exper_test.png) center center no-repeat',
					'background-size':'cover'
				});
			}else{
				$('.exper-white').css({
					'transform-style':'preserve-3d',
					'transform':'rotateY(180deg)',
					'background':'url(./img/exper_test.png) center center no-repeat'
				});
			}
			
			$('.exper-title,.exper-word,.age,.exper-btn').css({
				'transition':'1s',
				'transform-style':'preserve-3d',
				'transform':'rotateY(180deg)'
			}).fadeOut(200);
			$('.exper-fb-title,.exper-fb-word,.fb-share,.exper-fb-btn').css({
				'transform':'rotateY(0deg)'
			}).delay(500).fadeIn(600);

			if(age >= 10 && age <= 29){
				var img = Math.floor((Math.random() * 5) + 1);
				$('.exper-fb-title img').attr('src', 'img/gt1-' + img + '.png');
			}else if(age >= 30 && age <= 49){
				var img = Math.floor((Math.random() * 7) + 1);
				$('.exper-fb-title img').attr('src', 'img/gt2-' + img + '.png');
			}else if(age >= 50){
				var img = Math.floor((Math.random() * 4) + 1);
				$('.exper-fb-title img').attr('src', 'img/gt3-' + img + '.png');
			}

			var path = $('.exper-fb-title img').attr('src');
			var w_width = 500;
			var w_height = 500;
			var x = (screen.width - w_width) / 2;
			var y = (screen.height - w_height) / 2;
			var xy = 'width='+w_width+',height='+w_height+',top='+y+',left='+x;

			if(path == "img/gt1-1.png"){
				$('.exper-fb-word img').attr('src', 'img/gw1-1.png');
				$('.fb-share a').attr('href','javascript:void(window.open("https://www.facebook.com/sharer/sharer.php?u=http://www.catchd.net/elixir_test/result1-1.html","_blank",config="'+ xy +'"))');
			}else if(path == "img/gt1-2.png"){
				$('.exper-fb-word img').attr('src', 'img/gw1-2.png');
				$('.fb-share a').attr('href','javascript:void(window.open("https://www.facebook.com/sharer/sharer.php?u=http://www.catchd.net/elixir_test/result1-2.html","_blank",config="'+ xy +'"))');
			}else if(path == "img/gt1-3.png"){
				$('.exper-fb-word img').attr('src', 'img/gw1-3.png');
				$('.fb-share a').attr('href','javascript:void(window.open("https://www.facebook.com/sharer/sharer.php?u=http://www.catchd.net/elixir_test/result1-3.html","_blank",config="'+ xy +'"))');
			}else if(path == "img/gt1-4.png"){
				$('.exper-fb-word img').attr('src', 'img/gw1-4.png');
				$('.fb-share a').attr('href','javascript:void(window.open("https://www.facebook.com/sharer/sharer.php?u=http://www.catchd.net/elixir_test/result1-4.html","_blank",config="'+ xy +'"))');
			}else if(path == "img/gt1-5.png"){
				$('.exper-fb-word img').attr('src', 'img/gw1-5.png');
				$('.fb-share a').attr('href','javascript:void(window.open("https://www.facebook.com/sharer/sharer.php?u=http://www.catchd.net/elixir_test/result1-5.html","_blank",config="'+ xy +'"))');
			}else if(path == "img/gt2-1.png"){
				$('.exper-fb-word img').attr('src', 'img/gw2-1.png');
				$('.fb-share a').attr('href','javascript:void(window.open("https://www.facebook.com/sharer/sharer.php?u=http://www.catchd.net/elixir_test/result2-1.html","_blank",config="'+ xy +'"))');
			}else if(path == "img/gt2-2.png"){
				$('.exper-fb-word img').attr('src', 'img/gw2-2.png');
				$('.fb-share a').attr('href','javascript:void(window.open("https://www.facebook.com/sharer/sharer.php?u=http://www.catchd.net/elixir_test/result2-2.html","_blank",config="'+ xy +'"))');
			}else if(path == "img/gt2-3.png"){
				$('.exper-fb-word img').attr('src', 'img/gw2-3.png');
				$('.fb-share a').attr('href','javascript:void(window.open("https://www.facebook.com/sharer/sharer.php?u=http://www.catchd.net/elixir_test/result2-3.html","_blank",config="'+ xy +'"))');
			}else if(path == "img/gt2-4.png"){
				$('.exper-fb-word img').attr('src', 'img/gw2-4.png');
				$('.fb-share a').attr('href','javascript:void(window.open("https://www.facebook.com/sharer/sharer.php?u=http://www.catchd.net/elixir_test/result2-4.html","_blank",config="'+ xy +'"))');
			}else if(path == "img/gt2-5.png"){
				$('.exper-fb-word img').attr('src', 'img/gw2-5.png');
				$('.fb-share a').attr('href','javascript:void(window.open("https://www.facebook.com/sharer/sharer.php?u=http://www.catchd.net/elixir_test/result2-5.html","_blank",config="'+ xy +'"))');
			}else if(path == "img/gt2-6.png"){
				$('.exper-fb-word img').attr('src', 'img/gw2-6.png');
				$('.fb-share a').attr('href','javascript:void(window.open("https://www.facebook.com/sharer/sharer.php?u=http://www.catchd.net/elixir_test/result2-6.html","_blank",config="'+ xy +'"))');
			}else if(path == "img/gt2-7.png"){
				$('.exper-fb-word img').attr('src', 'img/gw2-7.png');
				$('.fb-share a').attr('href','javascript:void(window.open("https://www.facebook.com/sharer/sharer.php?u=http://www.catchd.net/elixir_test/result2-7.html","_blank",config="'+ xy +'"))');
			}else if(path == "img/gt3-1.png"){
				$('.exper-fb-word img').attr('src', 'img/gw3-1.png');
				$('.fb-share a').attr('href','javascript:void(window.open("https://www.facebook.com/sharer/sharer.php?u=http://www.catchd.net/elixir_test/result3-1.html","_blank",config="'+ xy +'"))');
			}else if(path == "img/gt3-2.png"){
				$('.exper-fb-word img').attr('src', 'img/gw3-2.png');
				$('.fb-share a').attr('href','javascript:void(window.open("https://www.facebook.com/sharer/sharer.php?u=http://www.catchd.net/elixir_test/result3-2.html","_blank",config="'+ xy +'"))');
			}else if(path == "img/gt3-3.png"){
				$('.exper-fb-word img').attr('src', 'img/gw3-3.png');
				$('.fb-share a').attr('href','javascript:void(window.open("https://www.facebook.com/sharer/sharer.php?u=http://www.catchd.net/elixir_test/result3-3.html","_blank",config="'+ xy +'"))');
			}else if(path == "img/gt3-4.png"){
				$('.exper-fb-word img').attr('src', 'img/gw3-4.png');
				$('.fb-share a').attr('href','javascript:void(window.open("https://www.facebook.com/sharer/sharer.php?u=http://www.catchd.net/elixir_test/result3-4.html","_blank",config="'+ xy +'"))');
			}
		}
	});

	// $('.info-btn').click(function(){
	// 	$('.done-check .name-title').append('<span class="show-info">' + $('#name').val() + '</span>');
	// 	$('.done-check .phone-title').append('<span class="show-info">' + $('#phone').val() + '</span>');
	// 	$('.done-check .shop-title').append('<span class="show-info show-select">' + $('.s-1 option').text() + '</span>');
	// 	$('.done-check .shop-title').append('<span class="show-info">' + $('.s-2 option').text() + '</span>');
	// 	$('.info-words, .input, .info-btn').fadeOut(200);
	// 	$('.done-title, .done-info, .done-check, .done-btn').fadeIn(300);
	// });

	//expired
	$('.expired-btn').click(function(){
		window.open('https://www.shiseido-event.com/2017bioperformance/index.html');
	});


	//userData

	var t_name,t_mobile,c_no,s_no,t_no,token;

	$(function(){
		CityStoreListByEvent();
	});

	function CityStoreListByEvent(){
		var request_list = $.ajax({
			url:'func.php',
			type:'POST',
			data:{func:'CityStoreListByEvent'},
			dataType:'json'
		});
		request_list.done(function(data){
			if(data.OK == 1){
				for(var i = 0; i<data.cityRows.length; i++){
					$('#city').append('<option value="' + data.cityRows[i].c_no + '">' + data.cityRows[i].c_name + '</option>');
				}
				for(var j = 0; j<data.storeRows.length; j++){
					$('#shop').append('<option value="' + data.storeRows[j].s_no + '" class="' + data.storeRows[j].c_no + '">' + data.storeRows[j].s_name + '</option>');
				}

				$('.info-btn').click(function(){
					checkData();
				});
				$('#shop').chained('#city');
			}

		});
	}

	function checkData(){
		var check_format = 1;
		var alertMsg = "";
		t_name = $.trim($('#name').val());
		t_mobile = $.trim($('#phone').val());
		c_no = $.trim($('#city').val());
		s_no = $.trim($('#shop').val());

		if(t_name.length == 0){
			alertMsg = checkAlertMsg(alertMsg);
			alertMsg = alertMsg + "- 姓名";
			check_format = 0;
		}else{
			if(!ValidateName(t_name)){
				if(t_name.length < 2){
					alertMsg = checkAlertMsg(alertMsg);
					alertMsg = alertMsg + "- 姓名長度不符合";
					check_format = 0;
				}
				if(!isNaN(t_name)){
					alertMsg = checkAlertMsg(alertMsg);
					alertMsg = alertMsg + "- 姓名不可含數字";
					check_format = 0;
				}
			}
		}

		var prefix_mobile = t_mobile.substr(0,2);
		var mobile_format = /^[0-9]{2,3}\-[0-9]{5,8}$/;

		if(t_mobile.length == 0){
			alertMsg = checkAlertMsg(alertMsg);
			alertMsg = alertMsg + "- 手機";
			check_format = 0;
		}else{
			if(prefix_mobile != '09' || t_mobile.length !=10 || mobile_format.test(t_mobile)){
				alertMsg = checkAlertMsg(alertMsg);
				alertMsg = alertMsg + "- 手機號碼有誤";
				check_format = 0;
			}
		}

		if(c_no == ''){
			alertMsg = checkAlertMsg(alertMsg);
			alertMsg = alertMsg + "- 城市";
			check_format = 0;
		}

		if(s_no == ''){
			alertMsg = checkAlertMsg(alertMsg);
			alertMsg = alertMsg + "- 櫃點";
			check_format = 0;
		}

		if(!$('.agree input').is(":checked")){
			alertMsg = checkAlertMsg(alertMsg);
			alertMsg = alertMsg + "- 請同意條款與注意事項";
			check_format = 0;
		}

		if(check_format == 1){
			$('.info-words,.input,.agree,.info-btn').fadeOut(200);
			$('.done-title,.done-info,.done-check,.done-btn').fadeIn(300);
			$('.done-check .name-title').append('<span class="show-info" style="color:#000;font-weight:normal">' + $('#name').val() + '</span>');
			$('.done-check .phone-title').append('<span class="show-info" style="color:#000;font-weight:normal">' + $('#phone').val() + '</span>');
			$('.done-check .shop-title-info').empty().append('<span class="show-select" style="color:#000;font-weight:normal">' + $('#city option:selected').text() + '</span></br>');
			$('.done-check .shop-title-info').append('<span class="show-shop" style="color:#000;font-weight:normal">' + $('#shop option:selected').text() + '</span>');

			$('.ok-btn').on('click',function(){
				SubmitForm();
			});
		}else{
			alert('請確認以下欄位:\r\n\r\n'+alertMsg+'\r\n\r\n');
			return false;
		}
	}

	function SubmitForm(){
		var request_sub = $.ajax({
			url:'func.php',
			type:'POST',
			data:{func:'SubmitForm', c_no:c_no, s_no:s_no, t_name:t_name, t_mobile:t_mobile},
			dataType:'json'
		});
		request_sub.done(function(data){
			var re_ok = parseInt(data.OK,10);

			if(re_ok == 0){
				if(data.status == 1){
					alert("有欄位未填");
				}

				if(data.status == 2){
					alert("欄位格式不符");
				}

				if(data.status == 3){
					alert("縣市跟櫃點對不起來");
				}

				if(data.status == 4){
					alert("己額滿");
				}

				if(data.status == 6){
					alert("己兌換");
				}

				if(data.status == 7){
					alert("不明錯誤");
				}
			}

			if(re_ok == 1){
				t_no = data.t_no;
				token = data.token;
				window.location = "https://www.shiseido-event.com/2017bioperformance/thank.html";
			}
		});
	}

	$('.resend-btn').click(function(){
		SentMms();
	});

	function SentMms(){
		var request_sent = $.ajax({
			url:'func.php',
			type:'POST',
			data:{func:'SentMms', c_no:c_no, s_no:s_no, t_no:t_no, token:token},
			dataType:'json'
		});
		request_sent.done(function(data){
			var re_ok = parseInt(data.OK,10);
			var re_status = parseInt(data.status,10);

			if(re_ok == 0){
				if(re_status == 3){
					alert(data.remain_time + "後可再次發送簡訊");
				}

				
				if(re_status == 6){
					alert("簡訊間隔時間未到");
				}
			}

			if(re_ok == 1){
				alert("簡訊已寄送");
			}
		});	
	}

	//=================================================
	function checkAlertMsg(msg){
		if(msg.length > 0){
			msg = msg+"\r\n";
		}
		return msg;
	}

	function ValidateName(num){
		var reg =/^[\u4e00-\u9fa5a-zA-Z]{2,20}$/;
		if(reg.test(num)){
			return (true);
		}else{
			return (false);
		}
	}

	function detectLine(){
	  var ua = navigator.userAgent || navigator.vendor || window.opera;
	  return (ua.indexOf("Line") > -1);
	}

	function isFacebookApp() {
	    var ua = navigator.userAgent || navigator.vendor || window.opera;
	    return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
	}
});