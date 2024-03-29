$(document).ready(function() {
	$('.my-pg-1-tab-listing > li > a').click(function(event){
		event.preventDefault(); // stop browser to take action for clicked anchor
		// get displaying tab content jQuery selector
		var active_tab_selector = $('.my-pg-1-tab-listing > li.active > a').attr('href');
		// find actived navigation and remove 'active' css
		var actived_nav = $('.my-pg-1-tab-listing > li.active');
		actived_nav.removeClass('active');
		$('active_tab_selector').addClass('hide');
		// add 'active' css into clicked navigation
		$(this).parents('li').addClass('active');
		// hide displaying tab content
		$(active_tab_selector).removeClass('active');
		$(active_tab_selector).addClass('hide');
		// show target tab content
		var target_tab_selector = $(this).attr('href');
		$(target_tab_selector).removeClass('hide');
		$(target_tab_selector).addClass('active');

		if($("#img1")[0].src.toString().endsWith("images/point-icon-black.png"))
		{
			$("#img1")[0].src = "images/point-icon-grey.png";
		}
		else 
		{
			$("#img1")[0].src = "images/point-icon-black.png";
		}

		if($("#img2")[0].src.toString().endsWith("images/settings-black.png"))
		{
			$("#img2")[0].src = "images/settings-grey.png";
		}
		else 
		{
			$("#img2")[0].src = "images/settings-black.png";
		}

		
	});
});