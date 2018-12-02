// function f1(){
//     console.log('one');
// }

// function f2(){
//     console.log('two');
// }

// f2();
// f1();
// f2();

// const x = 3;
// function f() {
//     console.log(x);
//     console.log(y);
// }
//새 스코프
//변수 x는 함수 f를 정의할 때 존재하지만 y 는 그렇지 않음
//y는 다른 스코프에 있다.
// {
//     const y = 5;
//     f();
// }

{
    let x = 'blue';
    console.log(x);

    {
        let x = 3;
        console.log(x);
    }
}

//클로저(closure)
let globalFunc; {
    let blockVar = 'a';
    globalFunc = function () {
        console.log(blockVar);
    }
}

globalFunc();

let f; {
    let o = {
        note: 'Safe'
    };
    f = function () {
        return o;
    }
}

let oRef = f();
oRef.note = "Not so safe after all";
console.log(oRef);

//즉시 호출하는 함수 표현식 IIFE
const message = (function () {
    const secret = "I'm a secret!";
    return `The secret is ${secret.length} characters long.`;
})();

console.log(message);

const f2 = (function () {
    let count = 0;
    return function () {
        return `I have been called ${++count} time(s).`;
    }
})();
console.log(f2());
console.log(f2());
console.log(f2());

// var

let var1;
let var2 = undefined;
console.log(var1);
console.log(var2);
// console.log(undefinedVar);

console.log(a);
var a = 3;
console.log(a);

//var 로 선언한 변수는 호이스팅 메커니즘을 따른다.
// 함수나 전역 스코프 전체를 살펴보고 var로 선언한 변수를 맨 위로 끌어올린다.
// 함수 호이스팅도 가능, 변수에 할당한 함수 표현식은 안 됨

// 사각지대 : let으로 선언하는 변수는 선언하기 전까지 존재하지 않는다는 직관적 개념

//스트릭트 모드 : 암시적 전역 변수를 허용하지 않음
//"use strict"
//전역에서 사용하는 것은 비추천