/**
 * Created by my on 2016/9/29.
 */
$(function(){
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
        $(".code").html(auth);
    }
    $(".cg").click(function(){
        create();
    });
    //验证码输入验证
    var authCode_val = "";
    $("input").eq(2).blur(function(){
        authCode_val = $("input").eq(2).val();//确认验证码输入框内容
        if( authCode_val != $(".code").html()){
            $("input").eq(2).css("border","1px solid red");
        }else{
            $("input").eq(2).css("border","1px solid green");
        }
    })

    $(".login_btn").click(function(){
        //alert("ok");
        if($(".user").val() == "" && $(".password").val() == ""){
            $("span").eq(0).html(" 请输入用户名!");
            $("span").eq(1).html(" 请输入密码!");
        }else if($(".user").val() == "" && $(".password").val() != ""){
            $("span").eq(0).html(" 请输入用户名!");
        }else if($(".user").val() != ""&& $(".password").val() == ""){
            $("span").eq(1).html(" 请输入密码!");
        }else if($(".user").val() == $.cookie("phone")&& $(".password").val() == $.cookie("pwd") && $(".ipt3").val() == $(".code").html()){
            //alert("登陆成功");
            open("../index.html");
        }
    })
})