jQuery(document).ready(function($) {

	// var myWidth = 0;
 //        myWidth = window.innerWidth;
 //        jQuery('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:9999;color:#fff;">Width = '+myWidth+'</div>');
 //        jQuery(window).resize(function(){
 //            var myWidth = 0;
 //            myWidth = window.innerWidth;
 //            jQuery('#size').remove();
 //            jQuery('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:9999;color:#fff;">Width = '+myWidth+'</div>');
 //        });


    jQuery('.slide-container').lightSlider({
      item: 1,
       auto:true,
        loop:true,
        pauseOnHover: true,
        adaptiveHeight:true,
        controls: false,
         pager: false,
    }); 

      jQuery('.product_container').viewportChecker({

        classToAdd: 'animated zoomIn',

      });

        jQuery('.our_servicse li').viewportChecker({

        classToAdd: 'animated fadeInLeft',
        

        });
  



});