$(document).ready(function() {
	 // Modal close button JS starts
      $(".modal-close-btn").click(function() {
        $('#login-modal').removeClass('active');
        $('body').removeClass('overflow-hidden');
        $('.bg-blur').removeClass('active');
      });
	
});

 // login modal JS starts
    window.onload = function(){
      $('#login-modal').addClass('active');
      $('body').addClass('overflow-hidden');
      $('.bg-blur').addClass('active');
    };