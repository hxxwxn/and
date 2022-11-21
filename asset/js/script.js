$(function () {


    /////// 헤더 배너 ////////////
    const headerbanner = new Swiper(".headerbanner", {
        // simulateTouch:false, 터치금지
        // loop: true,
        effect: "fade",
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    // 헤더 배너 끝////////////

    /////// 주요 슬라이드 /////////////
    const slide1 = new Swiper(".main-slide", {
        // simulateTouch:false, 터치금지
        effect: "fade",
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    /////// 주요 슬라이드 끝/////////////


    // 레깅스, 브라탑, 세트 ,,, //////////
    var swiper = new Swiper(".bannerswiper", {
        slidesPerView: 2.2,
        spaceBetween: 10,
        freeMode: true,

    });
    // 레깅스, 브라탑, 세트 ,,, //////////



    $(window).scroll(function () {
        const curr = $(this).scrollTop(); /* 스크롤 했을 때 */
        const header = $('.header-inner');
        // 조건문 커런트가 0보다 크다면!    간단한 조건일 때 사용
        (curr > 0) ? header.addClass('fixed'): header.removeClass('fixed');

    })

    // 슬라이드 된 상태로 냅두기 위해
    $(window).trigger('scroll'); /* 강제실행 trigger */

    $('.group-gnb .btn-all').click(function (e) {
        e.preventDefault();


        // if ($('.group-gnb').hasClass('active')){
        //     $('.group-gnb').removeClass('active')
        //     $('.all-area').stop().slideUp();
        // }else{
        //     $('.group-gnb').addClass('active')
        //     $('.all-area').stop().slideDown();
        // };

        // 포괄하는 영역
        // $(this).toggleClass("show");
        // $('.group-gnb').toggleClass('active');
        // $('.all-area').stop().slideToggle();

        $('.group-gnb').toggleClass('active');
        $('.all-area').stop().slideToggle();
    })




    // hamburger, close
    $('.header .btn-menu').click(function (e) {
        e.preventDefault();

        $('.side-nav').addClass('active');
        $('body').addClass('overflow');
        /* body 스크롤 안되게 */
    })
    // hamburger, close

    $('.side-nav .btn-close, .dimmed').click(function (e) {
        e.preventDefault();
        $('.side-nav').removeClass('active')
        $('body').removeClass('overflow')
    }) ////////////

    //
    $('.side-nav .category').click(function (e) {
        e.preventDefault();

        $(this).siblings('.sub').stop().slideToggle();
        $(this).toggleClass('active');
    }) ////////


    ////////////////////검색////////////////////////
    $('.btn-search').click(function (e) {
        e.preventDefault();

        $('.search-area').addClass('active');
    })

    $('.btn-before').click(function (e) {
        e.preventDefault();
        $('.search-area').removeClass('active');
    })

    ////////////////////검색////////////////////////




})

// height 0보다 커졌을 때, 탑버튼 생김!!! 
// scrollTop 으로 올라가기
//jquery top 이동 검색해서 하기!!!!!