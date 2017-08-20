window.onload = function(){
//1.刷新时弹出的提示框
    var off1 = document.getElementById("turnOff1");
    var off2 = document.getElementById("turnOff2");
    var cover = document.getElementsByClassName("cover")[0];
    if(getCookie("turnoff1") == 1){     //获取缓存turnoff1，
        cover.style.display = "none";
    }
    off1.onclick = function(){
        setCookie('turnoff1','1','15');
        cover.style.display = "none";
    };
    off2.onclick = function(){
        cover.style.display = "none";
    };








};



//设置缓存
function setCookie(k,v,t){
    var date = new Date();
    date.setDate(date.getDate()+t/1);
    document.cookie = k+'='+v+';expires='+date.toGMTString();
}
//获取缓存
function getCookie(k){
    var arr1 = document.cookie.split('; ');
    for(var i=0;i<arr1.length;i++){
        var arr2 = arr1[i].split('=');
        if(arr2[0] == k){
            return arr2[1];
        }
    }
}





