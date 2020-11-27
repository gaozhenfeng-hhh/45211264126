$(".menulis>ul").on('click','li',function(){
    // console.log($(this).index());
    $(".menulis>ul>li").removeClass('ZCactive');
    $(this).addClass('ZCactive');
    $(".menulis>div").hide();
    $(".menulis>div").eq($(this).index()).show();
});
$(".a1").on("click",function(){
    $(".floatBox").hide();
});
// $(document).on("scroll",function(){
//     setTimeout(function(){
//         var scrollbo = -$(document).scrollTop()+'px';
//         $(".floatBox").attr("style","bottom:"+scrollbo)
//     },1)
// })