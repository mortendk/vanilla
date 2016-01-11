(function ($) {
  /*
  Adds a toggle icon on click it adds a class that can be used for removing
  admin elements from the page, makes it easier for the designer to correct look
  and feel
  */
  Drupal.behaviors.adminToggle = {
    attach: function(context) {
      // we look for the toolbar and assumes that means the user have some level
      // of admin elements on the page
      if ( $('#toolbar-administration') ) {
        $( "body" ).append( '<a class="admin-toggle" title="Toggle admin tools"><i>Toggle</i></a>' );
        // click
        $('.admin-toggle').click(function(){
          $('body').toggleClass('admin-hide');
        });
        //keyboard shortcuts

      }

    }
  };


})(jQuery);
