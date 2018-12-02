//서브루틴으로서의 함수
function printLeapYearStatus() {
    const year = new Date().getFullYear();
    if (year % 4 !== 0)
        console.log(`${year} is NOT a leap year`);
    else if (year % 100 != 0)
        console.log(`${year} IS a leap year`);
    else if (year % 400 != 0)
        console.log(`${year} is NOT a leap year`);
    else
        console.log(`${year} IS a leap year`);
}

printLeapYearStatus();

//값을 반환하는 서브루틴으로서의 함수
function isCurrentYearLeapYear() {
    const year = new Date().getFullYear();
    if (year % 4 !== 0)
        return false;
    else if (year % 100 != 0)
        return true;
    else if (year % 400 != 0)
        return false;
    else
        return true;
}

const daysInMonth = [31, isCurrentYearLeapYear() ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

console.log(daysInMonth);

if (isCurrentYearLeapYear())
    console.log('It is a leap year');

//함수로서의 함수
function isLeapYear(year) {
    if (year % 4 !== 0)
        return false;
    else if (year % 100 != 0)
        return true;
    else if (year % 400 != 0)
        return false;
    else
        return true;
}
/*
//IIFE를 이용한 비동기적 코드
setTimeout(function () {
    console.log('hello');
}, 1500);

var i;
for (i = 5; i >= 0; i--) {
    setTimeout(function () {
        console.log(i === 0 ? "go!" : i);
    }, (5 - i) * 1000);
}
//setTimeout에 전달된 함수가 루프가 끝나고 실행됐기 때문에 -1만 출력됨

function loopBody(i) {
    setTimeout(function () {
        console.log(i === 0 ? "go!" : i);
    }, (5 - i) * 1000);
}

for (i = 5; i >= 0; i--) {
    loopBody(i);
}

//이름이 있는 함수를 만들어서 해결하는 방법
//스코프가 총 7개 만들어진다. 외부 하나, 6개는 loopBody를 호출할 때마다

//익명함수를 만들어서 IIFE를 사용하는 방법
for (i = 5; i >= 0; i--) {
    (function (i) {
        setTimeout(function () {
            console.log(i === 0 ? "go!" : i);

        }, (5 - i) * 1000);
    })(i);
}

for (let j = 5; j >= 0; j--) {
    setTimeout(function () {
        console.log(j === 0 ? "go!" : j);
    }, (5 - j) * 1000);
}
*/

//변수로서의 함수
//함수에 별명 주기
function addThreeSquareAddFiveTakeSquareRoot(x) {
    return Math.sqrt(Math.pow(x + 3, 2) + 5);
}
const f = addThreeSquareAddFiveTakeSquareRoot;
const answer = (f(5) + f(2)) / f(7);
console.log(answer);

//배열 안의 함수
const sin = Math.sin;
const cos = Math.cos;
const theta = Math.PI / 4;
const zoom = 2;
const offset = [1, -3];

const pipeline = [
    function rotate(p) {
        return {
            x: p.x * cos(theta) - p.y * sin(theta),
            y: p.x * sin(theta) + p.y * cos(theta),
        };
    },
    function scale(p) {
        return {
            x: p.x * zoom,
            y: p.y * zoom
        };
    },
    function tanslate(p) {
        return {
            x: p.x + offset[0],
            y: p.y + offset[1]
        };
    }
];

const p = {
    x: 1,
    y: 1
};
let p2 = p;
for (let i = 0; i < pipeline.length; i++) {
    p2 = pipeline[i](p2);
}

console.log(p2);

//함수에 함수 전달
//비동기적 프로그래밍
function sum(arr, f) {
    if (typeof f != 'function') f = x => x;

    return arr.reduce((a, x) => a += f(x), 0);
}

console.log(sum([1, 2, 3]));
console.log(sum([1, 2, 3], x => x * x));
console.log(sum([1, 2, 3], x => Math.pow(x, 3)));

//함수를 반환하는 함수
function newSummer(f){
    return arr=>sum(arr,f);
}

const sumOfSquares = newSummer(x=>x*x);
const sumOfCubes = newSummer(x=>Math.pow(x,3));
console.log(sumOfSquares([1,2,3]));
console.log(sumOfCubes([1,2,3]));

//재귀
function findNeedle(haystack){
    if(haystack.length===0) return "no haystack here!";
    if(haystack.shift()==='needle')return "found it!"
    return findNeedle(haystack);
}

console.log(findNeedle(['hay','hay','hay','hay','needle','hay','hay']));

function fact(n){
    if(n===1) return 1;
    return n*fact(n-1);
}

console.log(fact(10));