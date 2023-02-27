export function minus(){
let numberOne = +prompt("Введите первое число для вычитания");
let numberTwo = +prompt("Введите второе число для вычитания");

let one = BigInt(numberOne);
let two = BigInt(numberTwo);
 
let result = (one - two);
alert(result);
}
