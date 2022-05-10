$(window).scroll(function(){
    if($(window).scrollTop() > 300){
        $(".menu").addClass("menufixed")
    }else{
        $(".menu").removeClass("menufixed")
    }

    if($(window).scrollTop() > 600){
        $(".common-button").fadeIn()
    }else{
        $(".common-button").fadeOut()
    }
})

$(window).scroll(function(){
    if($(window).scrollTop() > 300){
        $(".menu2").addClass("menufixed2")
    }else{
        $(".menu2").removeClass("menufixed2")
    }

})


$(".common-button").click(function(){
    $("html,body").animate({
        scrollTop: 0
    }, 100)
})

AOS.init({
    offset: 120, 
    delay: 0, 
    duration: 1000, 
});

$(".banner-main").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
})

