// Реализуйте и экспортируйте по умолчанию функцию, которая высчитывает среднее арифметическое
// элементов переданного массива. Благодаря этой функции мы наконец-то
// посчитаем среднюю температуру по больнице :)

export default (arr) => {
    let average

    if (arr.length > 0) {
        average = arr.reduce((total, amount, index, array) => {
            total += amount;
            if (index === array.length - 1) {
                return total / array.length;
            } else {
                return total;
            }
        })
    } else {
        average = null
    }

    return average
}