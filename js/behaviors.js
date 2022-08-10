$(function(){
    // FIXED HEADER
    $(window).scroll(function(){
        if($(this).scrollTop() > 50){
            $("header").addClass("topo-fixo");
        } else{
            $("header").removeClass("topo-fixo");
        }
    });

    // OPEN MENU
    $(".burger").click(function(){
        $("nav").toggleClass("open");
        $(".burger_line:nth-child(1)").toggleClass("animate1");
        $(".burger_line:nth-child(2)").toggleClass("animate2");
        $(".burger_line:nth-child(3)").toggleClass("animate3");
        $("nav").show("fast");
    });

    // HIDE PRODUCTS
    $(".mb_button").click(function(){
        $(".products_content section, .popular_content section").removeClass("mb_hide");
    });

});