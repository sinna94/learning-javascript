//맵 ES6 전에는 키와 값을 연결하기 위해 객체 사용
const u1 = {
    name: 'Cynthia'
};
const u2 = {
    name: 'Jackson'
};
const u3 = {
    name: 'Olive'
};
const u4 = {
    name: 'James'
};

const userRoles = new Map();
userRoles.set(u1, 'User');
userRoles.set(u2, 'User');
userRoles.set(u3, 'Admin');

/*
userRoles.set(u1,'User').set(u2,'User').set(u3,'Admin');

conset userRoles = new Map([
    [u1, 'User'],
    [u2, 'User'],
    [u3, 'Admin']
]);
*/

console.log(userRoles.get(u2));
console.log(userRoles.has(u1));
console.log(userRoles.has(u4));
userRoles.set(u2, "Admin");
console.log(userRoles.get(u2));
console.log(userRoles.size);

for (let u of userRoles.keys())
    console.log(u.name);
console.log();

for (let r of userRoles.values())
    console.log(r);
console.log();

for (let ur of userRoles.entries())
    console.log(`${ur[0].name}: ${ur[1]}`);
console.log();

for (let [u, r] of userRoles.entries())
    console.log(`${u.name}: ${r}`);
console.log();

for (let [u, r] of userRoles)
    console.log(`${u.name}: ${r}`);
console.log();

userRoles.delete(u2);
console.log(userRoles);

userRoles.clear();
console.log(userRoles);

//위크맵 WeakMap
//키는 반드시 객체, 이터러블이 아니며 clear() 없음, 키가 가비지콜렉션에 포함될 수 있음

const SecretHolder = (function () {
    const secrets = new WeakMap();
    return class {
        setSecret(secret) {
            secrets.set(this, secret);
        }
        getSecret() {
            return secrets.get(this);
        }
    }
})();

const a = new SecretHolder();
const b = new SecretHolder();

a.setSecret('secret A');
b.setSecret('secret B');
a.setSecret('secret A 2');

console.log(a.getSecret());
console.log(b.getSecret());
console.log();
//셋 : 중복을 허용하지 않는 데이터 셋

const roles = new Set();
roles.add("User");
roles.add("Admin");

console.log(roles.size);

//중복되는 값을 넣으면 아무 일도 일어나지 않음
roles.add('User');
console.log(roles.size);

//삭제시 성공: true, 실패: false 반환
console.log(roles.delete('User'));

//위크셋 WeakSet
const naughty = new WeakSet();

const children = [{
        name: "Suzy"
    },
    {
        name: "Derek"
    },
];

naughty.add(children[1]);

for (let child of children) {
    if (naughty.has(child))
        console.log(`Coal for ${child.name}!`);
    else
        console.log(`Presents for ${child.name}!`);
}