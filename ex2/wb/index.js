$(document).ready(function(){
    init();

});
    //初始获取扑克牌数字
    function init(){
      var len=$('.box').length;
      for(var i=0;i<len;i++){
        var num =$('.box').eq(i).attr('num');
        var html=initSide(num);
        $('.box').eq(i).html(html);
      }
    };

    //初始两边的数字
    function initSide(n){
      var left="<div class='left'>"+
                          "<div>"+
                              "<div class='number'>"+n+"</div>"+
                              "<img src='images/1.png'>"+
                          "</div>"+
                        "</div>",

              right="<div class='right'>"+
                          "<div>"+
                              "<div class='number'>"+n+"</div>"+
                              "<img src='images/1.png'>"+
                          "</div>"+
                        "</div>";
       var center=initCenter(n);               
       var html=left+center+right;                    
       return html;                     
    };

    //中间的
    function initCenterSide(n){
      var centerL="<div class=centerL>",
             centerR="<div class=centerR>",
             centerC="<div class='centerC'>";
       //2-3      
      if(n<=3){
          for(var i=1;i<=n;i++){
            if(i==n){
              centerC+="<div class='img-end'></div></div>";
               centerL+="</div>";
               centerR+="</div>";
            }else{
               centerC+= "<div class='img'></div>"; 
            } 
          }
          return (centerL+centerC+centerR);
      }
      //4-6
      if(n>=4&&n<=6){
        if(n%2==0){
          for(var i=1;i<=n/2;i++){
              if(i==n/2){
                centerL+="<div class='img-end'></div></div>"; 
                centerR+="<div class='img-end'></div></div>"; 
              }else{
                  centerL+= "<div class='img'></div>"; 
                  centerR+= "<div class='img'></div>"; 
              }
          }
             centerC+="</div>";
        }else{
           centerC="<div class='centerC self'>";
          for(var i=1;i<=2;i++){
              if(i==2){
                centerL+="<div class='img-end'></div></div>"; 
                centerR+="<div class='img-end'></div></div>"; 
              }else{
                 centerL+= "<div class='img'></div>"; 
                 centerR+= "<div class='img'></div>"; 
              }
          }
          centerC+="<div class='img '></div></div>";
        }
         return (centerL+centerC+centerR);
        }
        //7-10
        if(n>=7&&n<=10){
            if(n/2<=4){
              for(var i=1;i<=3;i++){
                if(i==3){
                  centerL+="<div class='img-end'></div></div>"; 
                  centerR+="<div class='img-end'></div></div>"; 
                }else{
                  centerL+= "<div class='img'></div>"; 
                  centerR+= "<div class='img'></div>"; 
                }
              }
            }else{
              for(var i=1;i<=4;i++){
                if(i==3){
                   centerL+="<div class='img-end'></div>"; 
                   centerR+="<div class='img-end'></div>"; 
                }
                if(i==4){
                   centerL+="<div class='img-end'></div></div>"; 
                   centerR+="<div class='img-end'></div></div>"; 
                }
                if(i<3){
                   centerL+= "<div class='img'></div>"; 
                   centerR+= "<div class='img'></div>"; 
                }
              }
            }
            if(n/2==4){
              centerC="<div class='centerC self1'>";
              centerC+="<div class='img'></div><div class='img-end'></div></div>"; 
            }
            else if(n/2==4.5){
                centerC="<div class='centerC self'>";
                centerC+="<div class='img'></div></div>"; 
            }
             else if(n/2==5){
                 centerC="<div class='centerC self2'>";
               centerC+="<div class='img '></div><div class='img-end'></div></div>"; 
            }
            else{
               centerC="<div class='centerC self1'>";
               centerC+="<div class='img hidden'></div><div class='img-end'></div></div>"; 
            }

            return (centerL+centerC+centerR);
        }

      }

  


    //初始中间
    function initCenter(n){
      var center="<div class='center clear'>";
            center+=initCenterSide(n)+"</div>";
            return center;
       }
      
                           
     
      

