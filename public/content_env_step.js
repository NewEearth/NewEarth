var seed_arr = '';
//var seed_imgs = new Array();

var date = new Date();
var days = new Date(date.getFullYear(), date.getMonth() +1, 0).getDate();
// var lastDate = new Date(year, month, 0).getDate();

var year = date.getFullYear();
var month = date.getMonth() + 1;

//씨앗 해당 연, 월
//var month = date.getFullYear() + "년" + (date.getMonth() + 1) + "월 입니다.";
//console.log(year);
//console.log(month);

//씨앗 나열
var itemList=[];


//씨앗 해당 월 일수 나열
// var number_seed = new Array();
var number_seed = [];
var month_seed = new Array();
var month_seed_array = new Array();
var seed_date = new Array();
var seed_img = "<img src='/imgs/seed.png' width='150px' height='150px'>"

for(var i=1; i<=days; i++){
    number_seed += i;
    month_seed += seed_img;
    month_seed_array[i] += seed_img;
    seed_date[i] += year +'년 '+ month + '월 ' + i + '일'
    //console.log(i);
}

for(var i=1; i<=days; i++){
    
}

var seed_list = document.getElementById("content_env_step").innerHTML = month_seed;
seed_list;

var obj = {};
//{ seed_date[i], month_seed_array[i]}

// onclick = seed_date[i] 와 일치하는 Date의 data 출력



// var seed_TestArrayList = new Object();
// // var seed_keyArrayList = number_seed;
// // var seed_valArrayList = month_seed;

// for(var i = 1; i<=number_seed.length; i++){
//     let key = number_seed[i];
//     seed_TestArrayList[key] = month_seed[i];
// }

/**
 * 
for(var i=1; i<=days; i++){
    number_seed += i;
    month_seed[i] +=seed_img;
    //console.log(i);
}
var seed_list = document.getElementById("content_env_step").innerHTML = month_seed;
seed_list;

var seed_TestArrayList = new Object();
// var seed_keyArrayList = number_seed;
// var seed_valArrayList = month_seed;

// for(var i = 1; i<=number_seed; i++){
//     let key = number_seed[i];
//     seed_TestArrayList[key] = month_seed[i];
// }
 */


//console.log(month_seed);
//console.log(seed_list);

// // 씨앗 클릭 시, 해당 todolist로 이동
// for(var i=1; i<=month_seed.length; i++){
//     month_seed[i].addEventListener('click', handleClick());
// }

// function handleClick(){
//     var $div = document.createElement('div');
//     $div.setAttribute('id', 'todolist_date');
//     var $
// }

// function handleClick(e){
//     get_seed_data;
// }

// document.getElementById("content_env_todo_title").innerHTML = today;