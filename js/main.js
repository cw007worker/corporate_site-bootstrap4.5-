$(document).ready(function() {
	// Burger Menu JS
	$(".fixed-sidebar").slideUp();
	$(".burger-menu").click(function() {
    toggleElements(0);
    // Sidebar JS
    // $(".fixed-sidebar").toggleClass("active");
    $(".fixed-sidebar").slideToggle();
    // Mobile Burger Menu JS
    $(".burger-menu").toggleClass("active");

    // Body JS
    $("body").toggleClass("overflow-hidden");
    // Blur JS
    // $(".bg-blur").toggleClass("active");
  });
  // Blur JS
  $(".bg-blur").click(function() {
  	// Blur JS
    $(this).removeClass("active");
  	// Sidebar JS
    $(".fixed-sidebar").removeClass("active");
    // Mobile Burger Menu JS
    $(".hamburger-menu").removeClass("active");
    // Body JS
    $("body").removeClass("overflow-hidden");
  })

  function toggleElements(num)
  {
    if(num != 0)
    {
        if($(".burger-menu").hasClass("active"))
        {
          $(".burger-menu").toggleClass("active");
          $(".fixed-sidebar").slideToggle();
           $("body").toggleClass("overflow-hidden");
        }
    }

    if(num != 1)
    {
      if($("#bookmark-box-1").hasClass("active"))
      $("#bookmark-box-1").toggleClass("active");
    }
    
    if(num != 2)
    {
      if($("#bookmark-box-2").hasClass("active"))
      $("#bookmark-box-2").toggleClass("active");
    }

    if(num != 3)
    {
      if($("#bookmark-box-3").hasClass("active"))
      $("#bookmark-box-3").toggleClass("active");
    }

    if(num != 4)
    {
      if($("#bookmark-box-4").hasClass("active"))
      $("#bookmark-box-4").toggleClass("active");
    }

    if(num != 5)
    {
      if($("#bookmark-box-5").hasClass("active"))
      $("#bookmark-box-5").toggleClass("active");
    }

    if(num != 6)
    {
      if($("#bookmark-box-6").hasClass("active"))
      $("#bookmark-box-6").toggleClass("active");
    }

    if(num != 7)
    {
      if($("#bookmark-box-7").hasClass("active"))
      $("#bookmark-box-7").toggleClass("active");
    }

    if(num != 8)
    {
      if($("#bookmark-box-8").hasClass("active"))
      $("#bookmark-box-8").toggleClass("active");
    }

    if(num != 9)
    {
      if($("#bookmark-box-9").hasClass("active"))
      $("#bookmark-box-9").toggleClass("active");
    }

  }

  // Bookmark-popup
  $("#bookmark-img-1").click(function(){

    toggleElements(1);
  	// bookmark box JS
    $("#bookmark-box-1").toggleClass("active");
    
  });	
  $("#bookmark-img-2").click(function(){
    toggleElements(2);
  	// bookmark box JS
    $("#bookmark-box-2").toggleClass("active");
  });
  $("#bookmark-img-3").click(function(){
    toggleElements(3);
  	// bookmark box JS
    $("#bookmark-box-3").toggleClass("active");
  });
  $("#bookmark-img-4").click(function(){
    toggleElements(4);
  	// bookmark box JS
    $("#bookmark-box-4").toggleClass("active");
  });
  $("#bookmark-img-5").click(function(){
    toggleElements(5);
  	// bookmark box JS
    $("#bookmark-box-5").toggleClass("active");
  });
  $("#bookmark-img-6").click(function(){
    toggleElements(6);
  	// bookmark box JS
    $("#bookmark-box-6").toggleClass("active");
  });
  $("#bookmark-img-7").click(function(){
    toggleElements(7);
  	// bookmark box JS
    $("#bookmark-box-7").toggleClass("active");
  });
  $("#bookmark-img-8").click(function(){
    toggleElements(8);
  	// bookmark box JS
    $("#bookmark-box-8").toggleClass("active");
  });
  $("#bookmark-img-9").click(function(){
    toggleElements(9);
  	// bookmark box JS
    $("#bookmark-box-9").toggleClass("active");
  });

})