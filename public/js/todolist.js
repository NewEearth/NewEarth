// const { consoleOrigin } = require("firebase-tools/lib/api");

var date = new Date();
var days = new Date(date.getFullYear(), date.getMonth() +1, 0).getDate();
// var lastDate = new Date(year, month, 0).getDate();

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
console.log(year);
console.log(month);
console.log(day);

// 해당 월
// var month = date.getFullYear() + "년" + (date.getMonth() + 1) + "월 입니다.";

var today = year + "년 " + month + "월 " + day + "일";
console.log(today);



// var today = new Date();
// console.log(today);

document.getElementById("content_env_todo_title").innerHTML = today;


// var a=today.format('yyyymmdd');
// console.log(a);

//content_env_step로 화면이동
const location_env_step = document.querySelectorAll(".location_env_step");
for (const el of location_env_step){
    el.addEventListener( "click", () => {
        console.log("환경발자국 페이지로 이동");
        window.location.href='./content_env_step.html'
    })
}