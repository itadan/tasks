export function TwoString(initStr) {

    const strItems = initStr.split(' ');
    
    const result = {};
    strItems.forEach( item => {
    
    const normalItem = item.toLowerCase();
    
    
    if(normalItem in result) {
    result[normalItem] = result[normalItem] + 1;
    } else {
    result[normalItem] = 1;
    }
    });
    
    return Object.keys(result).map(k => {
    return `Слово: ${k}: ${result[k]};`
    }).join(' ')
    }
    alert(TwoString('Текст в котором слово текст несколько раз встречается и слово тоже'))
  