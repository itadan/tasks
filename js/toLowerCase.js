
export  function lowerCase(str) {
    let myString = prompt('Введите строку');
    return myString[0].toUpperCase() + myString.slice(1);
}

alert(lowerCase('')); 