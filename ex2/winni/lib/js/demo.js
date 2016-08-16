/**
  *改类用于处理POP3邮件的解析
  *
  * @author  wang-zifei.com        //标明开发该类模块的作者
  * @version 1.0.0.128  2015/7/17  //标明该类模块的版本及日期，以空格隔开。
  * @since   js1.5                 //标明运行环境信息
  */


function arrNum(num){
  var arr = [];
  switch(num){
    //2,3
    //[x轴位置，y轴位置，正反]
    case 2:
    case 3:  arr = [[0,1,1],[0,-1,-1],[0,0,1]];
             break;
    case 4:
    case 5: arr = [ //4,5
                [1,1,1],
                [-1,1,1,],
                [1,-1,-1],
                [-1,-1,-1],
                [0,0,1]
              ];
              break;
    case 6:
    case 7:
    case 8: arr = [ //6,7,8
                [1,1,1],
                [-1,1,1,],
                [1,-1,-1],
                [-1,-1,-1],
                [1,0,1],
                [-1,0,1],
                [0,-0.5,-1],
                [0,0.5,1]
              ];
              break;
    case 9: arr = [ //9
                [1,1,1],
                [-1,1,1,],
                [1,-1,-1],
                [-1,-1,-1],
                [1,0.6,1],
                [-1,0.6,1],
                [1,-0.6,-1],
                [-1,-0.6,-1],
                [0,0,1]
              ];
              break;
    case 10: arr = [ //10
                [1,1,1],
                [-1,1,1,],
                [1,-1,-1],
                [-1,-1,-1],
                [1,0.6,1],
                [-1,0.6,1],
                [1,-0.6,-1],
                [-1,-0.6,-1],
                [0,0.3,1],
                [0,-0.3,-1]
              ];
              break;
  }
  return arr;
}


function createPoker(no){
  var list_str = '<div class="poker-container">\
      <p class="cursor-num">'+no+'</p>\
      <div class="heart-container">';
  var temp_arr = arrNum(no);
  console.log(temp_arr);
  //以列画爱心
  for(var i = 0; i < no; i++){
    var className = "heart1";
    if(temp_arr[i][2] == -1){
      className = "heart2";
    }
    if(temp_arr[i][1] < 0){
      list_str += '<img src="lib/imgs/heart.png" style="left:'+transPosition(temp_arr[i][0])+'; bottom:'+transPosition(temp_arr[i][1],-1)+'" class="'+className+'">';
    }else{
      list_str += '<img src="lib/imgs/heart.png" style="left:'+transPosition(temp_arr[i][0])+'; top:'+transPosition(temp_arr[i][1])+'" class="'+className+'">';
    }
  }
  list_str += '</div><p class="cursor-num">'+no+'</p></div>';
  $("body").append(list_str);
}

function transPosition(ps,bt){
  switch(ps){
    case 0: return "50%";break;
    case 1: return "0";break;
    case -1: if(bt == -1){return 0;}else{return "100%"}; break;
    case 0.6: return "33.33%"; break;
    case -0.6: return "33.33%"; break;
    case 0.5: return "25%"; break;
    case -0.5: return "25%"; break;
    case 0.3:
    case -0.3: return "16%"; break;
  }
}

$(function(){
  var i = 2;
  for(1; i<=10; i++){
    createPoker(i);
  }
})