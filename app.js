var main = function() {

   $('.menu-icon').click(function(){
      if ($('.menu-icon').position().left === 0){
         $('.menu').animate({left:"0px"}, 500);
         $('.non-hidden').find('*').show().animate({left: "250px"}, 500);
      }
      else {
         $('.menu').animate({left: "-250px"}, 500);
         $('.non-hidden *').animate({left: "0px"}, 500);
         $('.resume').animate({left: "-850px"}, 500);
      }
   });

   $('#resume-button').click(function(){
      if ($('.resume').position().left === -850){
         $('.resume').animate({left: "0px"}, 500);
         $('.non-hidden').find('*').show().animate({left:"850px"}, 500);
         $('.menu').animate({left: "600px"}, 500);
      }
      else {
         $('.resume').animate({left: "-600px"}, 500);
         $('.non-hidden').find('*').show().animate({left:"250px"}, 500);
         $('.menu').animate({left: "0px"}, 500);
      }
   })

   $('#home-button').click(function(){
      $('html, body').animate({
         scrollTop: $('.non-hidden').offset().top}, 500);
      $('.menu').animate({left: "-250px"}, 500);
      $('.non-hidden *').animate({left: "0px"}, 500);
      if ($('.resume').position().left === 0){
         $('.resume').animate({left: "-850px"}, 500);
      }
      });

   $('#about-button').click(function(){
      $('html, body').animate({
         scrollTop: $('.about').offset().top}, 500);
      $('.menu').animate({left: "-250px"}, 500);
      $('.non-hidden *').animate({left: "0px"}, 500);
      if ($('.resume').position().left === 0){
         $('.resume').animate({left: "-850px"}, 500);
      }
      });

   $('#project-button').click(function(){
      $('html, body').animate({
         scrollTop: $('.project').offset().top}, 500);
      $('.menu').animate({left: "-250px"}, 500);
      $('.non-hidden *').animate({left: "0px"}, 500);
      if ($('.resume').position().left === 0){
         $('.resume').animate({left: "-850px"}, 500);
      }
      });

   $('#contact-button').click(function(){
      $('html, body').animate({
         scrollTop: $('.contact').offset().top}, 500);
      $('.menu').animate({left: "-250px"}, 500);
      $('.non-hidden *').animate({left: "0px"}, 500);
      if ($('.resume').position().left === 0){
         $('.resume').animate({left: "-850px"}, 500);
      }
      });

}
$(document).ready(main);
