$(document).ready(function(){
  $('nav').affix({
        offset: {
          top: 436
        }
  });

  // Initialize popover
  $(function () {
    $('[data-toggle="popover"]').popover()
  })

  // Initialize tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  // Initialize and Configure Scroll Reveal Animation
   window.sr = ScrollReveal();
   sr.reveal('.sr-icons', {
       duration: 600,
       scale: 0.3,
       distance: '0px'
   }, 200);
   sr.reveal('.box-white', {
       duration: 600,
       scale: 0.3,
       distance: '0px'
   }, 200);

});

// Initialize and Configure Typed.js
document.addEventListener('DOMContentLoaded', function(){
    Typed.new('.subtitle', {
      strings: ["Développeur Web Mobile"],
      typeSpeed: 0
    });
  });
