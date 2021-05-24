// Реализуйте функцию buildDefinitionList(),
// которая генерирует HTML список определений (теги <dl>, <dt> и <dd>) и возвращает получившуюся строку.
// При отсутствии элементов в массиве функция возвращает пустую строку. Экспортируйте функцию по умолчанию.

export default (arr) => {
    let string = ''
    let value;

    for (let i = 0; i < arr.length; i++) {
        string += `<dt>${arr[i][0]}</dt><dd>${arr[i][1]}</dd>`
    }

    if (arr.length > 0) {
        value = `<dl>${string}</dl>`
    } else {
        value = '';
    }

    return value
}