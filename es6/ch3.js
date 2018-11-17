const obj ={};

obj.color = 'yellow';

obj['not an identifier'] = 3;
obj['not an identifier'];
obj['color'];

const SIZE = Symbol();
obj[SIZE] = 8;
obj[SIZE];

console.log(obj);

obj.SIZE = 0;

console.log(obj);

console.log(obj.SIZE);

const sam1 = {
    name: 'Sam',
    age: 4,
};

const sam2 = {name: 'Sam', age: 4};

const sam3 = {name: 'Sam', classification: {
    kingdom: 'Anamalia',
    phylum: 'Chordata',
    class: 'Mamalia',
    order: 'Carnivoria',
    family: 'Felidae',
    subfamily: 'elinae',
    genus: 'Felis',
    species: 'catus',
    },
};

console.log( sam1.age +" " + sam2.age);

sam3.speak = function(){ return "Meow!";};

console.log(sam3.speak());

delete sam3.classification;
delete sam3.speak;

console.log(sam3);

const now = new Date();
console.log(now);

const halloween = new Date(2018,9,31);

const halloweenParty = new Date(2018,9,31,19,0);
//19:00 

const d = new Date();
const ts = d.valueOf();

let o = {a:1};
let p =o;
o.a=2
console.log(p);