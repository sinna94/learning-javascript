//부분 문자열 검색과 대체
let input = "As I was going to Saint Ives";
//찾기만 할 떄는 String.prototype 메소드로 충분함
console.log(input.startsWith("As"));
console.log(input.endsWith("Ives"));
console.log(input.startsWith("going", 9));
console.log(input.endsWith("going", 14));
console.log(input.includes("going"));
console.log(input.includes("going", 10));
console.log(input.indexOf("going"));
console.log(input.indexOf("going", 10));
console.log(input.indexOf("nope"));
console.log(input.toLowerCase().startsWith("as"));

//부분 문자열을 찾아서 교체하기
let output = input.replace("going", "walking");
console.log(output);

//정규식 만들기
//RegExp 클래스
const re1 = /going/; // 슬래시로 감싼 간편한 리터럴 문법
const re2 = new RegExp("going");

// 정규식 검색
const re = /\w{3,}/ig;
console.log(input.match(re));
console.log(input.search(re)); // 첫 결과의 인덱스 번호

// 정규식의 메소드를 사용할 떄
console.log(re.exec(input));
console.log(re.exec(input));
console.log(re.exec(input));
console.log(re.exec(input));
console.log(re.exec(input));
console.log(re.test(input));    //input 안에 조건에 만족하는 결과가 있는지 검사

//위의 예제는 re 대신 정규식 리터럴을 그대로 써도 가능

//정규식을 사용한 문자열 교체
input = "As I was going to Saint Ives";
output = input.replace(/\w{4,}/ig, '****');
console.log(output);

//입력 소비
/*
문자열 왼쪽에서 오른쪽으로 진행한다.
일단 소비한 글자에 다시 돌아오는 일은 없다.
한 번에 한 글자씩 움직이며 일치하는 것이 있는지 확인한다.
일치하는 것을 찾으면 해당하는 글자를 한꺼번에 소비한 후 다음 글자로 이동한다.
(정규식에 /g 플래그를 써서 전역으로 검색할 때에 해당함.)
*/

//대체
let html = 'HTML with <a href="/one"> one link </a>, and some JavaScript.' + '<script src="stuff.js">';
let matches = html.match(/area|a|link|script|source/ig);

console.log(matches);
//|(파이프) 는 대체를 뜻하는 메타 문자
//ig는 대소문자를 가지라 않고(i) 전체를 검색하라는 뜻(g)
//g플래그가 없으면 일치하는 것 중 첫번째만 반환

//HTML 찾기


//마침표와 이스케이프
//정규식에서 마침표는 줄바꿈 문자를 제외한 모든 문자에 일치하는 특수 문자
input = "address: 333 Main St., Anywhere, NY, 55532. Phone: 555-555-2525.";
match = input.match(/\d{5}.*/);
console.log(match);

//마침표 자체가 필요할 때는 이스케이프 하자
const equation = "(2 + 3.5) * 7";
match = equation.match(/\(\d \+ \d\.\d\) \* \d/);
console.log(match);

//진정한 와일드카드
//줄바꿈 문자를 포함해서 모든 문자에 일치하는 것 [\s\S]

//그룹 : 하위 표현식을 만들고 단위 하나로 취급
// 그룹에 일치하는 결과를 나중에 쓸 수 있도록 캡처할 수 있음
//캡처하지 않는 그룹 : (?:[subexpression]) 형태
const text = "Visit oreilly.com today!";
match = text.match(/[a-z]+(?:\.com|\.org|\.edu)/i);
console.log(match);

html = '<link rel="stylesheet" href="http://insecure.com/stuff.css">\n' +
    '<link rel="stylesheet" href="https://secure.com/securestuff.css">\n' +
    '<link rel="stylesheet" href="https://anything.com/flexibel.css">\n';
matches = html.match(/(?:https?)?\/\/[a-z][a-z0-9-]+[a-z0-9]+/ig);
//처음 ? 는 s 는 옵션이다 라는 뜻
//두번째는 왼족에 있는 그룹 전체에 적용
//도메인은 글자로 시작하고 글자,숫자,하이픈이 들어갈 수 있지만 하이픈으로 끝날 수는 없다.
console.log(matches);

//적극적 일치
input = "Regex pros know the difference between\n <i>greedy</i> and <i>lazy</i> matching.";
output = input.replace(/<i>(.*)<\/i>/ig, '<strong>$1</strong>');
console.log(output);
//소극적 일치
output= input.replace(/<i>(.*?)<\/i>/ig, '<strong>$1</strong>');
console.log(output);

//역참조
const promo = "Opening for XAAX is the dynamic GOOG! At the bos office now!";
const bands = promo.match(/([A-Z])([A-Z])\2\1/g);
console.log(bands);

//역참조를 이용한 따옴표 짝 맞추기
html = `<img alt='A "simple" example.'><img alt="Don't abuse it!">`;
matches = html.match(/<img alt=(['"]).*?\1/g);
console.log(matches);

//그룹 교체
html = '<a class="nope" href="/yep">YEP</a>';
html = html.replace(/<a .*?(href=".*?").*?>/, '<a $1>');
console.log(html);

html = '<a class="yep" href="/yep">YEP</a>';
html = html.replace(/<a .*?(class=".*?").*?(href=".*?").*?>/, '<a $2 $1>');
console.log(html);

input = "One two three";
console.log(input.replace(/two/, '($`)'));
console.log(input.replace(/two/, '($&)'));
console.log(input.replace(/two/, "($')"));
console.log(input.replace(/two/, '($$)'));