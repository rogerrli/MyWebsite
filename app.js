var main = function() {

   $('.menu-icon').click(function(){
      if ($('.menu-icon').position().left === 0){
         $('.menu').animate({left:"0px"}, 200);
         $('.non-hidden').find('*').animate({left: "250"}, 200);
      }
      else {
         $('.menu').animate({left: "-250"}, 200);
         $('.non-hidden *').animate({left: "0px"}, 200);
      }
   });

   $('.close-icon').click(function(){
      $('.menu').animate({left: "-250"}, 200);
      $('.non-hidden *').animate({left: "0px"}, 200);
   });

   $('#home-button').click(function(){
      $('html, body').animate({
         scrollTop: $('.non-hidden').offset().top}, 500);
      });

   $('#about-button').click(function(){
      $('html, body').animate({
         scrollTop: $('.about').offset().top}, 500);
      });

   $('#resume-button').click(function(){
      $('html, body').animate({
         scrollTop: $('.resume').offset().top}, 500);
      });

   $('#education-button').click(function(){
      $('html, body').animate({
         scrollTop: $('.education').offset().top}, 500);
      });

   $('#contact-button').click(function(){
      $('html, body').animate({
         scrollTop: $('.contact').offset().top}, 500);
      });

   $('.resume-view').click(function(){
      $('.resume-content').toggleClass('hide');
   });
}
$(document).ready(main);
