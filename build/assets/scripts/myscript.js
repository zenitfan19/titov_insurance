//Переключение табов

$(document).ready(function () { 
  var form_btn_counter = 0;
    $('.form-next-btn').click(function(event) {
        event.preventDefault(); 
        var button = $(this); 
        form_btn_counter++;
        $('.insurance-form-progress-title .current').html(form_btn_counter+1+' ');
        $('.insurance-form form').eq(form_btn_counter-1).fadeOut('slow');
        setTimeout(function() {
          $('.insurance-form form').eq(form_btn_counter).fadeIn('slow');
        }, 600);        
        $('.form-previous-btn').addClass('active');
        if($('.form-previous-btn').hasClass('active')) {
          $('.form-next-btn').addClass('shifted');
        } else {
          $('.form-next-btn').removeClass('shifted');
        }
        if(form_btn_counter === 1)
        $('.insurance-form-progress-bar-green').css('width', '208px'); 
        else if(form_btn_counter === 2) {
        $('.insurance-form-progress-bar-green').css('width', '101%').css('border-radius', '50px');
        button.css('display', 'none');
        $('.send-btn').css('display', 'flex');
        }
      });  
      $('.form-previous-btn').click(function(event) {
        event.preventDefault();
        var button = $(this); 
        form_btn_counter--;
        $('.insurance-form-progress-title .current').html(form_btn_counter+1+' ');
        $('.insurance-form form').eq(form_btn_counter+1).fadeOut('slow');
        setTimeout(function() {          
          $('.insurance-form form').eq(form_btn_counter).fadeIn('slow');
        }, 600);        
        $('.form-next-btn').css('display', 'flex');
        $('.send-btn').css('display', 'none');
        if(form_btn_counter === 1)
        $('.insurance-form-progress-bar-green').css('width', '208px'); 
        else if(form_btn_counter === 2)
        $('.insurance-form-progress-bar-green').css('width', '101%').css('border-radius', '50px');
        else if(form_btn_counter === 0) {
        $('.insurance-form-progress-bar-green').css('width', '104px');
        button.removeClass('active');
        if($('.form-previous-btn').hasClass('active')) {
          $('.form-next-btn').addClass('shifted');
        } else {
          $('.form-next-btn').removeClass('shifted');
        }
        }
      });

      $(".news-block-item.wide.video").on("mouseover", function(){
        $(this).find('.news-block-item-background > video').prop('volume', 0);
        $(this).find('.news-block-item-background > video').get(0).play();                        
      });
      $(".news-block-item.wide.video").on("mouseleave", function(){
        $(this).find('.news-block-item-background > video').get(0).pause();        
      }); 
      
      $(".news-block-item").on("mouseover", function(){
        $(this).find('.news-block-item-text').slideDown();
        if($(window).width() < 787) {
        $(this).css('background-color', '#fff');
        $(this).find('.news-block-item-date').css('color', '#111');
        }                    
      });
      $(".news-block-item").on("mouseleave", function(){
        $(this).find('.news-block-item-text').slideUp();
        $(this).css('background-color', 'unset'); 
        $(this).find('.news-block-item-date').css('color', '#fff');       
      });
      $(".news-block-item").not('.video').on("touchstart", function(){
        $('.news-block').find('.news-block-item').css('background-color', 'unset'); 
        $('.news-block').find('.news-block-item').find('.news-block-item-date').css('color', '#fff');
        $('.news-block').find('.news-block-item').each(function () {
          $(this).find('.news-block-item-text').slideUp();
        });
        $(this).find('.news-block-item-text').slideDown();        
        if($(window).width() < 787) {
        $(this).css('background-color', '#fff');
        $(this).find('.news-block-item-date').css('color', '#111');
        }                    
      });
      $(".footer-content-item").not($(".footer-content-item").eq(0)).on("click", function(){
        if($(this).hasClass('active')) {
          $(this).find('.footer-content-item-content').slideUp();          
        } else {
          $(this).find('.footer-content-item-content').slideDown();
        }        
        $(this).toggleClass('active');                        
      });

      $(document).on('click', '.hamburger', function () {       
        $(document).find('.header-mobile-menu').addClass('active fadeInDown animated');
        if ($(this).hasClass('is-active')) {
              $(document).find('.header-mobile-menu').removeClass('fadeInDown');
              $(document).find('.header-mobile-menu').addClass('fadeOutUp');
        } else {
              $(document).find('.header-mobile-menu').removeClass('fadeOutUp');
        }
        $(this).toggleClass('is-active');
      });
      $(document).on('change', '.insurance-switcher', function () {          
        if($(this).prop('checked')) {               
          $(this).closest('.what-to-insure').find(('.what-to-insure-label.right')).addClass('what-to-insure-main').removeClass('what-to-insure-submain');
          $(this).closest('.what-to-insure').find(('.what-to-insure-label.left')).removeClass('what-to-insure-main').addClass('what-to-insure-submain');          
        } else {          
          $(this).closest('.what-to-insure').find(('.what-to-insure-label.right')).removeClass('what-to-insure-main').addClass('what-to-insure-submain');
          $(this).closest('.what-to-insure').find(('.what-to-insure-label.left')).addClass('what-to-insure-main').removeClass('what-to-insure-submain');          
        }
      });
      $(document).on('change', '#what-to-insure-switcher', function () {       
        if($('#what-to-insure-switcher').prop('checked')) {          
          $('.insure-cats').css('display', 'none');
          $('.insure-cats.additional').css('display', 'grid');
        } else {          
          $('.insure-cats').css('display', 'grid');
          $('.insure-cats.additional').css('display', 'none');
        }
      });
      $(document).on('change', '#insurance-description-event', function () {       
        if($('#insurance-description-event').prop('checked')) {          
          $('.insurance-description-content.event').css('display', 'none');
          $('.insurance-description-content.event.additional').css('display', 'flex');
        } else {          
          $('.insurance-description-content.event').css('display', 'flex');
          $('.insurance-description-content.event.additional').css('display', 'none');
        }
      });
      $(document).on('change', '#insurance-description-type', function () {       
        if($('#insurance-description-type').prop('checked')) {          
          $('.insurance-description-content.type').css('display', 'none');
          $('.insurance-description-content.type.additional').css('display', 'flex');
        } else {         
          $('.insurance-description-content.type').css('display', 'flex');
          $('.insurance-description-content.type.additional').css('display', 'none');
        }
      });
      $(".useful-articles-content-item__link").on("mouseover", function(){
        if($(this).find('img').hasClass('animated fadeInRight')) {
          $(this).find('img').removeClass('animated fadeInRight');
        }
        $(this).find('img').addClass('animated fadeOutRight');                        
      });
      $(".useful-articles-content-item__link").on("mouseleave", function(){
        if($(this).find('img').hasClass('animated fadeOutRight')) {
          $(this).find('img').removeClass('animated fadeOutRight');
        }
        $(this).find('img').addClass('animated fadeInRight');        
      }); 
      $(document).on('click', '.news-block-item', function () {             
        if($(this).hasClass('video')) {                   
        } else if($(this).find('.news-block-item-article-link').first() != undefined) {          
          window.location = $(this).find('.news-block-item-article-link').first().attr('href');
        }
      });
      $(document).on('click', '.contact-us-form__btn', function (event) {
        event.preventDefault();        
        $('.contact-us-form-unsuccess').fadeOut('400');      
        setTimeout(function() {
          $('.contact-us-form-success').fadeIn('400');
        }, 400);       
      }); 
      $(document).on('click', '.what-to-insure-label', function (event) {
        var switcher = $(this).closest('.what-to-insure-content').find('input');
        if($(this).hasClass('left')) {          
          if(!switcher.prop('checked')) {            
          } else {            
            switcher.prop('checked', false);
            $('.insurance-switcher').trigger('change');
          }
        } else {          
          if(switcher.prop('checked')) {            
          } else {            
            switcher.prop('checked', true);
            $('.insurance-switcher').trigger('change');
          }
        }         
      });     
});