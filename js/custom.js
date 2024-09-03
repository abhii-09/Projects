$(function ($) {
         $(".mobile_btn").on("click", function () {
           $(".main_menu").slideToggle();
           $(".mobile_btn i").toggleClass("fa-xmark fa-xl");
         });
         
         if ($(window).width() <991) {
           $(".main_menu  ul li a").on("click", function () {
             $(this)
               .parent(".has_dropdown")
               .children(".sub_menu")
               .css({ "padding-left": "15px" })
               .stop()
               .slideToggle("");
         
             $(this)
               .parent(".has_dropdown")
               .children("a")
               .find(".fa-angle-right")
               .stop()
               .toggleClass("fa-rotate-90");
           });
         }
         });
         


$(document).ready(function(){
  $(".has_dropdown").click(function(){
    $(".sub_menu").slideToggle("slow");

  });
});





         $(document).ready(function($) {
          //Check if an element was in a screen
          function isScrolledIntoView(elem){
              var docViewTop = $(window).scrollTop();
              var docViewBottom = docViewTop + $(window).height();
              var elemTop = $(elem).offset().top;
              var elemBottom = elemTop + $(elem).height();
              return ((elemBottom <= docViewBottom));
          }
          //Count up code
          function countUp() {
              $('.counter').each(function() {
                var $this = $(this), // <- Don't touch this variable. It's pure magic.
                    countTo = $this.attr('data-count');
                    ended = $this.attr('ended');
         
              if ( ended != "true" && isScrolledIntoView($this) ) {
                  $({ countNum: $this.text()}).animate({
                  countNum: countTo
                },
                {
                  duration: 2500, //duration of counting
                  easing: 'swing',
                  step: function() {
                    $this.text(Math.floor(this.countNum));
                  },
                  complete: function() {
                    $this.text(this.countNum);
                  }
                });
              $this.attr('ended', 'true');
              }
              });
          }
          //Start animation on page-load
          if ( isScrolledIntoView(".counter") ) {
              countUp();
          }
          //Start animation on screen
          $(document).scroll(function() {
              if ( isScrolledIntoView(".counter") ) {
                  countUp();
              }
          });
         });
