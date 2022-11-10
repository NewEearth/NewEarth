// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";

import { 
    getAuth,// authentication 설정
    signInWithPopup, //google 로그인을 팝업창에 띄우기 위해
    GoogleAuthProvider, //google login 기능
    signInWithEmailAndPassword,// email 로그인
    createUserWithEmailAndPassword, //email 회원가입
} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1IhyMtiCyPjCzgvwI7prkD9QK9NjIHas",
    authDomain: "newearth-b3659.firebaseapp.com",
    projectId: "newearth-b3659",
    storageBucket: "newearth-b3659.appspot.com",
    messagingSenderId: "109865594723",
    appId: "1:109865594723:web:576164973901997fdf2d56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firebase의 인증객체를 받아둘 객체
const auth = firebase.auth();
// authoProvider를 GoogleAuthProvider를 이용한다.
var provider = new firebase.auth.GoogleAuthProvider();
//signInWithPopup(authProvider);

auth
.signInWithPopup(provider)
.then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    console.log('success');
    console.log(user);
    console.log(user.uid);
    // userInfo = user;
    get_memo_list();
    console.log(data);
})
.catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
});


// Initialize Cloud Firestore and get a reference to the service
//Database에서 데이터 가져오기
const db = firebase.firestore();

// //Todolist data 저장
// document.getElementById("enter_Button").addEventListener('click', () => {
//     db.collection('TodoList').add({Date: $('#content_env_todo_title').val(), checkbox_text1: $('#checkbox_text1').val(), checkbox_text2: $('#checkbox_text2').val(), checkbox_text3: $('#checkbox_text3').val()})
//   });
//Todolist data 저장
// document.getElementById("enter_Button").addEventListener('click', () => {
//     db.collection('TodoList').add({Day: day, Date: today, checkbox_text1: $('#checkbox_text1').val(), checkbox_text2: $('#checkbox_text2').val(), checkbox_text3: $('#checkbox_text3').val()})
//     });

/**
var seed_date_1 = document.getElementById('seed_img').children
var seed_date = document.getElementById('seed_img').children[9].className; //10번째 이미지의 클래스 가져오기 => class=9;

document.getElementById('seed_img').children[9].addEventListener("click", () => {
    //저장된 data 가져오기
    db.collection('TodoList').where("day", "==", `${seed_date}`)
        .get()
        .then((result)=>{
            //console.log(result);
            result.forEach((doc)=>{
                console.log(doc.data());
                document.getElementById("check_list").innerHTML =`<div class="todolist_register" style="border: solid 3px; padding:10px">
                    <div class="Date">
                        ${doc.data().Date}
                    </div>
                    <div class="Todo1">
                        <input type="checkbox" id="checkbox_check1" name="check1">
                        <label for="checkbox_check1"></label>
                        Todo 1 : ${doc.data().checkbox_text1}
                    </div>
                    <div class="Todo2">
                        <input type="checkbox" id="checkbox_check2" name="check2">
                        <label for="checkbox_check2"></label>
                        Todo 2 : ${doc.data().checkbox_text2}
                    </div>
                    <div class="Todo3">
                        <input type="checkbox" id="checkbox_check3" name="check3">
                        <label for="checkbox_check3"></label>
                        Todo 3 : ${doc.data().checkbox_text3}
                    </div>
                </div>`
            })
        });
    });
    */

    
// for (var i=1; i<=days; i++){
//     document.getElementById('seed_img').children[i]('click', () => {
//         //저장된 data 가져오기
//         db.collection('TodoList').where("day", "==", `${seed_date}`)
//             .get()
//             .then((result)=>{
//                 //console.log(result);
//                 result.forEach((doc)=>{
//                     console.log(doc.data());
//                     document.getElementById("check_list").innerHTML =`<div class="todolist_register" style="border: solid 3px; padding:10px">
//                         <div class="Date">
//                             ${doc.data().Date}
//                         </div>
//                         <div class="Todo1">
//                             <input type="checkbox" id="checkbox_check1" name="check1">
//                             <label for="checkbox_check1"></label>
//                             Todo 1 : ${doc.data().checkbox_text1}
//                         </div>
//                         <div class="Todo2">
//                             <input type="checkbox" id="checkbox_check2" name="check2">
//                             <label for="checkbox_check2"></label>
//                             Todo 2 : ${doc.data().checkbox_text2}
//                         </div>
//                         <div class="Todo3">
//                             <input type="checkbox" id="checkbox_check3" name="check3">
//                             <label for="checkbox_check3"></label>
//                             Todo 3 : ${doc.data().checkbox_text3}
//                         </div>
//                     </div>`
//                 })
//             });
//         });
// }








// 저장된 data 가져오기
// document.getElementById("enter_Button").addEventListener('click', () => {
//     window.location.href='./todolist_env_step'});
// var get_seed_data_2= db.collection('TodoList').where("Date", "==", seed_date[i])
//     .get()
//     .then((result)=>{
//         //console.log(result);
//         result.forEach((doc)=>{
//             //console.log(doc);
//             console.log(doc.data());
//             //var templete = `<div>상품하나</div>`;
//             $('#content_env_step').append(list);
//             var Data = doc.data().Data;
//             var checkbox_text1 = doc.date().checkbox_text1;
//             var checkbox_text2 = doc.date().checkbox_text2;
//             var checkbox_text3 = doc.date().checkbox_text3;

//             var checkbox_list = [];
//             checkbox_list.push(checkbox_text1, checkbox_text2, checkbox_text3);


//             var list = "<div><ul>";
//                 for (var i=0; i<checkbox_list.length; i++){
//                     list +="<li>Todo " + [i] + " : " + checkbox_list[i] + "</li>";
//                 }
//                 list += "</ul></div>";

//     })
// });


// console.log(today[10]);
// console.log(doc.data().Date)