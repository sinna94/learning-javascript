const bruce = { name: "Bruce"};
const madeline = {name: "Madeline"};

function greet(){
    return `Hello, I'm ${this.name}!`;
}

greet();
console.log(greet.call(bruce));
console.log(greet.call(madeline));

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(bruce, 1949, "singer");
update.call(madeline, 1942, "actor");

console.log(bruce);
console.log(madeline); 

update.apply(bruce, [1955, "actress"]);
update.apply(madeline, [1999, "writer"]);

console.log(bruce);
console.log(madeline); 

const arr = [2, 3, -5, 15, 7];
console.log(Math.max.apply(null, arr));
console.log(Math.min.apply(null, arr));

const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce);

const updateBruce = update.bind(bruce);

updateBruce(1904, "actor");

console.log(bruce);

updateBruce.call(madeline, 1274, "king");

console.log(madeline);