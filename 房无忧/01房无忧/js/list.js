$('.ZCtab>li').on("touchstart",function(){
    $(".ZCtab>li").removeClass("ZCact");
    $(".ZCtab>li>i").removeClass("ZCact");
    $(this).addClass("ZCact");
    $(this).find("i").addClass("ZCact")
    $(".menban").hide();
    for(var i=0;i<4;i++){
        //移除除了点击对象的b类名 b类名用于判断显示消失
        $(".menban").eq(i).hasClass('b')&&i!=$(this).index()?$(".menban").eq(i).removeClass('b'):'';
    }
    // if语句
    //如果点击对象有b类名，移除如果没有添加
    $(".menban").eq($(this).index()).hasClass('b')?
    ($(".menban").eq($(this).index()).hide(),
    $(this).find("i").removeClass("ZCact"),
    $(this).removeClass("ZCact"),
    $(".menban").eq($(this).index()).removeClass('b')):
    ($(".menban").eq($(this).index()).show(),
    $(this).find("i").addClass("ZCact"),
    $(this).addClass("ZCact"),
    $(".menban").eq($(this).index()).addClass('b'));
});