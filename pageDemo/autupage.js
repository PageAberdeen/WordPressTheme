/**
 * Created by Administrator on 2017/4/17.
 */

window.onload=function(){
    total = 50;
    engine();
};


function showPages( page,total){ //page 当前页数  total 总页数  page=1
    var str ='<a class="active">' + page +'</a>';
    for(var i = 1; i <= 3; i++){
        if(page-i > 1){
            str = '<a>' + (page - i) + '</a>' + str;
        }
        if(page + i <total){
            str = str + '<a>' +(page + i) + '</a>';
        }
    }

    if(page-4 > 1){
        str = '<a>...</a>' + str;
    }

    if(page > 1){
        str = '<a>上一页</a>' + '<a>'+ 1 + '</a> ' + str;
    }

    if(page + 4<total){
        str = str + '<a>...</a>';
    }

    if(page < total){
        str =str + '<a>' + total + '</a>' + '<a>下一页</a>';
    }

    return str;


}



var page = 1;

var total = null;

var pageParent= document.getElementById('js-menu');

pageParent.onclick = function(ev){
    var ev = ev || window.event;
    var target = ev.target || ev.srcElement;
    if(target.nodeName.toLowerCase() == 'a'){
        if(target.innerHTML=='上一页'){
            page--;
            engine();
        }else if(target.innerHTML=='下一页') {
            page++;
            engine();
        }else if(target.innerHTML=='...'){
            page =parseInt( prompt("请输入跳转页数"));
            if(isNaN(page)){
                  return ;
            }else if(page>total){
                page = total
            }
            engine();
        }
        else{
            page = parseInt(target.innerHTML);
            engine();
        }
    }
};
 function engine(){
     pageParent.innerHTML=showPages( page,total);
 }
