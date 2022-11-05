var seed_arr = '';
//var seed_imgs = new Array();

var date = new Date();
var days = new Date(date.getFullYear(), date.getMonth() +1, 0).getDate();
// var lastDate = new Date(year, month, 0).getDate();

var year = date.getFullYear();
var month = date.getMonth() + 1;

//씨앗 해당 연, 월
var month = date.getFullYear() + "년" + (date.getMonth() + 1) + "월 입니다.";
console.log(year);
console.log(month);

//씨앗 해당 월 일수 나열
var month_seed = "";
var seed_img = "<img src='/imgs/seed.png' width='150px' height='150px'>"

for(var i=1; i<=days; i++){
    month_seed += i + seed_img;
    console.log(i);
}
var seed_list = document.getElementById("content_env_step").innerHTML = month_seed;
seed_list;

console.log(seed_list);

//씨앗 클릭 시, 해당 todolist로 이동
// for(var i=1; i<=seed_list.length; i++){
//     seed_list[i].addEventListener('click', handleClick);
// }

// function handleClick(e){
//     this.
// }
