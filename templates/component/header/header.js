(function ($) {

  $(window).scroll(function() {
    //header
    if( $(this).scrollTop() > $(window).height()/2  ){
      $('.js-header').addClass('header--hide');
    }else{
      $('.js-header').removeClass('header--hide');
    }
  });


})(jQuery);
