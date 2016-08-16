
/**
  *
  * @author  wang-zifei       
  * @version 1.0.0  2016/8/5
  */
  

//创建转盘绑定转动事件
var wheelObj = {
  num : 0,     //转盘个数
  numWheel: function(){ //转盘计数
    this.num++;
  },
  createWheel: function(){
    this.numWheel();
    var main = '<div class="canvas-container opt'+this.num+'">\
          <img src="lib/imgs/wheel.png" class="img-wheel">\
          <img src="lib/imgs/point.png" class="img-point">\
        </div>';
    // var btn = '<div class="control-container opt'+this.num+'">\
    //       <a class="start-btn">开始</a>\
    //     </div>'
    $(".left-container").append(main);
    // $(".right-container").append(btn);
    $(".opt"+this.num).children(".img-point").click(function(){
      var wheel = new startWheel($("select").val());
      if($(this).hasClass("ani-point")){
        $(this).removeClass("ani-point");
      };
      if($(this).prev().hasClass("ani-wheel")){
        $(this).prev().removeClass("ani-wheel");
      };
      var isNext = wheel.disp_prompt();
      if(isNext){
        wheel.startRotate($(this));
        var totaltime = wheel.getTotalTime();
        console.log("time:"+totaltime);
        setTimeout(function(){
          wheel.finishMsg();
        }, totaltime)
      }
    })
  },
  
}

function startWheel(mode){
    this.ring = Math.floor(Math.random()*5 + 5), //圈数生成4<n<10的随机数
    this.angle = 0,   //转过的角度
    this.speed = 1,   //速度， 3s/圈
    this.nums = 0,    //总共转过的圈数
    this.mode = mode;   //旋转模式
  }

startWheel.prototype = {
  //获取转盘旋转的角度
  disp_prompt: function(){
    var rotate = prompt("请输入转盘旋转的角度(0~360)","");
    if(rotate != null && rotate != ""){
      this.angle = rotate;
      console.log(this.angle);
      return true;
    }else{
      return false;
    }
  },
  //初始化转盘确认最终需要转过的圈数
  initWheel: function(){
    this.nums = this.ring + this.angle/360; //转过的圈数
  },
  //开始旋转，赋class
  startRotate: function(self){
    this.initWheel();
    if(this.mode == 1){
      self = self.prev();
      self.addClass("ani-wheel");
    }else{
      self.addClass("ani-point");
    };
    self.css("animationIterationCount", this.nums);
  },
  //转盘结束转动，输出转动角度
  finishMsg: function(){
    if(this.angle > 180){
      alert(this.angle-360);
    }else{
      alert(this.angle);
    }
  },
  //获取总共转动时间
  getTotalTime: function(){
    return this.nums*this.speed*1000;
  }
}



$(function(){
  $(".create-btn").click(function(){
    //var value = $("select").val();
    wheelObj.createWheel();
  })
})

