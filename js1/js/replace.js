let str = "Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены";
export function strip(str) {
 str.replace(/\s+/g,' ').trim();
     return str.replace(/\s+/g, ' ').trim();}
alert(strip(str));