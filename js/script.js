$(".top-bar > .left-nav-wrap > ul > li").click(function () {

    var thisIndex = $(this).index();
    //1번 내가 누른 애가 active가 있다면...배경색 제거 메sb도 들어감
    //2번 없다면...배경색 생성 메뉴 생성

    if ($(".nav-2-depth-list").eq(thisIndex).hasClass("active")) {
        $(".nav-2-depth-wrap").removeClass("active");
        $(".nav-2-depth-list").eq(thisIndex).removeClass("active");
    } else {
        $(".nav-2-depth-wrap").addClass("active");
        $(".nav-2-depth-list").removeClass("active");
        $(".nav-2-depth-list").eq(thisIndex).addClass("active");
        //eq 같은 index를 찾아줄때 쓰는것
    }

    console.log(thisIndex);

});


$(".top-bar > .left-nav-wrap > ul > li:nth-child(4),.top-bar > .left-nav-wrap > ul > li:nth-child(5)").click(function () {
    
    $(".nav-2-depth-wrap").removeClass("active");
    
});




$(".nav-2-depth-right").click(function () {
    if ($(".nav-2-depth-list").eq(thisIndex).hasClass("active")) {
        $(".nav-2-depth-wrap").removeClass("active");
        $(".nav-2-depth-list").eq(thisIndex).removeClass("active");
    }

});


//메뉴 나왔을때 X버튼
$(".nav-2-depth-wrap > .nav-2-depth > .nav-2-depth-right > .x-btn-wrap > .x-btn").click(function(){
    
    if($(".nav-2-depth-list").hasClass("active")){
        
        $(".nav-2-depth-wrap").removeClass("active");
        
        $(".nav-2-depth-list").removeClass("active");
    }
    
});








//반응형 768시 hamburger메뉴

$(".top-bar > .hamburger-wrap > .hamburger").click(function () {

    $(".mobile-nav-2-depth-wrap").addClass("active");

});

$(".mobile-nav-2-depth-wrap > .mobile-nav-2-depth > .head-wrap > .X-btn").click(function () {

    $(".mobile-nav-2-depth-wrap").removeClass("active");

});







//반응형 768px시 family site
$(".section02-wrap > .section02 > .box5 > p").click(function () {
    $(".hide").slideToggle();
    $(".box5 > p > span").toggleClass("active");
});








//메뉴바 고정
$(function () {
    var lnb = $(".top-bar-wrap").offset().top;

    $(window).scroll(function () {

        var window = $(this).scrollTop();

        if (top - bar <= window) {
            $(".top-bar-wrap").addClass("fixed");
        } else {
            $(".top-bar-wrap").removeClass("fixed");
        }


    })
});


//메뉴바 스크롤시 변함
$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('.top-bar-warp').addClass('down');
    } else {
        $('.top-bar-warp').removeClass('down');
    }
    
 
    
    
});























