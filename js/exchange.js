(function($){
	$.Url = function(sn_code){
		var reg = new RegExp("(^|&)" + sn_code + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r != null){
			return unescape(r[2]);
		}else{
			return null;
		}
	}
})(jQuery);

var sn = $.Url("sn");

$(function(){
	StoreGetInfo();
});

function StoreGetInfo(){
	var request_get = $.ajax({
		url:'func.php',
		type:'POST',
		data:{func:'StoreGetInfo', sn:sn},
		dataType:'json'
	});
	request_get.done(function(data){
		if(data.OK == 0){
			if(data.status == 2){
				alert("查無此人");
			}
				if(data.status == 3){
				alert("已兌換");
			}
				if(data.status == 4){
				// window.location = "https://www.shiseido-event.com/2017bioperformance/expired.html"
				window.location = "https://www.shiseido-event.com/2017bioperformance/expired.html"
			}
		}
			if(data.OK == 1){
			$('.change-name-title').append('<span>' + data.info.name + '</span>');
			$('.change-phone-title').append('<span>' + data.info.mobile + '</span>');
			$('.change-shop-title').append('<span>' + data.info.city + '</span></br>');
			$('.change-shop-title').append('<span style="margin-left:27px">' + data.info.store + '</span>');
		}
	});
}

$('.change-btn').click(function(){
	StoreSubmit();
});

function StoreSubmit(){
	var request_store = $.ajax({
		url:'func.php',
		type:'POST',
		data:{func:'StoreSubmit', sn:sn},
		dataType:'json'
	});
	request_store.done(function(data){
		if(data.OK == 0){
			if(data.status == 2){
				alert("查無此人");
			}
				if(data.status == 3){
				alert("已兌換過!");
			}
				if(data.status == 4){					
				// window.location='https://www.shiseido-event.com/2017bioperformance/expired.html';
				window.location = "https://www.shiseido-event.com/2017bioperformance/expired.html"
			}
		}
			if(data.OK == 1){
			alert("兌換成功!");
			$('.change-btn').hide();
			$('.change-ok-btn').show();
		}
	});
}