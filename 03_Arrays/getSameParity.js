// Реализуйте функцию getSameParity, которая принимает на вход массив чисел и возвращает новый, состоящий из элементов, у которых такая же чётность, как и у первого элемента входного массива. Экспортируйте функцию по умолчанию.
//
// Примеры:
// getSameParity([]);        // []
// getSameParity([1, 2, 3]); // [1, 3]
// getSameParity([1, 2, 8]); // [1]
// getSameParity([2, 2, 8]); // [2, 2, 8]

export default (arr) => {
    const result = [];
    const parity = arr[0] % 2 === 0;

    for (const item of arr) {
        if ((Math.abs(item) % 2 === 0) === parity) {
            result.push(item)
        }
    }

    return result;
}