// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
// let time1 = new Date().Format("yyyy-MM-dd");
// let time2 = new Date().Format("yyyy-MM-dd HH:mm:ss");
Date.prototype.format = function(fmt) {
  var o = {
    "M+" : this.getMonth()+1,                 //月份
    "d+" : this.getDate(),                    //日
    "h+" : this.getHours(),                   //小时
    "m+" : this.getMinutes(),                 //分
    "s+" : this.getSeconds(),                 //秒
    "q+" : Math.floor((this.getMonth()+3)/3), //季度
    "S"  : this.getMilliseconds()             //毫秒
  };
  if(/(y+)/.test(fmt))
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(var k in o)
    if(new RegExp("("+ k +")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
  return fmt;
}


//身份证ID判断
function Isyx(yx) {
  var reyx = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
  return (reyx.test(yx));
}


var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];// 加权因子
var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];// 身份证验证位值.10代表X
export function IdCardValidate(idCard) {
  idCard = trim(idCard.replace(/ /g, ""));
  if (idCard.length == 15) {
    return isValidityBrithBy15IdCard(idCard);
  } else if (idCard.length == 18) {
    var a_idCard = idCard.split("");// 得到身份证数组
    if (isValidityBrithBy18IdCard(idCard) && isTrueValidateCodeBy18IdCard(a_idCard)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
/**
 * 判断身份证号码为18位时最后的验证位是否正确
 * @param a_idCard 身份证号码数组
 * @return
 */
function isTrueValidateCodeBy18IdCard(a_idCard) {
  var sum = 0; // 声明加权求和变量
  if (a_idCard[17].toLowerCase() == 'x') {
    a_idCard[17] = 10;// 将最后位为x的验证码替换为10方便后续操作
  }
  for (var i = 0; i < 17; i++) {
    sum += Wi[i] * a_idCard[i];// 加权求和
  }
  let valCodePosition = sum % 11;// 得到验证码所位置
  if (a_idCard[17] == ValideCode[valCodePosition]) {
    return true;
  } else {
    return false;
  }
}
/**
 * 通过身份证判断是男是女
 * @param idCard 15/18位身份证号码
 * @return 'female'-女、'male'-男
 */
function maleOrFemalByIdCard(idCard) {
  idCard = trim(idCard.replace(/ /g, ""));// 对身份证号码做处理。包括字符间有空格。
  if (idCard.length == 15) {
    if (idCard.substring(14, 15) % 2 == 0) {
      return 'female';
    } else {
      return 'male';
    }
  } else if (idCard.length == 18) {
    if (idCard.substring(14, 17) % 2 == 0) {
      return 'female';
    } else {
      return 'male';
    }
  } else {
    return null;
  }
}
function isValidityBrithBy18IdCard(idCard18) {
  var year = idCard18.substring(6, 10);
  var month = idCard18.substring(10, 12);
  var day = idCard18.substring(12, 14);
  var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
  // 这里用getFullYear()获取年份，避免千年虫问题
  if (temp_date.getFullYear() != parseFloat(year)
    || temp_date.getMonth() != parseFloat(month) - 1
    || temp_date.getDate() != parseFloat(day)) {
    return false;
  } else {
    return true;
  }
}
export function isphone(inputString) {
  var partten = /^1[3,5,8,2,4,6,7,9]\d{9}$/;
  var fl = false;
  if (partten.test(inputString)) {
    //alert('是手机号码');
    return true;
  }
  else {
    return false;
    //alert('不是手机号码');
  }
}
function isValidityBrithBy15IdCard(idCard15) {
  var year = idCard15.substring(6, 8);
  var month = idCard15.substring(8, 10);
  var day = idCard15.substring(10, 12);
  var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
  // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
  if (temp_date.getYear() != parseFloat(year)
    || temp_date.getMonth() != parseFloat(month) - 1
    || temp_date.getDate() != parseFloat(day)) {
    return false;
  } else {
    return true;
  }
}
//去掉字符串头尾空格
function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

function isEmail(str) {
  var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
  return reg.test(str);
}

