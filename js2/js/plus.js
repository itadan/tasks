export function plus(){
let numberOne = +prompt("Введите первое число для сложения");
let numberTwo = +prompt("Введите второе число для сложения");

let one = BigInt(numberOne);
let two = BigInt(numberTwo);
 
let result = (one + two);
alert(result);
}

