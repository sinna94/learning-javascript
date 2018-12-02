const SYM = Symbol();

const o = {
    a: 1,
    b: 2,
    c: 3,
    [SYM]: 4
};

for (let prop in o) {
    if (!o.hasOwnProperty(prop)) continue;
    console.log(`${prop}:${o[prop]}`);
}

Object.keys(o).forEach(prop => console.log(`${o[prop]}`));

const o2 = {
    apple: 1,
    xochitl: 2,
    balloon: 3,
    guitar: 4,
    xylophone: 5,
};

Object.keys(o2).filter(prop => prop.match(/^x/)).forEach(prop => console.log(`${prop} : ${o2[prop]}`));

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.userGears = ['P', 'N', 'R', 'D'];
        this.userGear = this.userGears[0];
        this.vin = Car.getNextVin();
    }
    get userGear() {
        return this._userGear;
    }
    set userGear(value) {
        if (this.userGears.indexOf(value) < 0)
            throw new Error(`Invalid gear: ${value}`);
        this._userGear = value;
    }
    shift(gear) {
        this.userGear = gear;
    }
    static getNextVin() {
        return Car.nextVin++;
    }

    static areSimilar(car1, car2) {
        return car1.make === car2.make && car1.model === car2.model;
    }
    static areSame(car1, car2) {
        return car1.vin === car2.vin;
    }
}

// const car1=new Car("Tesla", "Model S");
// const car2=new Car("Mazda", "3i");
// car1.shift('D');
// car2.shift('R');
// console.log(car1.userGear);
// console.log(car2.userGear);

// //ES5 에서 만든 클래스
// function Car(make,model){
//     this.make=make;
//     this.model=model;
//     this._userGears=['P','N','R','D'];
//     this._userGear=this.userGears[0];
// }

const car1 = new Car();
const car2 = new Car();
//car1 에는 shift 메소드가 없지만 prototype의 shift 메소드를 호출
console.log(car1.shift === Car.prototype.shift);
car1.shift('D');
console.log(car1.userGear);
console.log(car1.shift === car2.shift);
//car1 에 shift 메소드 추가하면 car1의 shift 메소드를 호출
car1.shift = function (gear) {
    this.userGear = gear.toUpperCase();
}
console.log(car1.shift === Car.prototype.shift);
car1.shift('d');
console.log(car1.userGear);
console.log(car1.shift === car2.shift);

//정적메소드

Car.nextVin = 0;
const car3 = new Car("Tesla", "S");
const car4 = new Car("Mazda", "3");
const car5 = new Car("Mazda", "3");

console.log(car3.vin);
console.log(car4.vin);
console.log(car5.vin);

console.log(Car.areSimilar(car3, car4));
console.log(Car.areSimilar(car5, car4));
console.log(Car.areSame(car3, car4));
console.log(Car.areSame(car5, car4));

//상속, 프로토타입 체인
class Vehicle {
    constructor() {
        this.passengers = [];
        console.log("Vehicle created");
    }
    addPassenger(p) {
        this.passengers.push(p);
    }
}

class Car2 extends Vehicle {
    constructor() {
        super();
        console.log("Car created");
    }
    deployAirbags() {
        console.log("BWOOSH!");
    }
}

const v = new Vehicle(0);
v.addPassenger("Frank");
v.addPassenger("Judy");
console.log(v.passengers);

const c = new Car2();
c.addPassenger("Alice");
c.addPassenger("Cameron");
console.log(c.passengers);
//v.deployAirbags() -> 에러
c.deployAirbags();

//다형성
class Motorcycle extends Vehicle {}
const c2 = new Car2();
const m = new Motorcycle();
console.log(c instanceof Car2);
console.log(c instanceof Motorcycle);
console.log(m instanceof Car2);
console.log(m instanceof Motorcycle);
console.log(m instanceof Vehicle);

//객체 프로퍼티 나열
class Super {
    constructor() {
        this.name = 'Super';
        this.isSuper = true;
    }
}

Super.prototype.sneaky = 'not recommended!';

class Sub extends Super {
    constructor() {
        super();
        this.name = 'Sub';
        this.isSub = true;
    }
}
const obj = new Sub();

for(let p in obj){
    console.log(`${p}: ${obj[p]}` + (obj.hasOwnProperty(p) ? '':'(ingerited)'));
}

//name, isSuper, isSub 는 인스턴스에서 정의
//sneaky는 슢퍼클래스의 프로토타입에 직접 정의

//문자열 표현
class Car3 {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.userGears = ['P', 'N', 'R', 'D'];
        this.userGear = this.userGears[0];
        this.vin = Car.getNextVin();
    }
    get userGear() {
        return this._userGear;
    }
    set userGear(value) {
        if (this.userGears.indexOf(value) < 0)
            throw new Error(`Invalid gear: ${value}`);
        this._userGear = value;
    }
    shift(gear) {
        this.userGear = gear;
    }
    static getNextVin() {
        return Car.nextVin++;
    }

    static areSimilar(car1, car2) {
        return car1.make === car2.make && car1.model === car2.model;
    }
    static areSame(car1, car2) {
        return car1.vin === car2.vin;
    }
    toString(){
        return `${this.make} ${this.model} ${this.vin}`;
    }
}

Car3.nextVin=0;

const newCar = new Car3("현대", "소나타");
console.log(newCar.toString());

//다중상속, 믹스인
class InsurancePolicy{}
function makeInsurable(o){
    o.addInsurancePolicy = function(p) {this.insurancePolicy=p;}
    o.getInsurancePolicy = function(){return this.insurancePolicy}
    o.isInsured=function(){return !!this.insurancePolicy;}
}

// const insurCar = new Car3("현대", "소나타");
// makeInsurable(insurCar);
// insurCar.addInsurancePolicy(new InsurancePolicy());
// console.log(insurCar);

makeInsurable(Car.prototype);
const insurCar = new Car();
insurCar.addInsurancePolicy(new InsurancePolicy());
console.log(insurCar);