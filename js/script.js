$(document).ready(function () {

    //메뉴바 스크롤시 변함
    $(window).on('scroll', function () {
        
        if ($(window).scrollTop()) {
            
            $('header').addClass('down');
            
        } else {            
            
            $('header').removeClass('down');  
            
        }
        
    });
    
    
    
    
    
    //메뉴 클릭 시 나오는 2차 메뉴 depth
    $(".nav-list > li").click(function () {

        var thisIndex = $(this).index();
        //1번 내가 누른 애가 active가 있다면...배경색 제거 메sb도 들어감
        //2번 없다면...배경색 생성 메뉴 생성

        if ($(".list").eq(thisIndex).hasClass("active")) {
            
            $(".nav-2-depth-wrap").removeClass("active");
            
            $(".list").eq(thisIndex).removeClass("active");
            
        } else {
            
            $(".nav-2-depth-wrap").addClass("active");
            
            $(".list").removeClass("active");
            
            $(".list").eq(thisIndex).addClass("active");
            //eq 같은 index를 찾아줄때 쓰는것
        }

        console.log(thisIndex);

    });
    
    
    
    
    
    //런칭캘린더, 회원전용은 2차 메뉴 depth 제외
    $(".nav-list > li:nth-child(4),.nav-list > li:nth-child(5)").click(function () {

        $(".nav-2-depth-wrap").removeClass("active");

    });
    
    
    
    
    
    //다른 메뉴 눌렀을때 기존에 있던 메뉴 들어감
    $(".nav-2-depth-right").click(function () {
        
        if ($(".list").eq(thisIndex).hasClass("active")) {
            
            $(".nav-2-depth-wrap").removeClass("active");
            
            $(".list").eq(thisIndex).removeClass("active");
        }

    });
    
    
    
    
    
    //메뉴 나왔을때 X버튼
    $(".nav-2-depth-wrap .nav-2-depth .right-con,.nav-2-depth-wrap .nav-2-depth .right-con .x-btn-wrap .x-btn").click(function () {

        if ($(".list").hasClass("active")) {

            $(".nav-2-depth-wrap").removeClass("active");

            $(".list").removeClass("active");
        }

    });
    
    
    
    
    
    //반응형 768시 hamburger메뉴

    $(".hamburger-wrap > .hamburger").click(function () {

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
    
    
    
    
    
    //오른쪽 아래 척 70 바
    $('.floting-bar').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    
    
    
    
    

});
