var main = function() {

   $('.menu-icon').click(function(){
      if ($('.menu-icon').position().left === 0){
         $('.menu').animate({left:"0px"}, '20%');
         $('.non-hidden').find('*').show().animate({left: "20%"}, '20%');
      }
      else {
         $('.menu').animate({left: "-20%"}, 500);
         $('.non-hidden *').animate({left: "0%"}, 500);
         $('.resume').animate({left: "-80%"}, 500);
      }
   });

   $('#resume-button').click(function(){
      if ($('.menu').position().left === 0){
         $('.resume').animate({left: "0%"}, 500);
         $('.non-hidden').find('*').show().animate({left:"80%"}, 500);
         $('.menu').animate({left: "60%"}, 500);
      }
      else {
         $('.resume').animate({left: "-60%"}, 500);
         $('.non-hidden').find('*').show().animate({left:"20%"}, 500);
         $('.menu').animate({left: "0%"}, 500);
      }
   })

   $('#home-button').click(function(){
      $('html, body').animate({
         scrollTop: $('.non-hidden').offset().top}, 500);
      $('.menu').animate({left: "-20%"}, 500);
      $('.non-hidden *').animate({left: "0px"}, 500);
      if ($('.resume').position().left === 0){
         $('.resume').animate({left: "-80%"}, 500);
      }
   });

   $('#about-button').click(function(){
      $('html, body').animate({
         scrollTop: $('.about').offset().top}, 500);
      $('.menu').animate({left: "-20%"}, 500);
      $('.non-hidden *').animate({left: "0px"}, 500);
      if ($('.resume').position().left === 0){
         $('.resume').animate({left: "-80%"}, 500);
      }
   });

   $('#project-button').click(function(){
      $('html, body').animate({
         scrollTop: $('.project').offset().top}, 500);
      $('.menu').animate({left: "-20%"}, 500);
      $('.non-hidden *').animate({left: "0px"}, 500);
      if ($('.resume').position().left === 0){
         $('.resume').animate({left: "-80%"}, 500);
      }
   });

   $('#contact-button').click(function(){
      $('html, body').animate({
         scrollTop: $('.contact').offset().top}, 500);
      $('.menu').animate({left: "-20%"}, 500);
      $('.non-hidden *').animate({left: "0px"}, 500);
      if ($('.resume').position().left === 0){
         $('.resume').animate({left: "-80%"}, 500);
      }
   });

   $('#education-tab').click(function(){
      $('#education-content').removeClass('hide');
      if($('#work-experience-content').hasClass('hide')){
         $('#skills-content').addClass('hide');
      }
      else {
         $('#work-experience-content').addClass('hide');
      }
   });

   $('#work-experience-tab').click(function(){
      $('#work-experience-content').removeClass('hide');
      if($('#education-content').hasClass('hide')){
         $('#skills-content').addClass('hide');
      }
      else {
         $('#education-content').addClass('hide');
      }
   });

   $('#skills-tab').click(function(){
      $('#skills-content').removeClass('hide');
      if($('#education-content').hasClass('hide')){
         $('#work-experience-content').addClass('hide');
      }
      else {
         $('#education-content').addClass('hide');
      }
   });

}
$(document).ready(main);
