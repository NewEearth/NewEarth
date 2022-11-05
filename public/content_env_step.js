// const login= document.getElementById("login");

// login.addEventListener("click", () =>{
//     document.getElementById("page_env_todo").style.display="inline"
// })

const content_env_step = document.getElementById("content_env_step");
const seed_item = document.getElementsByClassName("seed");

const img = new Image();
img.src='/imgs/seed.png';

// for(const el of seed){
//     // el.addEventListener("click", ()=>{
//     //     //content.innerHTML = "abc";
//     //     document.getElementById("page_env_record").style.display="inline"
//     //     document.getElementById("page_env_protect_record").style.display="none"
//     //     document.getElementById("page_env_step").style.display="none"
//     //     document.getElementById("page_env_todo").style.display="none"
//     //     console.log("abc");
//     // })
// }

content_env_step.addEventListener("click", () => {})

var seed_arr = '';
//var seed_imgs = new Array();

var date = new Date();
var days = new Date(date.getFullYear(), date.getMonth() +1, 0).getDate();
// var lastDate = new Date(year, month, 0).getDate();

var year = date.getFullYear();
var month = date.getMonth() + 1;

//해당 월
var month = date.getFullYear() + "년" + (date.getMonth() + 1) + "월 입니다.";
console.log(year);
console.log(month);

//해당 월 일수 나열
var month_seed = "";
var seed_img = "<img src='/imgs/seed.png' width='150px' height='150px'>"
// var i;
// var seed_list_imgs = []; //[1, 2, 3, 4,5 , ..., 30]
for(var i=1; i<=days; i++){
    //month_seed +="Seed Number" + img.src + "<br>";
    // seed_list_imgs[i] = new Image();
    // seed_list_imgs[i].src = "/imgs/seed.png";
    //month_seed +="Seed Number" + i + seed_img + "<br>";
    month_seed += i + seed_img;
    console.log(month_seed);

    //document.write(seed_item);
        // seed_img += i + "<br>"
        // var seed_img = document.getElementById("content_env_step").innerHTML= "<p><img src='/imgs/seed.png' width='150px' height='150px'></p>"
        // document.write("<br>");
    //document.write(seed_arr[i]);
    //console.log(i, seed_arr[i]);
    // console.log(a);
    //document.getElementsByClassName("seed").innerHTML=seed_arr[i];
}
var a = document.getElementById("content_env_step").innerHTML = month_seed;
a;
//}

console.log(a);