//에러 객체
function validateEmail(email){
    return email.match(/@/)?
        email :
        new Error('invalid email');
}

const err = new Error('invalid email');

let email = "jane@doe.com";

const validatedEmail = validateEmail(email);
if(validatedEmail instanceof Error){
    console.error(`Error: ${validatedEmail.message}`);
}else{
    console.log(`Valid email : ${validatedEmail}`);
}

//try-catch
email = null;
try{
    const validatedEmail = validateEmail(email);
    if(validatedEmail instanceof Error){
        console.error(`Error: ${validatedEmail.message}`);
    }else{
        console.log(`Valid email: ${validatedEmail}`);
    }
}catch(err){
    console.error(`Error: ${err.message}`);
}

//에러 넘기기
//throw new Error("error");

//호출스택
function a(){
    console.log('a: calling b');
    b();
    console.log('a: done');
}

function b(){
    console.log('b: calling c');
    c();
    console.log('b: done');
}

function c(){
    console.log('c: throwing error');
    throw new Error('c error');
    console.log('c: done');
}

function d(){
    console.log('d: calling c');
    c();
    console.log('d: done');
}

try{
    a();
}catch(err){
    console.log(err.stack);
}

try{
    d();
}catch(err){
    console.log(err.stack);
}