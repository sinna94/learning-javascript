console.log(!2);
console.log(2 && 3);

let x = 1, y= 10, z;
z= (x++, y++);

console.log(z);

console.log(typeof null);

let n = 1;
//템플릿 문자열
console.log(`${n}`);


//해체 할당
const obj = { b: 2, c:3,d:4};

const{a,b,c} = obj;
console.log(a);
console.log(b);
console.log(c);

const arr =[1,2,3,4,5,6];

let [x1, y1, ...rest] = arr;
console.log(x1);
console.log(y1);
console.log(rest);