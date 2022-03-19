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

$(".common-button").click(function(){
    $("html,body").animate({
        scrollTop: 0
    }, 100)
})
