function getGreeting(){
    return "Hello World";
}

console.log(getGreeting());

///매개변수 해체
function getSentence1({subject, verb, object}){
    return `${subject}${verb}${object}`;
}

const o = {
    subject: "I",
    verb: "love",
    object: "you"
};

console.log(getSentence1(o));

// 배열 해체
function getSentence2([subject, verb, object]){
    return `${subject}${verb}${object}`;
}

const arr = ["i", "j", "lk"];
console.log(getSentence2(arr));