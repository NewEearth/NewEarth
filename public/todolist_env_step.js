// var date = new Date();
// var days = new Date(date.getFullYear(), date.getMonth() +1, 0).getDate();
// // var lastDate = new Date(year, month, 0).getDate();

// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();
// console.log(year);
// console.log(month);
// console.log(day);

// //해당 월
// //var month = date.getFullYear() + "년" + (date.getMonth() + 1) + "월 입니다.";

// var today = year + "년 " + month + "월 " + day + "일";
// console.log(today);

// document.getElementById("content_env_todo_title").innerHTML = today;

var today = new Date();
console.log(today);

var a=today.format('yyyymmdd');
console.log(a);