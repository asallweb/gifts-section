$(document).ready(function () {
	$('.gift__popup .toggle-gift__section').click(function(){
		$(this).parent().find('.gift__section').slideToggle();
	});
	$('.gift__popup .gift__section .head button').click(function(){
		$(this).parent().parent().slideToggle();
	});
});
