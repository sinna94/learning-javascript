//숫자 형식
//고정 소수점 (반올림 됨)
let x = 19.51;
console.log(x.toFixed(3));
console.log(x.toFixed(2));
console.log(x.toFixed(1));
console.log(x.toFixed(0));

//지수 표기법 (반올림 됨)
x = 3800.5;
console.log(x.toExponential(4));
console.log(x.toExponential(3));
console.log(x.toExponential(2));
console.log(x.toExponential(1));
console.log(x.toExponential(0));

//고정 전체 자리수
x=1000;
console.log(x.toPrecision(5));
console.log(x.toPrecision(4));
console.log(x.toPrecision(3));
console.log(x.toPrecision(2));
console.log(x.toPrecision(1));
x=15.335;
console.log(x.toPrecision(6));
console.log(x.toPrecision(5));
console.log(x.toPrecision(4));
console.log(x.toPrecision(3));
console.log(x.toPrecision(2));
console.log(x.toPrecision(1));

//다른 진수
x=12;
console.log(x.toString());  //10진수
console.log(x.toString(10));    // 10진수
console.log(x.toString(16));    // 16진수
console.log(x.toString(8));     // 8진수
console.log(x.toString(2));     // 2진수

//고급 숫자 형식 : Numeral.js 라이브러리 사용하기

//상수
//기본적인 상수
console.log(Math.E);        // 자연로그의 밑수 : ~2.718
console.log(Math.PI);       // 원주율
console.log(Math.LN2);      // 2의 자연로그
console.log(Math.LN10);     // 10의 자연로그
console.log(Math.LOG2E);    // Math.E의 및수가 2인 로그
console.log(Math.LOG10E);   // Math.E의 상용 로그
console.log(Math.SQRT1_2);  // 1/2의 제곱근
console.log(Math.SQRT2);    // 2의 제곱근

//대수함수
//거듭제곱
//로그함수
//기타함수
//의사 난수 생성 : Marh.random() - 시드를  사용해야 할 경우 seedrandom.js 사용
//삼각함수
//쌍곡선함수