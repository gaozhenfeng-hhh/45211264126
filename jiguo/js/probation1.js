$(function(){
    var div_ZCindex = $('.ZCindex')
    var div_ZCindex1 = $('.ZCindex1')
    var div_publi = $('.publicDemo')
    // 大众
    $('#kuwan_cut li').on('click',function(){
        $('#kuwan_cut li').removeClass('act11')
        $(this).addClass('act11')
        div_ZCindex.hide();
        // console.log($(this).index());
        div_ZCindex.eq($(this).index()).show()
    });
    // 体验师
    $('#kuwan1_cut li').on('click',function(){
        $('#kuwan1_cut li').removeClass('act11')
        $(this).addClass('act11')
        div_ZCindex1.hide();
        // console.log($(this).index());
        div_ZCindex1.eq($(this).index()).show()
    });
    $('#pro_cut li').on('click',function(){
        $('#pro_cut li').removeClass('act111')
        $(this).addClass('act111')
        div_publi.hide();
        div_publi.eq($(this).index()).show()
    });
    // console.log($('.ul_>li'))
    $('.ul_').on("click", "li",function(){
            // console.log('手车式');
            window.open('./probation.html');
    });
})

$.ajax({
    url:'http://192.168.1.64:3000/useing/public',
    success:function(res1){
        a(res1);
    }
});
function a(res1){
    console.log(res1);
    // 将数据传给dot展示区域
    var dot_teme = doT.template(document.getElementById('list_tem').innerText);
    list.innerHTML = dot_teme(res1);
    var dot_teme = doT.template(document.getElementById('list_tem2').innerText);
    list2.innerHTML = dot_teme(res1);
    var dot_teme = doT.template(document.getElementById('list_tem3').innerText);
    list3.innerHTML = dot_teme(res1);
    var dot_teme = doT.template(document.getElementById('list_tem4').innerText);
    list4.innerHTML = dot_teme(res1);
}
$.ajax({
    url:'http://192.168.1.64:3000/useing/master',
    success:function(res2){
        b(res2);
    }
});
function b(res2){
    console.log(res2);
    // 将数据传给dot展示区域
    var dot_teme = doT.template(document.getElementById('list_tem5').innerText);
    list5.innerHTML = dot_teme(res2);
    var dot_teme = doT.template(document.getElementById('list_tem6').innerText);
    list6.innerHTML = dot_teme(res2);
    var dot_teme = doT.template(document.getElementById('list_tem7').innerText);
    list7.innerHTML = dot_teme(res2);
    var dot_teme = doT.template(document.getElementById('list_tem8').innerText);
    list8.innerHTML = dot_teme(res2);
}
    function windOpen(){
        console.log('手车式');
        window.open('./probation.html');
    }
