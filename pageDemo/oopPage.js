/**
 * Created by Administrator on 2017/4/19.
 */

function autoPage(page,total){
    this.intr =function(parent){
      var pageParent = document.getElementById(parent);

        var showPages = function( page,total){
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


            };
        pageParent.onclick = function(e){
            var e = e || window.event;
            var target = e.target || e.srcElement;
            if(target.nodeName.toLowerCase() == 'a'){

                if(target.innerHTML=='上一页'){
                    page--;
                    xhr(page);
                    engine();
                }else if(target.innerHTML=='下一页') {
                    page++;
                    xhr(page);
                    engine();
                }else if(target.innerHTML=='...'){
                    page =parseInt( prompt("请输入跳转页数"));
                    if(isNaN(page)){
                        return ;
                    }else if(page>total){
                        page = total;
                        xhr(page);
                    }
                    engine();
                }
                else{
                    page = parseInt(target.innerHTML);
                    xhr(page);
                    engine();
                }
            }
        };
        var engine = function(){
            pageParent.innerHTML=showPages(page,total);
        };
        function xhr(pageNow){
                var xhr = null;
                if(window.XMLHttpRequest){  //其它浏览器
                    xhr = new XMLHttpRequest();
                }else{		//老IE
                    xhr = new ActiveXObject('Microsoft.XMLHTTP');
                }
                xhr.onreadystatechange = function(){
                    if(xhr.readyState===4){
                        var data = xhr.responseText;
                        var str = eval(data);
                        var onePage = new autoPage(str[0].page,str[0].total);
                        onePage.intr('js-menu');
                    }
                };

            xhr.open('GET','page.php?page='+pageNow+'',true);
            xhr.send(null);
        }
        engine();
    }
}
