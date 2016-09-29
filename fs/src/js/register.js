/**
 * Created by my on 2016/9/29.
 */
$(function(){
    //验证手机号是否合法
    var span_phone = $("form span").eq(1);//电话号码判断框
    $("input").eq(0).blur(function(){
        //alert("ok");
        var regPhone = /^1[3578]\d{9}$/;
        var phone_val = $("input").eq(0).val();//电话号码的输入框
        if(phone_val == ""||!regPhone.test(phone_val)){
            span_phone.html(" 请填写正确的手机号码!");
            span_phone.css("color","red");
        }else{
            span_phone.html(" √");
            span_phone.css("color","green");
        }
    })
    //邮箱验证
    var span_mail = $("form span").eq(4);//邮箱判断框
    $("input").eq(2).blur(function(){
        var regMail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
        var mail_val = $("input").eq(2).val();//邮箱输入框
        if( mail_val == "" || !regMail.test(mail_val)){
            span_mail.html(" 请输入正确的邮箱!");
            span_mail.css("color","red");
        }else{
            span_mail.html(" √");
            span_mail.css("color","green");
        }
    })
    //设置密码
    var span_password = $("form span").eq(6);//密码判断框
    $("input").eq(3).blur(function(){
        var regPassword =/^[a-zA-Z0-9_-]{6,20}$/;
        var password_val = $("input").eq(3).val();//密码输入框
        if( password_val == "" ){
            span_password.html(" 您输入的密码为空!");
            span_password.css("color","red");
        }else if( !regPassword.test(password_val) ){
            span_password.html(" 您输入的密码格式错误!");
            span_password.css("color","red");
        }else{
            span_password.html(" OK");
            span_password.css("color","green");
        }
    })
    //确认密码
    var span_confirm = $("form span").eq(8);//确认密码判断框
    $("input").eq(4).blur(function(){
        var confirm_val = $("input").eq(4).val();//确认密码输入框
        if( confirm_val != $("input").eq(3).val()){
            span_confirm.html(" 您两次输入的密码不一致！")
            span_confirm.css("color","red");
        }else{
            span_confirm.html(" OK");
            span_confirm.css("color","green");
        }
    })
    //产生4位验证码
    create();
    function create(){
        var sum=0;
        var auth="";
        while(sum<4){
            var num=parseInt(Math.random()*74+49);
            if( num < 58 || num >= 65 && num <= 90 || num > 96){
                sum++;
                auth+=String.fromCharCode(num)
            }
        }
        $(".authCode").html(auth);
    }
    $(".change").click(function(){
        create();
    });
    //验证码输入验证
    var authCode_val = "";
    $("input").eq(5).blur(function(){
        authCode_val = $("input").eq(5).val();//确认密码输入框内容
        if( authCode_val != $(".authCode").html()){
            $(".putCode").css("border","1px solid red");
        }else{
            $(".putCode").css("border","1px solid green");
        }
    })

    //立即注册
    $(".reg_btn").click(function(){
        if(span_phone.html() == " √" && span_mail.html() == " √" && span_password.html() == " OK"
            && span_confirm.html() == " OK" && authCode_val == $(".authCode").html()){
            $.cookie("phone",$("input").eq(0).val(),15)
            $.cookie("pwd",$("input").eq(3).val(),15)
            alert("注册成功");
        }
    })
})

