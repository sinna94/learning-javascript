// 자바스크립트의 Date 객체는 잘 설계됐다고 말하기 힘듬
// Moment.js 를 사용해보기
const d = new Date();
console.log(d);
console.log(d.valueOf());

//Date 객체 만들기
//new Date(년, 월, 일, 시, 분, 초, 밀리초);
new Date(1000); // 유닉스 타임스탬프로 날짜 생성
new Date(-365 * 24 * 60 * 60 * 1000) // 유닉스 타임스탬프 이전 날짜 생성
new Date('June 15, 1903'); // 날짜 문자열 해석 (표준시 기준);
new Date('June 14, 1903 GMT-0000');

//Date객체는 항상 내부적으로 UTC기준으로 저장하고
//출력할 때 운영체제에서 정의한 표준시에 맞게 변환

//Moment.js
//타임존을 지원하는 버전, 지원하지 않는 버전 
const date = new Date(Date.UTC(2016, 4, 27));
console.log(date);

//노드를 사용해 설치한 Moment.js 를 스크립트에 불러오기
const moment = require('moment-timezone');

//특정 타임존에 있는 서버에서 날짜 생성할 때는 moment.tz 사용
const s = moment.tz([2016, 3, 27, 9, 19], 'Asia/Seoul').toDate();
console.log(s);

//날짜 데이터 전송하기
const before = {
    d: new Date()
};
console.log(before.d instanceof Date);
const json = JSON.stringify(before);
// JSON으로 바로 날짜를 다룰 순 없음
const after = JSON.parse(json);
console.log(after.d instanceof Date);
console.log(typeof after.d);
//전송된 문자열에서 날짜를 복구하는 것은 가능
after.d = new Date(after.d);
console.log(after.d instanceof Date);

//날짜 형식
const dd = new Date(Date.UTC(1930, 4, 10));
console.log(dd.toLocaleDateString());
// console.log(dd.toLocaleFormat());
console.log(dd.toLocaleString());
console.log(dd.toTimeString());
console.log(dd.toUTCString());

console.log("\nmoment를 이용한 포맷");
console.log(moment(dd).format("YYYY-MM-DD"));
console.log(moment(dd).format("YYYY-MM-DD HH:mm"));
console.log(moment(dd).format("YYYY-MM-DD HH:mm Z"));
console.log(moment(dd).format("YYYY-MM-DD HH:mm [UTC]Z"));
console.log(moment(dd).format("YYYY년 M월 D일 HH:mm"));
console.log(moment(dd).format("dddd, MMMM [the] Do, YYYY"));
console.log(moment(dd).format("h:mm a"));

//날짜 구성요소
console.log("\n날짜 구성요소")
console.log(dd.getFullYear());
console.log(dd.getMonth());
console.log(dd.getDate());
console.log(dd.getDay());
console.log(dd.getHours());
console.log(dd.getMinutes());
console.log(dd.getSeconds());
console.log(dd.getMilliseconds());
//UTC 기준 메소드
console.log(dd.getUTCFullYear());

//날짜비교
console.log("\n날짜 비교");
const d1 = new Date(1996, 2, 1);
const d2 = new Date(2009, 4, 27);

console.log(d1 > d2);
console.log(d1 < d2);

//날짜 연산
console.log("\n날짜 연산");
const dates=[];
const min=new Date(2017,0,1).valueOf();
const delta = new Date(2020,0,1).valueOf() - min;
for(let i=0;i<10;i++){
    dates.push(new Date(min + delta*Math.random()));
}

console.log(dates);
console.log(dates.sort((a,b) => b-a)); // 역순 정렬

let m = moment();
console.log(m);
m.add(3, 'days'); // m은 3일 뒤
console.log(m);
m.subtract(2, 'years'); // m은 2년 전으로부터 3일 후
console.log(m);
m = moment();
m.startOf('year'); // 올해의 1월1일
console.log(m);
m.endOf('month'); // 올해 1월 31일
console.log(m);

//메소드 체인
m=moment().add(10, 'hours').subtract(4,'days').endOf('month');
console.log(m);

console.log(moment().subtract(44,'minutes').fromNow());
console.log(moment().subtract(45,'minutes').fromNow());