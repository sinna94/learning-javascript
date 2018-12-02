const arr1 = [1, 2, 3]; // 숫자 배열
const arr2 = ["one", 2, 'three']; //비균질적 배열
const arr3 = [[1, 2, 3], ['one', 2, 'three']];//배열을 포함한 배열
//비균질적 배열
const arr4 = [
    { name: "Fred", type: "object", luckyNumbers : [5, 7, 13] },
    [
        { name: "Susan", type: "object" },
        { name: 'Anthony', type: 'object' },
    ],
    1,
    function () { return 'arrays can contaion functions too'; },
    'three',
];
console.log(arr4[0].luckyNumbers[0]);

console.log(arr1.length);
arr1[7] = 6;
console.log(arr1.length);
console.log(arr1);

const arr5 = [];
console.log(arr5.length);

//배열의 처음이나 끝에 요소 추가하거나 제거
//수정
//뒤에 추가
console.log(arr1.push("e"));
console.log(arr1);
//뒤에 제거
console.log(arr1.pop());
console.log(arr1);
//앞에 추가
console.log(arr1.unshift("a"));
console.log(arr1);
//앞에 제거
console.log(arr1.shift());
console.log(arr1);

//배열 뒤에 추가하기 - 사본 반환
const arr=[1,2,3,4,5];
console.log(arr.concat(4,5,6) + ' : ' + arr);

//배열 일부 가져오기 - 사본 반환
console.log(arr.slice(3) + ':' + arr);
console.log(arr.slice(2,4) + ':' + arr);
console.log(arr.slice(-2,-1) + ':' + arr);

//임의의 위치에 추가, 제거 - 수정
const arr6 = [1,5,7];
//삭제된 값 반환
console.log(arr6.splice(1,0,2,3,4) + " : " + arr6);
console.log(arr6.splice(5,0,6) + " : " + arr6);
console.log(arr6.splice(1,2) + " : " + arr6);
console.log(arr6.splice(2,1,'a','b') + " : " + arr6);

//배열 안에서 요소 교체하기 - 수정 - ES6
const arr7 = [1,2,3,4];
console.log(arr7.copyWithin(1,2) + " : " + arr7);
console.log(arr7.copyWithin(2,0,2) + " : " + arr7);
console.log(arr7.copyWithin(0,-3,-1) + " : " + arr7);

//특정 값으로 배열 채우기 - 수정 - ES6
const arr8 = new Array(5).fill(1);
console.log(arr8);
arr8.fill("a");
console.log(arr8);
arr8.fill("b",1);
console.log(arr8);
arr8.fill("c",2,4);
console.log(arr8);

//정렬, 역순 정렬 - 수정
const arr9 = [1,2,3,4,5];
arr9.reverse();
console.log(arr9);
arr9.sort();
console.log(arr9);

const arr10 = [{name:"Suzanne"}, {name:'Jim'}, {name: `Trevor`}, { name:"Amanda"}];
arr10.sort();
console.log(arr10);
arr10.sort((a,b) => a.name > b.name);
console.log(arr10);
console.log(arr10.sort((a,b) => a.name[1] < b.name[1]));
console.log(arr10);

console.log(arr9.sort());

//배열 검색
const o = {name: "Jerry"};
const arr11 = [1,5,"a",o,true,5,[1,2],"9"];
console.log(arr11.indexOf(5));
console.log(arr11.lastIndexOf(5));
console.log(arr11.indexOf(o));
console.log(arr11.indexOf('a', 4));

const arr12 = [{id:5, name:"Judith"}, {id:7, name:"Francis"}];
console.log(arr12.findIndex(o => o.id===5));

//map 과 filter 사본을 반환, 배열의 각 요소 변환
const cart =[{name: "widget", price:9.95}, {name:"Gadget", price: 22.95}];
const names = cart.map(x => x.name);
const prices = cart.map(x=>x.price);
const discountPrices = prices.map(x=>x*0.8);

const cart2 = names.map((x, i) => ({name:x, price: prices[i]}));
console.log(cart2);

const cards =[];
for(let suit of ['H', 'C', 'D', 'S'])
    for(let value=1;value<=13; value++)
        cards.push({suit, value})

console.log(cards);

console.log(cards.filter(c => c.value === 2));

function cardToString(c){
    const suits = {'H': '\u2665', 'C':'\u2663', 'D':'\u2666', 'S':'\u2660'};
    const values ={1:'A', 11:'J', 12:'Q', 13:'K'};

    for(let i=2;i<=10;i++) values[i]=i;
    console.log(values);
    return values[c.value] + suits[c.suit];
}

console.log(cards.filter(c=>c.value===3).map(cardToString));

//reduce 배열 자체를 변형
const arr13 = [5,6,2,4];
const sum= arr13.reduce((a,x) => a += x, 0);
console.log(sum);

const words = ["Beachball", 'rodeo', 'Angel', 'Aardvark'];
const alphaberical = words.reduce((a,x) => {
    if(!a[x[0]])
        a[x[0]] = [];
    a[x[0]].push(x);
    return a;
}, {});
console.log(alphaberical);

const longWords = words.reduce((a,w)=> w.length>5? a+" "+w : a, "").trim();
console.log(longWords);


//문자열 병합
const arr14 = [1, null, 'hello', 'world', true, undefined];
delete arr14[3];
console.log(arr14.join('*'));

const attributes = ["Nimble", "perceptive", "Generous"];
const html = '<ul><li>' + attributes.join('</li><li>')+'</li></ul>';
console.log(html);
