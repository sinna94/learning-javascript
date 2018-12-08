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
html = '<br> [!CDATA[[<br>]]';
matches = html.match(/<br>/ig);
//<br> 태그를 두개 찾지만 뒤에 껀 글자 데이터이다.
//정규식은 계증적 구조에 취약하다.

//문자셋 : 글자 하나를 다른것으로 대체하는 방법을 간단하게 줄인 것
const beer99 ='00 bottles of beer on the wall ' +
                'take 1 down and pass it around -- ' +
                '98 bottles of beer on the wall.';
//대체를 사용한 방법
matches = beer99.match(/0|1|2|3|4|5|6|7|8|9/g);
console.log(matches);
const m1 = beer99.match(/[0123456789]/g);
const m2 = beer99.match(/[0-9]/g);
//범위를 지원한다.
console.log(m1);
console.log(m2);

let match = beer99.match(/[\-0-9a-z.]/ig);
//  /[.a-z0-9\-]/ 와 동일
//하이픈은 이스케이프 해줘야 한다.
//대괄로 앞에 있는 하이픈은 이스케이프 하지 않아도 됨
console.log(match);

//특정 문자, 범위를 제외하고 찾을 수도 있음
match = beer99.match(/[^\-0-9a-z.]/);   //공백만 찾는 정규식
console.log(match);
//문자셋을 제외할 떄는 캐럿(^)을 맨 앞에 쓴다.

//자주 쓰는 문자셋
/*
    \d : [0-9]
    \D : [^0-9]
    \s : [\t\v\n\r] 탭, 스페이스, 세로 탭, 줄바꿈이 포함 됨
    \S : [^\t\v\n\r]
    \w : [a-zA-Z_] 하이픈과 마침표는 포함되지 않으므로 이 문자셋으로 도메인 이름이나 CSS 클래스 등을 찾을 수는 없음
    \W : [^a-zA-Z_]
*/
const stuff = 'hight:   9\n' +
                'medium:    5\n'+
                'low:   2\n';
const levels = stuff.match(/:\s*[0-9]/g);
// * 은 숫자는 상관없으며 없어도 된다 는 의미
console.log(levels);

const messyPhone = '(505) 555-1515';
const neatPhone = messyPhone.replace(/\D/g, '');
console.log(neatPhone);

//required 필드 데이터 검사 하기
const field = '  something   ';
const valid =/\S/.test(field);
console.log(valid);

//반복
match = beer99.match(/[0-9]+/g);
// + 는 그 앞에 있는 요소가 하나 이상 있어야 한다는 뜻
console.log(match);
//반복 메타 문자 5가지 종류
/*
    {n}     :   정확히 n 개         /\d{5}/ 정확히 다섯 자리 숫자에만 일치 
    {n,}    :   최소한 n 개         /\d{5,}/ 다섯 자리이상의 숫자에만 일치
    {n,m}   :   n개 이상, m개 이하  /\d{2,5}/ 숫자 2,3,4,5개에 일치
    ?       :   0개 또는 1개, {0,1} /[a-z]\d?/i 글자가 있고 그 다음에 숫자가 없거나 한개 있는 경우 일치
    *       :   숫자는 상관 없으며 없더도 된다. (0 이상)
                /[a-z]\d*'/ 글자가 있고 그 다음에 글자가 없거나 있는 경우 일치
                (')는 주석 때문에 넣음
    +       :   하나 이상           /[a-z]\d+/i 는 글자가 있고 그 다음에 숫자가 한 개 이상 있는 경우 일치
*/

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
let text = "Visit oreilly.com today!";
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
console.log(input.replace(/two/, '($`)'));  // $` : 일치하는 것 앞에 있는 전부를 참조
console.log(input.replace(/two/, '($&)'));  // $& : 일치하는 것 자체
console.log(input.replace(/two/, "($')"));  // $' : 일치하는 것 뒤에 있는 전부를 참조
console.log(input.replace(/two/, '($$)'));  // $$ : 달러 기호 자체가 필요할 때

//함수를 이용한 교체
htlm = `<a class="foo" href="/foo" id="foo">Foo</a>\n`+
        `<A href='/bar' Class="bar">Bar</a>\n`+
        `<a href="/baz">Baz</a>\n`+
        `<a onclick="javascript:alert('aux!')" href="/qux">Qux</a>`;

function sanitizeATag(aTag){
    //태그에서 원하는 부분 뽑아내기
    const parts = aTag.match(/<a\s+(.*?)>(.*?)<\/a>/i);

    //속성 분해
    const attributes = parts[1].split(/\s+/);

    return '<a ' + attributes
    // class, id, href 속성만 필요하다
    .filter(attr => /^(?:class|id|href)[\s=]/i.test(attr))
    //스페이스 한 칸으로 구분해서 합친다.
    .join(' ')
    //여는 <a> 태그를 완성한다.
    +'>'
    //텍스트를 추가한다.
    + parts[2]
    //마지막으로 태그를 닫는다.
    + '</a>';
}
//<a> 태그를 찾는 정규식
html.match(/<a .*?>(.*?)<\/a>/ig);
output=html.replace(/<a .*?>(.*?)<\/a>/ig, function(m, g1, offset){
    console.log(`<a> tag found at ${offset}. contents: ${g1}`);
});
output = html.replace(/<a .*?<\/a>/ig, function(m){
    return sanitizeATag(m)
});
console.log(output);
// 더 간단한 방법
output = html.replace(/<a .*?<\/a>/ig, sanitizeATag);
console.log(output);

//위치 지정
//~~으로 시작하는 문자열
//__으로 끝나는 문자열
//~~과 __ 는 정규식의 앵커라고 부름
//^ 는 문자열의 맨 처음을 나타내고 $는 문자열의 마지막을 나타냄

input = 'It was the bet of times, it was the worst of times';
const beginning = input.match(/^\w+/g);
const end = input.match(/\w+$/g);
const everything = input.match(/^.*$/g);
const nomatch1 = input.match(/^best/ig);
const nomatch2 = input.match(/worst$/ig);
console.log(beginning);     //It
console.log(end);           //times
console.log(everything);    //input과 동일
console.log(nomatch1);
console.log(nomatch2);

//문자열에 줄바꿈 문자가 들어있으면 각 줄의 처음과 끝을 찾을 수 있음
//m 플래그 사용하면 됨
input = "One line\nTwo lines\nThree lines\nFour";
const beginnings = input.match(/^\w+/mg);
const endings = input.match(/\w+$/mg);
console.log(beginnings);
console.log(endings);

//단어 경제 일치
//단어 경계 메타 문자 /b /B 는 앵커와 마찬가지로 입력을 소비하지 않음
const inputs=[
    "john@doe.com",                //이메일 주소만 있음
    "john@doe.com is my email",    //이메일 주소로 시작     
    "my email is john@doe.com",    //이메일 주소로 끝남
    "use john@doe.com, my email",  //이메일 주소가 중간에 있고
                                   //바로 뒤에 쉼표가 있음
    "my email:john@doe.com",       //이메일 주소 주위에 구두점이 있음
];

const emailMatcher =    
    /\b[a-z][a-z0-9._-]*@[a-z0-9_-]+\.[a-z]+(?:\.[a-z]+)?\b/ig;
output = inputs.map(s=> s.replace(emailMatcher, '<a href="mailto:$&">$&</a>'));
console.log(output);

//룩어헤드 (lookahead)
//입력을 소비하지 않음
//문자열이 겹시는 상황에 필요함
/*
    (?=[subexpression]) 룩어헤드의 형태
    (?![subexpression]) 부정형 룩어헤드
*/

console.log('비밀번호가 규칙에 맞는지 검사하기');
//대문자, 소문자, 숫자가 최소 하나씩 포함, 특수문자 x

function validPassword(p){
    // return /[A-Z]/.test(p) &&
    //     /[a-z]/.test(p) &&
    //     /[0-9]/.test(p) &&
    //     !/[^a-zA-z0-9]/.test(p); //문자셋을 제외하는 ^(캐럿)
    // 룩어헤드를 사용해서 정규식 하나로 묶기
    return /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?!.*[^a-zA-Z0-9])/.test(p);
}

const password = "abc123DA";
console.log(validPassword(password));

//동적으로 정규식 만들기
//동적으로 만들 때는 RegExp 생성자가 필요함
const users=["mary", "nick", "arthur", "sam", "yvette"];
text = "User @arthur started the backup and 15:15, "+
            "and @nick and @yvette restored it ad 18:35.";
const userRegex = new RegExp(`@(?:${users.join('|')})\\b`, 'g');
console.log(text.match(userRegex));