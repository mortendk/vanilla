(function ($) {

  // adds in a fixed position menu
  // css in page.css navigation fixed
  $(window).scroll(function() {
    if( $(this).scrollTop() > $('.path-frontpage .hero-front').height() ) {
      $('.path-frontpage .hero-nav').addClass('hero-nav--locked');
    } else {
      $('.path-frontpage .hero-nav').removeClass('hero-nav--locked');
    }
  });

  // smooth scroll
  $(function() {

    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            // calculates hero-nav height
            scrollTop: target.offset().top - $('.hero-nav--locked').height()
          }, 1000);
          return false;



        }
      }
    });
  });

})(jQuery);
