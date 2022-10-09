//script.js
import { loginEmail, signupEmail,loginGoogle } from './firebase.js';
const buttons = document.getElementById('buttons');

//Email 로그인, 회원가입 구현
//...

//Google 로그인
google.addEventListener('click', (e) => {
  loginGoogle().then((result) => {
    console.log(result);
    const user = result.user;
    loginSuccess(user.email, user.uid);
  });
});

//로그인 성공시 UI 변경
const loginSuccess = (email, uid) => {
  const login_area = document.getElementById('login-area');
  login_area.innerHTML = `<h2>Login 성공!</h2><div>uid: ${uid}</div><div>email: ${email}</div>`;
};

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