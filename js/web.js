$(document).ready(function () {
    // 화면이 준비되면 실행해라.
    // setInterval , animate, css , appendTo 
    // setInterval(function(){}, 3000)
    // $(태그).animate({}, speed, function(){})
    // $(태그).css(스타일, 스타일값)
    // $(옮길테그).appendTo($(부모가될태그))

    var num = 0;

    if ($(".swiper-slide").length > 0) {
        setInterval(fadefun, 3000)
    }
    // function aniRightLeft() {
    //     $(".swiper-wrapper").animate({ "marginLeft": -1200 }, 400, function () {
    //         $(".swiper-slide").eq(0).appendTo($(".swiper-wrapper"))
    //        // $(".swiper-slide").eq(0).appendTo($(this))
    //        // $(".swiper-slide:nth-child(1)").appendTo($(".swiper-wrapper"))
    //        // $(this).find(">div").eq(0).appendTo($(this))
    //        // $(">div",this).eq(0).appendTo($(this))
    //        // $(">div:first-child",this).appendTo($(this))
    //         $(".swiper-wrapper").css("marginLeft", 0)
    //     })
    // }



    function fadefun() {
        num++;
        num = num % $(".swiper-slide").length
        $(".swiper-slide").eq(num).addClass("act").siblings().removeClass("act")
    }
})