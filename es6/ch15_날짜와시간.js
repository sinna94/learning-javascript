// 자바스크립트의 Date 객체는 잘 설계됐다고 말하기 힘듬
// Moment.js 를 사용해보기
const d = new Date();
console.log(d);
console.log(d.valueOf());

//Date 객체 만들기
new Date(년, 월, 일, 시, 분, 초, 밀리초);
new Date(1000); // 유닉스 타임스탬프로 날짜 생성
new Date(-365*24*60*60*1000) // 유닉스 타임스탬프 이전 날짜 생성
new Date('June 15, 1903');// 날짜 문자열 해석 (표준시 기준);
new Date('June 14, 1903 GMT-0000');

//Date객체는 항상 내부적으로 UTC기준으로 저장하고
//출력할 때 운영체제에서 정의한 표준시에 맞게 변환

//Moment.js
//타임존을 지원하는 버전, 지원하지 않는 버전 
