$(function(){
// 获取验证码
var i=0;
var timer=null;
$('button').on('click',function(){
    i=10;
    timer=setInterval(function(){
        i--;
        $('button').text('请'+i+'秒后重试');
        if(i<=0){
            clearInterval(timer);
            $('button').text('重新获取验证码');
        }
    },1000)
});
//表单验证
var p_number=/^1[358]\d{9}$/;
var namer=/\w[\u4e00-\u9fa5]{4,8}$/;
var password_=/\w{6,12}$/;
$('#phone').on('blur',function(){
    console.log(p_number.test($('#phone').val()));
    if($('#phone').val().length==0){
        alert('手机号不能为空');
    }else if(!p_number.test($('#phone').val())){
        alert('请输入正确的手机号');
        return false;
    }
});
$('#tpyz').on('blur',function(){
    if($('#tpyz').val()!== 'r2b7' ){
        alert('请输入正确的图片验证');
        return false;
    }
});
$('#number').on('blur',function(){
    if($('#number').val().length!==4){
        alert('验证码必须是4位数');
        return false;
    }
});
$('#username').on('blur',function(){
    console.log(namer.test($('#username').val()));
    if(namer.test($('#username').val())){
        alert('用户名输入错误');
        return false;
    }
});
$('#pass').on('blur',function(){
    if(password_.test($('#pass').val())){
        alert('密码输入错误');
        return false;
    }
});
$('#pass_').on('blur',function(){
    if($('#pass_').val()!==$('#pass').val()){
        alert('两次输入的密码不相同');
        return false;
    }
});

$('#submit').click(function(){
    window.open("./index.html");
});

$('#submit').click(function(){
    $.ajax({
        url:'http://192.168.1.64:3000/users/register',
        type:'post',
        data:{
            phone:$('#phone').val(),
            code:$('#tpyz').val(),
            username:$('#username').val(),
            pass:$('#pass').val()
        },
        success:function(res){
            console.log(res);
            if(res.msg='注册成功'){
                window.open("./index.html");
            }
        },
        dataType:'json'
    })
    return false;
});

});