$(document).ready(function () {
    // 화면이 준비되면 실행해라.
    // setInterval , animate, css , appendTo 
    // setInterval(function(){}, 3000)
    // $(태그).animate({}, speed, function(){})
    // $(태그).css(스타일, 스타일값)
    // $(옮길테그).appendTo($(부모가될태그))

    const aniw = $(".swiper-slide").width(); // $(".swiper-slide").css("width");


    setInterval(function () {
        $(".swiper-wrapper").animate({ "marginLeft": -aniw }, 400, function () {
            $(".swiper-slide").eq(0).appendTo($(".swiper-wrapper"))
            $(".swiper-wrapper").css("marginLeft", 0)
        })
    }, 3000)

})