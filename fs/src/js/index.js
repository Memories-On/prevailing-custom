/**
 * Created by my on 2016/9/28.
 */
$(function(){
    /*************************head***********************************/
    $("#head li").mouseover(function(){
        $(this).children("a").css("color","#d32402");
    });
    $("#head li").mouseout(function(){
        $(this).children("a").css("color","#000");
        $(".mine").hide();
    });
    $("#fashion").mouseover(function(){
        $(".mine").show();
    });
    $("#fashion").mouseout(function(){
        $(".mine").hide();
    });
    $(".mine p").bind("mouseover mouseout",function(){
        $(this).toggleClass("info1")
    })


 /***************************menu***********************************/
    $("#menu .ul1 li").mouseover(function(){
        $(this).css("color","#d32402")
    });
    $("#menu .ul1 li").mouseout(function(){
        $(this).css("color","#000")
    });
    /**************鼠标移上蔓延开部分*******************/
    $("#menu .ul2 li").mouseover(function(){
        var st = $(this).index();
        $(this).css("background","#9f1e05");
        $(this).siblings().css("background","#d32402");
        $(".spread").hide();
        $(".spread").eq(st).show();
        $(".spread").eq(st).mouseover(function(){
            $(this).show();
        })
        $(".spread").eq(st).mouseout(function(){
            $(this).hide();
        })
    });
    $("#menu .ul2 li").mouseout(function(){
        $(".spread").hide();
    })
 /*********************************菜单栏部分的轮播图**************/
    var carousel = $("#menu .carousel");
    var tab = $("#menu .carousel a")
    var index = 1;
    setInterval(function(){
        carousel.css("background","url(images/"+(++index)+".png) no-repeat");
        if( index == 5){
            index = 0
        }
        tab.eq(index-1).siblings().removeClass("info");
        tab.eq(index-1).addClass("info");
    },2000)
    //tab的鼠标移上事件
    for(var i = 0; i < tab.length ; i++){
        (function(num){
            tab.eq(i).bind("mouseover",function(){
                $(this).addClass("info");
                $(this).siblings().removeClass("info");
                //console.log(num);
                index = num;
                carousel.css("background","url(images/"+(index+1)+".png) no-repeat");
            })
        })(i)
    }
    /************************今日特惠中的轮播图**********************/
    var count = 0;
    timer = setInterval(move,2000);
    //自动播放
    function move(){
        $(".today").stop().animate({left : -240*(++count)},1000);
        if( count == 2){
            $(".today").animate({left : 0},0);
            count = 0;
        }
    }
    $(".aRight").click(function(){
        clearInterval(timer);
        $(".today").stop().animate({left : -240*(++count)},1000);
        if( count == 2){
            $(".today").animate({left : 0},0);
            count = 0;
        }
        timer = setInterval(move,2000)
    });
    $(".aLeft").click(function(){
        clearInterval(timer);
        if( count == 0){
            $(".today").animate({left : -480},0);
            count = 2;
        }
        $(".today").stop().animate({left : -240*(--count)},1000);
        timer = setInterval(move,2000)
    })
    /**************************TV热播中的轮播图*******************************/
    var cot = 0;
    timer1 = setInterval(move1,4000);
    //自动播放
    function move1(){
        $(".hotPlay").stop().animate({left : -723*(++cot)},2000);
        if( cot == 6){
            $(".hotPlay").animate({left : 0},0);
            cot = 0;
        }
    }
    $(".a1Right").click(function(){
        clearInterval(timer1);
        $(".hotPlay").stop().animate({left : -723*(++cot)},2000);
        if( cot == 6){
            $(".hotPlay").animate({left : 0},0);
            cot = 0;
        }
        timer1 = setInterval(move1,4000)
    });
    $(".a1Left").click(function(){
        clearInterval(timer1);
        if( cot == 0){
            $(".hotPlay").animate({left : -723*6},0);
            cot = 6;
        }
        $(".hotPlay").stop().animate({left : -723*(--cot)},2000);
        timer1 = setInterval(move1,4000)
    })
    /*********************preference************/
    $(".right li").bind("mouseover mouseout",function(){
        $(this).toggleClass("info")
    })
    /*********Shopping_navigation*************/
    $(".Shopping_navigation li:not(:first-child),#logo li:not(:first-child)").bind("mouseover mouseout",function(){
        $(this).toggleClass("info")
    })
    /******************help*************/
    $(".help a:not(:first-child)").mouseover(function(){
        $(this).css("color","#d32402")
    })
    $(".help a:not(:first-child)").mouseout(function(){
        $(this).css("color","#666666")
    })
})