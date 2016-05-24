(function ($) {
  /*
  Adds a toggle icon on click it adds a class that can be used for removing
  admin elements from the page, makes it easier for the designer to correct look
  and feel
  */
  Drupal.behaviors.adminToggle = {
    attach: function(context) {
      // Look for the toolbar and assumes that means the user have some level
      // of admin elements on the page
      console.log('');

      if ( $('#toolbar-administration') ) {
        $( "body" ).append( '<a class="js-admin-toggle admin-toggle"><i class="admin-toggle__icon">Toggle</i></a>' );
        // click
        $('.js-admin-toggle').click(function(){
          $('body').toggleClass('admin-hide');
        });

        $( "body" ).keypress(function(e) {
          // ctrl + a
          if( e.charCode == "1"){
            $('body').toggleClass('admin-hide');
          }
          // console.log(
          //   "Key Pressed: " + String.fromCharCode(e.charCode) + "\n"
          //   + "charCode: " + e.charCode + "\n"
          //   + "SHIFT key pressed: " + e.shiftKey + "\n"
          //   + "ALT key pressed: " + e.altKey + "\n"
          // );

        });
      }

    }
  };



})(jQuery);
