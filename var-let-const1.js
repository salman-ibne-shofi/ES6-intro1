// var : no reason to use var
// let : allow it to reassign
// const: do not allow it to reassign

const money = 25;
// money = 50;
rich = money + 25;
console.log(rich);

let count = 0;
count = count + 10;
console.log(count);

const numbers = [1, 2, 3, 4, 5];
// numbers = [4, 5, 9, 10, 24];
numbers[1] = 22;
numbers.push(11, 23, 21);
console.log(numbers);

// object
const student = {
	name: "moyna pakhi",
	class: 12,
};

// student = { name: "kokil konthi" };
student.name = "moyur konthi";
console.log(student);

// loop
let sum = 0;
for(let i = 0; i < 10; i++){
    const num = i;
    sum = sum + num;
}
console.log(sum);