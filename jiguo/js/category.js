$(function(){
    var div_ZCindex = $('.ZCindex')
    console.log(div_ZCindex);
    $('#kuwan_cut li').on('click',function(){
        console.log($(this).index());
        $('#kuwan_cut li').removeClass('act111')
        $(this).addClass('act111')
        div_ZCindex.hide();
        div_ZCindex.eq($(this).index()).show()
    })
})
$.ajax({
    url:'http://192.168.1.64:3000/play/new',
    success:function(res1){
        a(res1);
    }
});
function a(res1){
    console.log(res1);
    // 将数据传给dot展示区域
    var dot_teme = doT.template(document.getElementById('list_tem').innerText);
    list.innerHTML = dot_teme(res1);
}
$.ajax({
    url:'http://192.168.1.64:3000/play/hot',
    success:function(res){
        b(res);
    }
});
function b(res){
    console.log(res);
    var dot_teme = doT.template(document.getElementById('list_tem2').innerText);
    list2.innerHTML = dot_teme(res);
}
