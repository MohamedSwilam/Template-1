$(document).ready(function(){
    
    $('.nav1').fadeIn();
    $('.nav2').fadeOut();
     $('.top').fadeOut();
  
    $(window).scroll(function () {
        if($(window).scrollTop() >= 800) {
            $('.top').fadeIn(); 
        } else {  
            $('.top').fadeOut();  
        }
        
        
        
        if($(window).scrollTop() >= 70 &  $(window).scrollTop() < 3500) {
            $('.nav1').fadeOut();
            //background-color: rgb(13, 18, 36);
            $('.nav2').fadeIn();
        }
        else if($(window).scrollTop() >= 1000){
            $('.nav1').fadeOut();
            $('.nav2').fadeOut();
        }
        else{
            $('.nav1').fadeIn();
            $('.nav2').fadeOut();
        }
       
    });
   
    $('.top').click(function () {
        $("html,body").animate({
            "scrollTop":"0"
        },2000);
    });
    
    $("html").niceScroll({
        "cursorcolor":"rgba(13, 18, 36, 1)",
        "cursorwidth":"10px",
        "cursorborder":"1px solid gold"
    });
    
});
