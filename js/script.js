$(document).ready(function(){
    
        window.setTimeout(function () {
            // $(".banner .banner__author").animate({
            //     opacity: '1',
            // }, "slow");
            // $(".banner .banner__title").animate({
            //     opacity: '1',
            // }, "slow");
            // $(".banner .banner__paragraph").animate({
            //     opacity: '1',
            // }, "slow");
            // $(".banner .banner__link ").animate({
            //     opacity: '1',
            // }, "slow");
            $(".banner__content").children().each(function(i) {
                $(this).delay(300 * i).fadeIn(500);
            });
        }, 2000);

      $(document).on('click', function(event) {
        if (!$(event.target).closest('.navbar-nav').length) {
            $(".dropdown-menu").removeClass("shown");
            $(".dropdown-menu").slideUp(250);
            $(".dropright-menu").removeClass("shown");
            $(".dropright-menu").slideUp(150);
        }
      });

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
      $(".navbar-nav > .nav-item > a").on("click", function(){
        $(this).parents(".navbar-nav").children().children("a.active").removeClass("active");
        $(this).addClass("active");
    });

    $(".dropdown-menu > .nav-item > a").on("click", function(){
      $(this).parents(".navbar-nav").find(".dropdown > .dropdown-menu > .nav-item > a.active").removeClass("active");
      $(this).addClass("active");
  }); 

    $(".dropright-menu > .nav-item > a").on("click", function(){
      $(this).parents(".navbar-nav").find(".dropright-menu > .nav-item > a.active").removeClass("active");
      $(this).addClass("active");
      $(this).parent().parent().removeClass("shown");
      $(this).parent().parent().slideUp(250);

  });

// dropdown menu
  $(".dropdown > a").on("click", function(e){
    e.preventDefault();
  
    if($(this).next().hasClass("shown")) {
        $(this).next().removeClass("shown");
        $(this).next().slideUp(250);
    }
    else {

        $(this).parents(".navbar-nav").find(".dropdown-menu").removeClass("shown"); //remove all //remove all
        $(this).parents(".navbar-nav").find(".dropdown-menu").slideUp(250);
        $(this).next().toggleClass("shown");
        $(this).next().slideToggle(250);
    }
  });
  //   $(".navbar-nav > .nav-item.dropdown > a").click(function(){
  //       $(this).parents(".navbar-nav").find(".dropdown-menu").removeClass("show"); //remove all
  //       $(this).parent().find(".dropdown-menu").toggleClass("show");
  //   });

//   dropright menu
    $(".dropright > a").on("click", function(e){
      e.preventDefault();
    
      if($(this).next().hasClass("shown")) {
          $(this).next().removeClass("shown");
          $(this).next().slideUp(150);
      }
      else {
        $(this).parents(".dropdown-menu").find(".dropright-menu").removeClass("shown"); //remove all //remove all
        $(this).parents(".dropdown-menu").find(".dropright-menu").slideUp(150);
        $(this).next().toggleClass("shown");
        $(this).next().slideToggle(150);
      }
    });
  //   $(".navbar-nav > .nav-item.dropdown > ul.dropdown-menu > .nav-item.dropright > a").click(function(){
  //     $(this).parents(".dropdown-menu").find(".dropright-menu").removeClass("show");  
  //     $(this).parent().find(".dropright-menu").toggleClass("show");
  // });
  });