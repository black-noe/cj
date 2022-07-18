export function setCookie (name, value) {  //存cookies函数
  if (value) {
  var days = 1; //定义一天
  var exp = new Date();
  exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
  // 写入Cookie, toGMTString将时间转换成字符串
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString;
  }
};

export function getCookie(name)//取cookies函数        
{
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
     if(arr != null) return unescape(arr[2]); return null;

}

export function showtime() {  //时间格式
  var date = new Date();
  var seperator1 = "-";
  var seperator2 = ":";
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if(month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
    + " " + date.getHours() + seperator2 + date.getMinutes() 
    + seperator2 + date.getSeconds();
  return currentdate;
}