let str =  prompt("Введите текст для подсчета слов");
export function length(str) {
  return str.trim().split(/\s+/).length;
}
alert(length(str)); 