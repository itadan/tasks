export function division() {
    let numberOne = +prompt("Введите первое число для деления");
    let numberTwo = +prompt("Введите второе число для деления");
    let one = BigInt(numberOne);
    let two = BigInt(numberTwo);
  
    let result = (one / two);
    alert(result);
  }