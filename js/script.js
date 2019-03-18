$(document).ready(function(){
     
      $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 0 ) {
            $('nav.navbar').addClass('fixed');
        } else {
            $('nav.navbar').removeClass('fixed');
        }
    });

    $(document).mouseup(function(e) 
    {
        var container = $(".dropdown-menu");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
        }
    });
      $(".navbar-nav > .nav-item.dropdown > a").on("click", function(){
        $(this).parent().parent().find(".nav-item > a.active").removeClass("active");
        $(this).addClass("active");
    });

    

    $(".navbar-nav > .nav-item.dropdown > .dropdown-menu > .nav-item > a").on("click", function(){
      $(this).parents(".navbar-nav").find(".dropdown > .dropdown-menu > .nav-item > a.active").removeClass("active");
      $(this).addClass("active");
  }); 

    $(".dropright-menu > .nav-item > a").on("click", function(){
      $(this).parents(".navbar-nav").find(".dropright-menu > .nav-item > a.active").removeClass("active");
      $(this).addClass("active");
  });

  $(".dropdown > a").on("click", function(e){
    e.preventDefault();
  
    if($(this).next().hasClass("show")) {
        $(this).next().removeClass("show");
    }
    else {
        $(this).parents(".navbar-nav").find(".dropdown-menu").removeClass("show"); //remove all //remove all
        $(this).parents(".navbar-nav").find(".dropdown-menu").slideUp(); // slide up all
        $(this).next().toggleClass("show");
    }
  });
  //   $(".navbar-nav > .nav-item.dropdown > a").click(function(){
  //       $(this).parents(".navbar-nav").find(".dropdown-menu").removeClass("show"); //remove all
  //       $(this).parent().find(".dropdown-menu").toggleClass("show");
  //   });

    $(".dropright > a").on("click", function(e){
      e.preventDefault();
    
      if($(this).next().hasClass("show")) {
          $(this).next().removeClass("show");
      }
      else {
        $(this).parents(".dropdown-menu").find(".dropright-menu").removeClass("show"); //remove all //remove all
        $(this).parents(".dropdown-menu").find(".dropright-menu").slideUp(); // slide up all
          $(this).next().toggleClass("show");
      }
    });
  //   $(".navbar-nav > .nav-item.dropdown > ul.dropdown-menu > .nav-item.dropright > a").click(function(){
  //     $(this).parents(".dropdown-menu").find(".dropright-menu").removeClass("show");  
  //     $(this).parent().find(".dropright-menu").toggleClass("show");
  // });
  });