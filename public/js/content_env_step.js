var seed_arr = '';
//var seed_imgs = new Array();

var date = new Date();
var days = new Date(date.getFullYear(), date.getMonth() +1, 0).getDate();
// var lastDate = new Date(year, month, 0).getDate();

var year = date.getFullYear();
var month = date.getMonth() + 1;

// //씨앗 해당 연, 월
// //var month = date.getFullYear() + "년" + (date.getMonth() + 1) + "월 입니다.";
// //console.log(year);
// //console.log(month);

// //씨앗 나열
// var itemList=[];

for (var i=1; i<=days; i++){
    var div = document.createElement("div");
    div.setAttribute("id", "seed_img");
    document.getElementById("content_env_step").appendChild(div);

    var img = document.createElement("img");
    img.setAttribute("src", "./imgs/seed.png");
    img.setAttribute("style", "width: 150px; height: 150px");
    img.setAttribute("id", [i]);
    // img.setAttribute("class", "seed_img");
    // img.setAttribute("class", "seed_img"+[i]);
    var seed_img = document.getElementById("seed_img").appendChild(img);
}


// $('div').children()
//const elements = document.getElementById('content_env_step');

// for (var i=1; i<=days; i++){
//     const elements = document.getElementsByClassName('seed_img')[i];
//     console.log(elements);
//     // elements.addEventListener("click", )
// }

document.getElementById('1').addEventListener( "click", () => {
    console.log("seed1 페이지로 이동");
    // window.location./href='./todolist_env_step.html'
});





// //씨앗 해당 월 일수 나열
// // var number_seed = new Array();
// // var number_seed = [];
// var month_seed = new Array();
// // var month_seed_array = new Array();
// // var seed_date = new Array();
// // // var seed_img = "<img src='/imgs/seed.png' width='150px' height='150px'>"
// function make_seed(){
// for(var i=1; i<=days; i++){
//     //number_seed += i;
//     month_list += seed_img;
//     //month_seed_array[i] += seed_img;
//     //seed_date[i] += year +'년 '+ month + '월 ' + i + '일'
//     //console.log(i);
// }

// // var month_list = documnet.createElement("img");
// //     for(var i = 1; i<=days; i++){
// //         month_list = i + './imgs/seed.png';
// //     }
// //     month_list += month_list
//     // month_list += ">";
// document.getElementById("content_env_step").append(month_list);
// }
// make_seed();

// for(var i=1; i<=days; i++){
//     number_seed += i;
//     month_seed += seed_img;
//     month_seed_array[i] += seed_img;
//     seed_date[i] += year +'년 '+ month + '월 ' + i + '일'
//     //console.log(i);
// }

// for(var i=1; i<=days; i++){
    
// }

// var seed_list = document.getElementById("content_env_step").innerHTML = month_seed;
// seed_list;

// var obj = {};
/////////////////////////////////////////

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


//todolist로 화면이동
const location_env_todo = document.querySelectorAll(".location_env_todo");
for (const el of location_env_todo){
    el.addEventListener( "click", () => {
        console.log("todolist 페이지로 이동");
        window.location.href='./todolist_env_step.html'
    })
}