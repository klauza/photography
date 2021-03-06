﻿

  export const mainPageLoader = () => {

    // ===============================================================================
    // QUESTION MARK
    $(window).on('click', function(e){
        const backDiv = document.querySelectorAll('.backDiv')[0];
        
        if(e.target.closest('.question-svg')){
            $('.backDiv').toggleClass("show-backDiv");
            $(".question-svg").toggleClass("swap-q-mark-1");
            $(".question-svg").toggleClass("swap-q-mark-2");
        } else if(event.target != backDiv && event.target.parentNode != backDiv && event.target.parentNode.parentNode != backDiv){
                $('.backDiv').removeClass("show-backDiv");
                $('.question-svg').removeClass("swap-q-mark-2");
                $('.question-svg').addClass("swap-q-mark-1");
        }
    });


    // ===============================================================================
    // SHOWING MENU [PC]
if(window.innerWidth > 768){
  // reload page if width < 768
  $(window).resize(function() {
    if($(window).width() < 768)
      document.location.reload(true);
  });

    $('.section-content-title').css("display", "none");


    const showMenu = () => {
        $(".nav-dots").css({
            "transform":"translateX(0) translateY(-50%)"
        });
        $("#arrow").css("animation","arrow-anim-forward 0.5s ease forwards");
        $(".arrow-box").css("animation","arrow-box-forward 0.5s ease forwards");
        $("#arrow polygon").css({"fill":"#fff"});
    } 
       

    $("body").on("mousemove",function(event) {
        if (event.pageX < 100) {
            showMenu();
        }
    });
    showMenu();
    
    // ===============================================================================
    // HIDING MENU 
    const hideMenu = () => {
        $(".nav-dots").css({"transform":"translateX(-100px) translateY(-50%)"});
        $("#arrow").css("animation","arrow-anim-back 0.5s ease forwards");
        $(".arrow-box").css("animation","arrow-box-back 0.5s ease forwards");
        $("#arrow polygon").css({"fill":"rgba(255, 255, 255, 0.3)"});
    };

    $("#arrow").on('click', function(e){
        hideMenu();
    });
   
    $('*').scroll(function(){
        var scrollbarLocation = $(this).scrollTop();
            
        //console.log(scrollbarLocation)
        if (scrollbarLocation > 350){
            hideMenu();
        }
    });
    // ===============================================================================


    // Removing black screen on page load
    // const backgroundDel = () => {
    //     setTimeout(function(){
    //         var backG = document.getElementsByClassName('biegie')[0];
    //         backG.classList="";
    //         showMenu();
            
    //     }, 1000);
    // }
    
    // backgroundDel();
}



// SHOWING MENU [MOBILE]
if(window.innerWidth < 768){
  // reload page if width > 768
  $(window).resize(function() {
    if($(window).width() > 768)
      document.location.reload(true);
  });
    
    const mobileButton = $('.mobile-menu-open');


    mobileButton.on('click', function(){
        $('.nav-dots').css("display","flex");
        $(this).css("display","none");
        $('.mobile-backdrop').css("display","block");
    })

    $('.nav-dot').on('click', function() {
        $('.nav-dots').css("display","none");
        mobileButton.css("display","block");
        $('.mobile-backdrop').css("display","none");
    })
    $('.mobile-exit').on('click', function(){
        $('.nav-dots').css("display","none");
        mobileButton.css("display","block");
        $('.mobile-backdrop').css("display","none");
    })


}


    

    

  $('.page-slider').each(function() {
    var $slider =  $(this);
    console.log($slider);
    //var numberOfSlides = $slider.find('.panel').length;


    $slider.find('.panel:eq(0)').addClass('_active'); // first dot is active after page loads
    $slider.find('.nav-dot:eq(0)').addClass('active aktive');




    $('.nav-dot').on('click', function() {
        
      var slideToGo = $(this).data('slide');
      goToSlide(slideToGo);
      $('*').delay(500).animate({ scrollTop: 0 });
      // $('.hor-panel').delay(500).animate({ left: 0 });
      

    
      $('.nav-item').siblings().removeClass('active show');
      //$('.nav-item:nth-child(1)').addClass('active show');
      
    });

      
  

    $slider.on('slide.changed', function() {
    
      $('.nav-dot').removeClass('active');

      var $activeDot = $('.nav-dot[data-slide="'+$('.panel._active').data('slide')+'"]');
      $activeDot.addClass('active');
    });

    function goToSlide(slideToGo) {
      $('.panel._active').removeClass('_active');
      $slider.find('.panel').eq(slideToGo -1).addClass('_active');
      //$activeSlide = $slider.find('.panel').eq(slideToGo -1).addClass('_active');
      $slider.trigger('slide.changed');  
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
      
  }); //('.page-slider') END


// SECTION - 2
 var horPanel = $('.hor-panel').css('width');
    
    var width = horPanel.replace('px',''); //replacing pixels with null string
    
    var i=0; 
    
    $('.tabs-container ul li').each(function(){  //how many li tags is in our code
    i++;
    });
    // = 3
    
    
    //getting the width of the first tab
    var width1 = width/i;
    
    $('.hor-panel').css('width',width1 + 'px'); //selecting first button, addping px
    
    $('.tabs-container ul li:nth-child(1)').on('click', function(){
        $('.hor-panel').animate({
            left: '0px',
        })
        $('body, html, *').animate({
            scrollTop: 0
        }); 
    });
    
    $('.tabs-container ul li:nth-child(2)').on('click', function(){
        $('.hor-panel').animate({
            left: width1 + 'px' //-10 left margin
        })
        $('body, html, *').animate({
            scrollTop: 0
        });
    });
    
     $('.tabs-container ul li:nth-child(3)').on('click', function(){
        $('.hor-panel').animate({
            left: width1 + width1 + 'px' 
        })
        $('body, html, *').animate({
            scrollTop: 0
        });
    });
}