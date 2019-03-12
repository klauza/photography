﻿
$(document).ready(function(){

    // SHOWING MENU
    const showMenu = () => {
        $(".nav-dots").css({
            "transform":"translateX(0) translateY(-50%)"
        });
        $("#arrow").css("animation","arrow-anim-forward 0.5s ease forwards");
        $(".arrow-box").css("animation","arrow-box-forward 0.5s ease forwards");
        $("#arrow polygon").css({"fill":"#fff"});
    } 
       

    $("body").on("mousemove",function(event) {
        if (event.pageX < 60) {
            showMenu();
        }
    });

    
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


    
    function backgroundDel(){
        setTimeout(function(){
            var backG = document.getElementsByClassName('biegie')[0];
            backG.classList="";
            showMenu();
        }, 1000);
    }
    
    backgroundDel();
    
   
    //padding-left clicking on any button
    // $('.nav-dot').click(function(){
    //     $(this).addClass('aktive'); 
    //     $(this).siblings().removeClass('aktive'); 
           
    // })
    

    

    

    $('.page-slider').each(function() {
      var $slider =  $(this);
      console.log($slider);
      //var numberOfSlides = $slider.find('.panel').length;

 
      $slider.find('.panel:eq(0)').addClass('_active'); // po wczytaniu sie strony, daje pierwsza kropke jako aktywną 
      $slider.find('.nav-dot:eq(0)').addClass('active aktive');




        $('.nav-dot').on('click', function() {

            var slideToGo = $(this).data('slide');
            goToSlide(slideToGo);
            $('*').delay(500).animate({ scrollTop: 0 });
           // $('.hor-panel').delay(500).animate({ left: 0 });
            
     
         
            $('.nav-item').siblings().removeClass('active show');
            $('.nav-item:nth-child(1)').addClass('active show');
        });

        
   

      $slider.on('slide.changed', function() {
     
  
        $('.nav-dot').removeClass('active');

        var $activeDot = $('.nav-dot[data-slide="'+$('.panel._active').data('slide')+'"]');
        $activeDot.addClass('active');
        });

    

      function goToSlide(slideToGo) {
          $('.panel._active').removeClass('_active');
          $slider.find('.panel').eq(slideToGo -1).addClass('_active');
          $activeSlide = $slider.find('.panel').eq(slideToGo -1).addClass('_active');
          $slider.trigger('slide.changed');  
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
          }
        
        
        

        
        
        
        
        
      

        
        
    }); //('.page-slider') END
}); //(document).ready END


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
            left: '0px'
        })
    });
    
    $('.tabs-container ul li:nth-child(2)').on('click', function(){
        $('.hor-panel').animate({
            left: width1 + 'px' //-10 left margin
        })
    });
    
     $('.tabs-container ul li:nth-child(3)').on('click', function(){
        $('.hor-panel').animate({
            left: width1 + width1 + 'px' 
        })
    });
