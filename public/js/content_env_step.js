import "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";

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
    div.setAttribute("style", "opacity:1;");
    document.getElementById("content_env_step").appendChild(div);

    var img = document.createElement("img");
    img.setAttribute("src", "./imgs/seed.png");
    img.setAttribute("style", "width: 150px; height: 150px; opacity:1;");
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

$("#1").attr("src", './imgs/sprout.png');
$("#3").attr("src", './imgs/sprout.png');
$("#5").attr("src", './imgs/sprout.png');
$("#8").attr("src", './imgs/sprout.png');
$("#4").attr("src", './imgs/stem.png');
$("#7").attr("src", './imgs/flower.png');
$("#11").attr("src", './imgs/flower.png');
// .addEventListener( "click", () => {
    // console.log("seed1 페이지로 이동");
    // $("#1").attr("src", './imgs/sprout.png');
    // window.location.href='./todolist_env_step.html'  
// });


// document.getElementById('2')
// // .addEventListener( "click", () => {
//     console.log("seed2 페이지로 이동");
//     $("#2").attr("src", './imgs/sprout.png');
//     // window.location.href='./todolist_env_step.html'
// // });

// document.getElementById('3')
// // .addEventListener( "click", () => {
//     console.log("seed3 페이지로 이동");
//     $("#3").attr("src", './imgs/flower.png');
//     // window.location.href='./todolist_env_step.html'
// // });

// document.getElementById('4')
// // .addEventListener( "click", () => {
//     console.log("seed4 페이지로 이동");
//     $("#4").attr("src", './imgs/stem.png');
//     // window.location.href='./todolist_env_step.html'
// // });

// document.getElementById('5')
// // .addEventListener( "click", () => {
//     console.log("seed2 페이지로 이동");
//     $("#5").attr("src", './imgs/seed.png');
//     // window.location.href='./todolist_env_step.html'
// // });

// document.getElementById('6')
// // .addEventListener( "click", () => {
//     console.log("seed3 페이지로 이동");
//     $("#6").attr("src", './imgs/flower.png');
//     // window.location.href='./todolist_env_step.html'
// // });

// document.getElementById('7')
// // .addEventListener( "click", () => {
//     console.log("seed4 페이지로 이동");
//     $("#7").attr("src", './imgs/seed.png');
//     // window.location.href='./todolist_env_step.html'
// // });

// document.getElementById('8')
// // .addEventListener( "click", () => {
//     console.log("seed2 페이지로 이동");
//     $("#8").attr("src", './imgs/stem.png');
//     // window.location.href='./todolist_env_step.html'
// // });

// document.getElementById('9')
// // .addEventListener( "click", () => {
//     console.log("seed3 페이지로 이동");
//     $("#9").attr("src", './imgs/sprout.png');
//     // window.location.href='./todolist_env_step.html'
// // });

// document.getElementById('10')
// // .addEventListener( "click", () => {
//     console.log("seed4 페이지로 이동");
//     $("#10").attr("src", './imgs/stem.png');
//     // window.location.href='./todolist_env_step.html'
// // });

document.getElementById('11')
.addEventListener( "click", () => {
    console.log("seed11 페이지로 이동");
    // $("#11").attr("src", './imgs/flower.png');
    window.location.href='./todolist_env_step.html'
});

// document.getElementById('12').addEventListener( "click", () => {
//     console.log("seed3 페이지로 이동");
//     $("#12").attr("src", './imgs/sprout.png');
//     window.location.href='./todolist_env_step.html'
// });

// document.getElementById('13').addEventListener( "click", () => {
//     console.log("seed4 페이지로 이동");
//     $("#13").attr("src", './imgs/stem.png');
//     window.location.href='./todolist_env_step.html'
// });

// document.getElementById('14').addEventListener( "click", () => {
//     console.log("seed2 페이지로 이동");
//     $("#14").attr("src", './imgs/stem.png');
//     window.location.href='./todolist_env_step.html'
// });

// document.getElementById('15').addEventListener( "click", () => {
//     console.log("seed3 페이지로 이동");
//     $("#15").attr("src", './imgs/stem.png');
//     window.location.href='./todolist_env_step.html'
// });

// document.getElementById('16').addEventListener( "click", () => {
//     console.log("seed3 페이지로 이동");
//     $("#16").attr("src", './imgs/stem.png');
//     window.location.href='./todolist_env_step.html'
// });

// document.getElementById('17').addEventListener( "click", () => {
//     console.log("seed4 페이지로 이동");
//     $("#17").attr("src", './imgs/stem.png');
//     window.location.href='./todolist_env_step.html'
// });

// document.getElementById('18').addEventListener( "click", () => {
//     console.log("seed2 페이지로 이동");
//     $("#18").attr("src", './imgs/stem.png');
//     window.location.href='./todolist_env_step.html'
// });

// document.getElementById('19').addEventListener( "click", () => {
//     console.log("seed3 페이지로 이동");
//     $("#19").attr("src", './imgs/stem.png');
//     window.location.href='./todolist_env_step.html'
// });

// document.getElementById('20').addEventListener( "click", () => {
//     console.log("seed4 페이지로 이동");
//     $("#20").attr("src", './imgs/stem.png');
//     window.location.href='./todolist_env_step.html'
// });

// document.getElementById('21').addEventListener( "click", () => {
//     console.log("seed1 페이지로 이동");
//     $("#21").attr("src", './imgs/stem.png');
//     window.location.href='./todolist_env_step.html'
// });

// document.getElementById('22').addEventListener( "click", () => {
//     console.log("seed2 페이지로 이동");
//     $("#22").attr("src", './imgs/stem.png');
//     window.location.href='./todolist_env_step.html'
// });

// document.getElementById('23').addEventListener( "click", () => {
//     console.log("seed3 페이지로 이동");
//     $("#23").attr("src", './imgs/stem.png');
//     window.location.href='./todolist_env_step.html'
// });

// document.getElementById('24').addEventListener( "click", () => {
//     console.log("seed4 페이지로 이동");
//     $("#24").attr("src", './imgs/stem.png');
//     window.location.href='./todolist_env_step.html'
// });

// document.getElementById('25').addEventListener( "click", () => {
//     console.log("seed2 페이지로 이동");
//     $("#25").attr("src", './imgs/stem.png');
//     window.location.href='./todolist_env_step.html'
// });

// document.getElementById('26').addEventListener( "click", () => {
//     console.log("seed3 페이지로 이동");
//     $("#26").attr("src", './imgs/stem.png');
//     window.location.href='./todolist_env_step.html'
// });

// document.getElementById('27').addEventListener( "click", () => {
//     console.log("seed4 페이지로 이동");
//     $("#27").attr("src", './imgs/stem.png');
//     window.location.href='./todolist_env_step.html'
// });

// document.getElementById('28').addEventListener( "click", () => {
//     console.log("seed2 페이지로 이동");
//     $("#28").attr("src", './imgs/stem.png');
//     window.location.href='./todolist_env_step.html'
// });

// document.getElementById('29').addEventListener( "click", () => {
//     console.log("seed3 페이지로 이동");
//     $("#29").attr("src", './imgs/stem.png');
//     window.location.href='./todolist_env_step.html'
// });

// document.getElementById('30').addEventListener( "click", () => {
//     console.log("seed3 페이지로 이동");
//     $("#40").attr("src", './imgs/stem.png');
//     window.location.href='./todolist_env_step.html'
// });





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