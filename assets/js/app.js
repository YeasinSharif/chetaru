$(function () {

    /*scroll top button*/

    $(window).on('scroll', function() {
        
        if($(this).scrollTop() > 450 ) {
            $('#topbtn').fadeIn(500);
        }else{
            $('#topbtn').fadeOut(500);
        }

    })


    
    $('#topbtn').on('click', function () {
        $('html,body').animate({
            scrollTop: 0,
        },1000)
    })

    /* scroll top button */




})

   
  



          /*fixed menu*/

  $(window).on('scroll', function(){
       if ($(window).scrollTop() > $('#nav-section').height()){
           $('#nav-section').addClass('fixed-menu')
       }else {
           $('#nav-section').removeClass('fixed-menu')
       }
   }) 

   /* fixed menu */





  


   
      