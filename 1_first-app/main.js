console.log("hello!!!!!!");
//객체는 변수와 함수를 가지고 있을 수 있고 객체가 가진 변수를 프로퍼티라고 함.
let obj = {
  number: 30, //property
  sayHello: function () {
    console.log("obj>sayhello");
    console.log("obj>sayhelloagain");
  },
};

//함수 호출
obj.sayHello();
