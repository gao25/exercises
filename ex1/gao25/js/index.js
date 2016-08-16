$(".pointer1").click(function(){
    var rotate_num=Math.floor(Math.random()*6+4)
    var deg=parseInt(prompt("请输入角度："))
    var rotate_time=rotate_num*1+deg/360
    var rotate=parseInt(rotate_num*360+deg)
    $(".rotate-table1").css({
            "-webkit-transform":"rotate(-"+rotate+"deg)",
            "-webkit-transition":"all" +" "+rotate_time+"s ease-in-out"
        });
    console.log(rotate_num);
    setTimeout(function(){
        alert("恭喜您中奖了！")
        console.log(deg);
        $(".rotate-table1").css({
            "-webkit-transform":"rotate(-"+deg+"deg)",
            "-webkit-transition":"all" +" "+0+"s ease-in-out"
        });
    },rotate_time*1000)
})
    $(".pointer2").click(function(){
        var rotate_num=Math.floor(Math.random()*6+4)
        var deg=parseInt(prompt("请输入角度："))
        var rotate_time=rotate_num*1+deg/360
        var rotate=parseInt(rotate_num*360+deg)
        $(".pointer2").css({
            "-webkit-transform":"rotate("+rotate+"deg)",
            "-webkit-transition":"-webkit-transform" +" "+rotate_time+"s ease-in-out"
        });
        console.log(rotate_num);
        setTimeout(function(){
            alert("恭喜您中奖了！")
            console.log(deg);
            $(".pointer2").css({
            "-webkit-transform":"rotate("+deg+"deg)",
            "-webkit-transition":"-webkit-transform" +" "+0+"s ease-in-out"
        });
        },rotate_time*1000)
    })
