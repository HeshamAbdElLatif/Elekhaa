$(document).ready(function(){

   //------------------------------ xs navbar open close
   $('.xs-navbar-btn').click(function(){
       if( $('#xs-navbar-id').hasClass('en') ){
           $('.xs-navbar').animate({left: '0px'});
       }else{
           $('.xs-navbar').animate({right: '0px'});
       }
   });
   $('.menu-close-btn').click(function(){
       if( $('#xs-navbar-id').hasClass('en') ){
           $('.xs-navbar').animate({left: '-100%'});
       }else{
           $('.xs-navbar').animate({right: '-100%'});
       }
   });
   $('.xs-navbar').click(function(e){
       if( e.target.id == 'xs-navbar-id'){
           if( $('#xs-navbar-id').hasClass('en') ){
               $('.xs-navbar').animate({left: '-100%'});
           }else{
               $('.xs-navbar').animate({right: '-100%'});
           }
       }
   });
   
   //------------------------ end xs navbar

    
    $('#main-slider').owlCarousel({
        rtl:true,
        loop:true,
        margin:0,
        nav:false,
        items:1,
    });
    
    
    $(".donation-div > a").hover(function(){
        $(this).children('img').attr("src","pic/donation-green.png");
        }, function(){
        $(this).children('img').attr("src","pic/dotation.png");
    });
    /**************************counter js************************/
     var a = 0;
    $(window).scroll(function() {

      var oTop = $('.counter,header').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $('.number').each(function() {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },

            {

              duration: 4000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }

            });
        });
        a = 1;
      }

    });
});