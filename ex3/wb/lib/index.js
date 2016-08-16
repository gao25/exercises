function Cale(monthName,month,year){
  this.month=month||new Date().getMonth();
  this.monthName=monthName;
  this.year=year||new Date().getFullYear();
  this.init();
  this.now();
};

//页面显示
Cale.prototype.init=function(){
  $('tbody').find('td').text(" ");
  var dateCount=this.DateCount(),
      week=this.WhichWeek();
      $('.year').text(this.year);
      $('.month').text(this.monthName[this.month]);
      for(var i=0;i<dateCount;i++){
        $('tbody').find('td').eq(week+i).text(i+1);
      };
};

//当前月第一天是星期几
Cale.prototype.WhichWeek=function(){
  var month=this.month,
      year=this.year,
      date=new Date(year,month,1);
      week=date.getDay();
      return week;
};

//当前月的天数
Cale.prototype.DateCount=function(){
  var month=this.month,
      year=this.year,
      date=new Date(year,month+1,0),
      dateCount=date.getDate();
      return dateCount;
};

//当前日期标注
Cale.prototype.now=function(){
  var date=new Date();
  if(date.getFullYear()==this.year&&date.getMonth()==this.month){ 
    $('tbody').find('td').eq(this.WhichWeek()+date.getDate()-1).css('backgroundColor','#dff0d8');
  }
}

$(document).ready(function(){

  var monthName=['January','February','March','April','May','June','July','August','September','October','November','December'],
      newCale=new Cale(monthName),
      year=$('.year').text(),
      Month=$('.month').text(),
      num=monthName.indexOf(Month);

  //点击事件
  $('.click').each(function(){
    $(this).click(function(){
      if($(this).hasClass('right')){
          if(num==11){
            num="0";
            year++;
          }else{
            num=parseInt(num)+1;
          }
          
        }

      else{
          if(num==0){
            year--;
            num=11;
          }
         else{
            num=num-1;
            if(num==0){
              num="0";
            }
          }
          
        }
        $('tbody').find('td').css('backgroundColor','none');
        var newCale=new Cale(monthName,num,year);
    })
   
  })


});