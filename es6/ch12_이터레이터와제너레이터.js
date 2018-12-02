//ES6에 도입됨
const book=[
    "가나다라마바사",
    "아자차카타파하",
    "12345",
    "67890",
    "abcdefg",
    "hijklmnop",
    "qrstuvwxyz",
];

const it = book.values();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

let current = it.next();
while(!current.done){
    console.log(current.value);
    current = it.next();
}

//이터레이터 끼리 독립적임

//이터레이터 프로토콜 : 모든 객체를 이터러블 객체로 바꿀 수 있다.
class Log{
    constructor(){
        this.messages = [];
    }
    add(message){
        this.messages.push({message, timestamp: Date.now()});
    }
    [Symbol.iterator](){
        return this.messages.values();
    }
}

const log = new Log();
log.add("first day at sea");
log.add("spotted whale");
log.add("spotted another vessel");

for(let entry of log){
    console.log(`${entry.message}@${entry.timestamp}`);
}

class FibonacciSequence{
    [Symbol.iterator](){
        let a=0,b=1;
        return{
            next(){
                let rval = {value: b, done: false};
                b += a;
                a = rval.value;
                return rval;
            }
        };
    }
}

const fib = new FibonacciSequence();
let i =0;
for(let n of fib){
    console.log(n);
    if(++i > 9) break;
}

//제너레이터 : 이터레이터를 사용해 자신의 실행을 제어하는 함수
//함수의 실행을 개별적 단계로 나누어 함수의 실행 제어
//실행 중인 함수와 ㅁ통신
function* rainbow(){
    yield 'red';
    yield 'orange';
    yield 'yellow';
    yield 'green';
    yield 'blue';
    yield 'indigo';
    yield 'purple';
}

for(let color of rainbow()){
    console.log(color);
}

function* interrogate(){
    const name = yield "What is your name?";
    const color = yield "What is your favorite color?";
    return `${name}'s favorite color is ${color}`;
}

const it1 =interrogate();
console.log(it1.next());
console.log(it1.next("이충현"));
console.log(it1.next("검정색"));

//제너레이터와 리턴
function* abc(){
    yield 'a';
    yield 'b';
    return 'c';
}

//제너레이트에서 return 하면 위치에 관계 없이 done: true, value프로퍼티는 return 이 반환하는 값이 됨
for(let l of abc()){
    console.log(l);
}

