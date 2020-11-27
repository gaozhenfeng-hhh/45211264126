$(function(){
    var inner_ = document.getElementsByClassName('inner')[0];
    var img_div = document.getElementsByClassName('images');
    var images = img_div[0].children;
    var timer = null,timer1 = null;
    var index = 0;
    inner_.scrollLeft=images[0].offsetWidth;
    function automove(){
        timer = setInterval(function(){
            clearInterval(timer1)
            index++;
            index>=images.length/4?index=1+(inner_.scrollLeft = 0):'';
            // 图片滚动
            var step = 0;
            var maxstep = 30;
            var start = inner_.scrollLeft;
            var end = (inner_.offsetWidth)*index;
            var everystep = (end - start)/maxstep;
            timer1 = setInterval( function(){
                step++;
                step>=maxstep?step = 0+clearInterval(timer1):'';
                start+=everystep;
                inner_.scrollLeft = start;
            },10);
        },1000)
    }
    automove()
    // 鼠标悬浮停止计时器，离开执行轮播
    // 可以再加一个计时器，计时器内设置参数，参数达到一定值清除计时器
    for(var j=0;j<images.length;j++){
            images[j].onmouseenter=function(){
                clearInterval(timer);
            };
            images[j].onmouseleave=function(){
                automove();
            };
    }
    var left_div = document.getElementsByClassName('leftClick')[0];
    var right_div = document.getElementsByClassName('rightClick')[0];
    // 左右点击回滚,可以再加一个计时器，计时器内设置参数，参数达到一定值清除计时器
    var timer2=null
    left_div.onclick = function(){
        var step = 0;
        timer2 = setInterval(function(){
            step++;
            var maxstep = 10;
            var everystep = 1000/maxstep;
            inner_.scrollLeft = inner_.scrollLeft-everystep;
            console.log(inner_.scrollLeft)
            if(step==10){clearInterval(timer2);step=0;};
        },10)
        if(inner_.scrollLeft==inner_.offsetWidth){
            inner_.scrollLeft=inner_.offsetWidth;
            clearInterval(timer2);
        }
    }
    left_div.onmouseenter=function(){
        clearInterval(timer);
    }
    left_div.onmouseleave=function(){
        automove();
        clearInterval(timer2);
    }
    right_div.onclick = function(){
        var step = 0;
        timer2 = setInterval(function(){
            step++;
            var maxstep = 10;
            var everystep = 1000/maxstep;
            inner_.scrollLeft = inner_.scrollLeft+everystep;
            console.log(inner_.scrollLeft)
            if(step==10){clearInterval(timer2);step=0;};
        },10);
        if(inner_.scrollLeft==inner_.offsetWidth*3){
            inner_.scrollLeft=inner_.offsetWidth*3;
        }
    }
    right_div.onmouseenter=function(){
        clearInterval(timer);
    }
    right_div.onmouseleave=function(){
        automove();
    }
    //加载更多
    $('.add').on('click',function(){
        $.ajax({
            url:'http://192.168.1.64:3000/play/new',
            success:function(res){
                a(res);
            }
        });
        function a(res){
            // console.log(res);
            var dot_teme = doT.template(document.getElementById('list_tem').innerText);
            list.innerHTML = dot_teme(res);
        }
    })
$('.topSearch').on('click','.login000',function(){
    console.log(1111);
    $('.box').css('display','block');
})
$('.xxx').on('click',function(){
    $('.box').css('display','none');
})
$('#but').click(function () {
    //请求数据
    var name = $('#name').val();
    var pass = $('#password').val();
    // var ajax = new XMLHttpRequest() || new ActiveXobjeck('Microsoft.XMLHTTP');
    console.log(name)
    $.ajax({
        type: 'post',
        url: 'http://192.168.1.64:3000/users/login',
        data: {
            username: name,
            password:pass,
        },
        success: function (res) {
            console.log(res);
            if (res.status == 200) {
                alert('登陆成功');
                $('.box').css('display', 'none');
            } else {
                alert(res.msg);
            }
        },
        dataType: 'json',
    })
})
$('.topSearch').on('click','.regin000',function(){
    window.open('./regist.html')
})


































});