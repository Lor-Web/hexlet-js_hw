// Реализуйте и экспортируйте функцию getWeekends(),
// которая возвращает массив из двух элементов – названий выходных дней на английском.
// Функция принимает на вход параметр – формат возврата. Всего есть два возможных значения:

//  'long' (по умолчанию) – массив содержит значения saturday и sunday
// 'short' – массив содержит значения sat и sun

export const getWeekends = (item) => {
    let weekends = [];

    if (item === 'long' || item !== 'short') {
        weekends.push('saturday', 'sunday');
    }
    else if (item === 'short') {
        weekends.push('sat', 'sun')
    }

    return weekends;
}