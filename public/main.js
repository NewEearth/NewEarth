/** top_list */
const location_env_record = document.querySelectorAll(".location_env_record");
const location_env_protect_record = document.querySelectorAll(".location_env_protect_record")
const location_env_step = document.querySelectorAll(".location_env_step");
/** location */
const location_env_todo = document.querySelectorAll(".location_env_todo");
const seed1= document.getElementById("seed1");

/** seed */
const seed = document.querySelectorAll(".seed");

/** 환경일지 */
for(const el of location_env_record){
    el.addEventListener("click", ()=>{
        //content.innerHTML = "abc";
        document.getElementById("page_env_record").style.display="inline"
        document.getElementById("page_env_protect_record").style.display="none"
        document.getElementById("page_env_step").style.display="none"
        document.getElementById("page_env_todo").style.display="none"
        console.log("abc");
    })
}

/** 환경보호법 */
for(const el of location_env_protect_record){
    el.addEventListener("click", ()=>{
        //content.innerHTML = "abc";
        document.getElementById("page_env_record").style.display="none"
        document.getElementById("page_env_protect_record").style.display="inline"
        document.getElementById("page_env_step").style.display="none"
        document.getElementById("page_env_todo").style.display="none"
        console.log("abc");
    })
}

/** 환경발자국 */
for(const el of location_env_step){
    el.addEventListener("click", ()=>{
        //content.innerHTML = "abc";
        document.getElementById("page_env_record").style.display="none"
        document.getElementById("page_env_protect_record").style.display="none"
        document.getElementById("page_env_step").style.display="inline"
        document.getElementById("page_env_todo").style.display="none"
        console.log("abc");
    })
}

/** todo */
for(const el of location_env_todo){
    el.addEventListener("click", ()=>{
        //content.innerHTML = "abc";
        document.getElementById("page_env_record").style.display="none"
        document.getElementById("page_env_protect_record").style.display="none"
        document.getElementById("page_env_step").style.display="none"
        document.getElementById("page_env_todo").style.display="inline"
        console.log("abc");
    })
}

// for(i=0; i<30; i++){
//     seed
// }
// var arr = 90;
// arr[0] = 'seed1';
var seedlist = new Array(30);

var seedImg = '<img src="/imgs/seed1.png">';

for (var i=0; i<seedlist.length; i++){
    console.log(seedlist[i]);
    seedImg;
}

seed1.addEventListener("click", () =>{
    document.getElementById("page_env_todo").style.display="inline"
})