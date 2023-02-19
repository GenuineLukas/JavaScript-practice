//html 요소 얻기 (get 방식)
document.getElementById("title");
console.log(title);
title.textContent = "헬스3대운동";

let items = document.getElementsByClassName("item");
console.log("스쿼트: ", items[0]);
console.log("벤치프레스: ", items[1]);
console.log("데드리프트: ", items[2]);

let liList = document.getElementsByTagName("li");
console.log(liList);

//html 요소 얻기 (query 방식)
//css 태그로 얻음
let h2 = document.querySelector("#title");
console.log("h2: ", h2);

let item = document.querySelectorAll(".item");
console.log(item);

/* html 요소 조작하기 */
h2.textContent = "<span>운동!!!<span/>"; //여기서의 span 태그는 문자열
h2.innerHTML = "<span>운동@@@<span>"; //innerHTML 을 활용한 span 태그는 진짜 span태그로 인식됨.
//document.querySelector("body").innerHTML = "<span>메롱</span>";

let input = document.querySelector("input");
input.setAttribute("placeholder", "헬스 운동을 입력해주세요.");
input.setAttribute("required", "");
//input.removeAttribute("placeholder");
//input.removeAttribute("required");

/* html 스타일링하기 */
let helloItem = document.querySelector(".hello");
helloItem.classList.add("dark");
//helloItem.classList.add('light');
