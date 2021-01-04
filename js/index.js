/*top-banner-ad-close*/
$(function () {
    $('.button-top-banner-close').click(function () {
        $('.top-banner').slideUp("fast");
    })
});
/* 搜索栏*/
//input获得焦点，#search-bar-key消失
$('#search-kw').focus(function () {
    $('#search-bar-key').css("display", "none");
    $("#search-key").css("display", "block");
});
//input失去焦点，#search-bar-key出现
$('#search-kw').blur(function () {
    $('#search-bar-key').css("display", "block");
    $("#search-key").css("display", "none");
});
/* 轮播图*/
$(function () {

    let count = 0;
    let buttonSpan = $('.ec-slider-nav-1').children();//圆点集合
    //自动轮播功能 使用定时器
    autoNextPage();

    function autoNextPage() {
        intervalId = setInterval(function () {
            $('.arrow-right').trigger("click");
        }, 3000);
    }

    //当鼠标移入 停止轮播
    $('.hot-board').mouseover(function () {
        console.log('stop');
        clearInterval(intervalId);
    });
    // 当鼠标移出，开始轮播
    $('.hot-board').mouseout(function () {
        console.log('start');
        autoNextPage();
    });

    $(".arrow-right").click(function () {
        count++;

        if (count == $(".slider li").length) {
            count = 0;
        }
        console.log(count);
        //让count渐渐的显示，其他兄弟渐渐的隐藏
        $(".slider li").eq(count).fadeIn().siblings("li").fadeOut();
        // 小圆点
        $(buttonSpan[count]).addClass("current").siblings("span").removeClass("current");
    });

    $(".arrow-left").click(function () {
        count--;

        if (count == -1) {
            count = $(".slider li").length - 1;
        }
        console.log(count);
        //让count渐渐的显示，其他兄弟渐渐的隐藏
        $(".slider li").eq(count).fadeIn().siblings("li").fadeOut();
        // 小圆点
        $(buttonSpan[count]).addClass("current").siblings("span").removeClass("current");
    });
    //小圆点点击事件
    for (let i=0;i<buttonSpan.length;i++){
        buttonSpan[i].onclick=function () {
            //让第i个渐渐的显示，其他兄弟渐渐的隐藏
            $(".slider li").eq(i).fadeIn().siblings("li").fadeOut();
            count=i;
            $(buttonSpan[count]).addClass("current").siblings("span").removeClass("current");
        }
    }

});
