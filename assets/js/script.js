$(document).ready(function(){
	$('.nav_icon').click(function(){
		$('.header_menu ul').slideToggle(1000);

		return false;
	})


	$('.header_menu ul li a').click(function(){
		$('html,body').animate({
			scrollTop:$($(this).attr('href')).offset().top
		},500)

		return false;
	})

})

$(window).scroll(function(){
	var value=$(this).scrollTop()

	if(value>200){
		$('.fixed').addClass('fixeds')
	}else{
		$('.fixed').removeClass('fixeds')
	}
})