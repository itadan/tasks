export function multiplication(){
let numberOne = +prompt("Введите первое число для умножения");
let numberTwo = +prompt("Введите второе число для умножения");

let one = BigInt(numberOne);
let two = BigInt(numberTwo);
 
let result = (one * two);
alert(result);
}
