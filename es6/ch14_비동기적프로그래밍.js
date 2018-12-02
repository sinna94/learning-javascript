/*
//콜백                                                                                        
console.log("Before timeout: " + new Date());

function f() {
    console.log("After timeout: " + new Date());
}
setTimeout(f, 60 * 1000);
console.log("I happen after setTimeout!");
console.log("Me too!");

//setInterval 과 clearInterval
const start = new Date();
let i = 0;
const intervalId = setInterval(function () {
    let now = new Date();
    if (now.getMinutes() !== start.getMinutes() || ++i > 10)
        return clearInterval(intervalId);
    console.log(`${i}:${now}`);
}, 5 * 1000);

//스코프와 비동기적 실행
function countdown() {
    let i;
    console.log("Countdown:");
    for (i = 5; i >= 0; i--) { // let i =5로 하면 해결 됨
        console.log(`i:${i}`);
        setTimeout(function () {
            console.log(i === 0 ? "GO!" : i);
        }, (5 - i) * 1000);
    }
}

countdown();
//for 루프가 끝나고 i 값이 -1 이 되고 콜백이 실행 됨 그래서 -1만 출력됨
//오류 우선 콜백
const fs = require('fs');
const fname='may_or_may_not_exist.txt';
fs.readFile(fname, function(err, date){
    if(err) return console.error(`error reading file ${fname}:${err.message}`);
    console.log(`${fname} constents: ${data}`);
})
//콜백에서 가장 먼저 하는 일은 err가 참 같은 값인지 확인하는 것
//콜백 헬
//콜백을 사용해 비동기적으로 실행은 가능하지만 한번에 여러가지를 기다려야한다면 콜백을 관리하기 어려워짐
fs.readFile('a.txt', function(err, dataA){
    if(err) console.error(err);
    fs.readFile('b.txt', function(err,dataB){
        if(err) console.error(err);
        fs.readFile('c.txt', function(err, dataC){
            if(err) console.error(err);
            setTimeout(function(){
                fs.writeFile('d.txt', dataA+dataB+dataC, function(err){
                    if(err) console.error(err);
                });
            }, 60*1000);
        });
    });
});

//프라미스(promise) - 콜백의 단점을 해결, 안전하고 관리하기 쉬운 코드 작성
//성공 또는 실패 둘 중 하나만 일어남
//reslove(성공), reject(실패) 콜백이 있는 함수로 Promise 인스턴스를 만들면 됨
function countdown(seconds){
    return new Promise(function(resolve, reject){
        for(let i=seconds;i>=0;i--){
            setTimeout(function(){
                if(i===13) return reject(new Error("oh my hod"));
                if(i>0) console.log(i+ '...');
                else resolve(console.log("GO!"));
            }, (seconds-i)*1000);
        }
    });
}

countdown(10);

//reject 나 resolve가 함수를 멈추지 않음 프라미스의 상태를 관리할 뿐
const p = countdown(15);
p.then(function(){
    console.log("countdown completed successfully");
});
p.catch(function(err){
    console.log("countdown experienced an error: " + err.message);
});

*/
//이벤트 : 콜백을 통해 이벤트를 주시(listen)
const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
    constructor(seconds, superstitious) {
        super();
        this.seconds = seconds;
        this.superstitious = !!superstitious;
    }

    go() {
        const countdown = this;
        const timeoutIds = [];
        return new Promise(function (resolve, reject) {
            for (let i = countdown.seconds; i >= 0; i--) {
                timeoutIds.push(
                    setTimeout(function () {
                        if (countdown.superstitious && i === 13) {
                            timeoutIds.forEach(clearTimeout);
                            return reject(new Error("oh my god"));
                        }
                        countdown.emit('tick', i);
                        if (i === 0) resolve();
                    }, (countdown.seconds - i) * 1000));
            }
        });
    }
}

const c = new Countdown(12, true);

c.on('tick', function (i) {
    if (i > 0) console.log(i + '...');
});
// c.go().then(function () {
//         console.log('GO!');
//     })
//     .catch(function (err) {
//         console.error(err.message);
//     })
c.go().then(launch).then(function (msg) {
        console.log(msg);
    })
    .catch(function (err) {
        console.error("Houston, we have a problem....");
    })
//프라미스 체인
/*
function launch(){
    return new Promise(function(resolve, reject){
        console.log("Lift off!");
        setTimeout(function(){
            resolve("In orbit!");
        }, 2*1000);
    })
}
*/
//결정되지 않는 프라미스 방지하기
//프라미스에 타임아웃 걸기
function launch() {
    return new Promise(function (resolve, reject) {
        if (Math.random() < 0.5) return;
        console.log("Lift off!");
        setTimeout(function () {
            resolve("In orbit!");
        }, 2 * 1000);
    })
}

function addTimeout(fn, timeout) {
    if (timeout === undefined) timeout = 1000;
    return function (...args) {
        return new Promise(function (resolve, reject) {
            const tid = setTimeout(reject, timeout, new Error("promise timed out"));
            fn(...args).then(function (...args) {
                    clearTimeout(tid);
                    resolve(...args);
                })
                .catch(function (...args) {
                    clearTimeout(tid);
                    reject(...args);
                });
        });
    }
}

c.go().then(addTimeout(launch, 11 * 1000)).then(function (msg) {
        console.log(msg);
    })
    .catch(function (err) {
        console.error("Houston, we have a problem: " + err.message);
    });

//제너레이터
//노드의 오류 우선 콜백을 프라미스로 변경
function nfcall(f, ...args) {
    return new Promise(function (resolve, reject) {
        f.call(null, ...args, function (err, ...args) {
            if (err) return reject(err);
            resolve(args.length < 2 ? args[0] : args);
        });
    });
}

function ptimeout(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, delay);
    });
}

//제너레이터 실행기
function grun(g) {
    const it = g();
    (function iterate(val) {
        const x = it.next(val);
        if (!x.done) {
            if (x.value instanceof Promise) {
                x.value.then(iterate).catch(err => it.throw(err));
            } else {
                setTimeout(iterate, 0, x.value);
            }
        }
    })();
}
const fs = require('fs');
/*
function* theFutureIsNow(){
    const dataA = yield nfcall(fs.readFile, 'a.txt');
    const dataB = yield nfcall(fs.readFile, 'b.txt');
    const dataC = yield nfcall(fs.readFile, 'c.txt');
    yield ptimeout(60*1000);
    yield nfcall(fs.writeFile, 'd.txt', dataA+dataB+dataC);
}

grun(theFutureIsNow);
*/
//Promise의 all 메소드
function* theFutureIsNow() {
    const data = yield Promise.all([
        nfcall(fs.readFile, 'a.txt'),
        nfcall(fs.readFile, 'b.txt'),
        nfcall(fs.readFile, 'c.txt'),
    ]);
    yield ptimeout(60 * 1000);
    yield nfcall(fs.writeFile, 'd.txt', data[0] + data[1] + data[2]);
}
grun(theFutureIsNow);

//제너레이터 실행기 예외처리
function* theFutureIsNow() {
    let data;
    try {
        const data = yield Promise.all([
            nfcall(fs.readFile, 'a.txt'),
            nfcall(fs.readFile, 'b.txt'),
            nfcall(fs.readFile, 'c.txt'),
        ]);
    } catch (err) {
        console.error("Unable to read one or more input files: " + err.message);
        throw err;
    }
    yield ptimeout(60 * 1000);
    try {
        yield nfcall(fs.writeFile, 'd.txt', data[0] + data[1] + data[2]);
    } catch (err) {
        console.err("Unable to write output file: " + err.message);
        throw err;
    }
}