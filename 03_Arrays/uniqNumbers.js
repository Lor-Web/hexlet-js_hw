// Реализуйте и экспортируйте по умолчанию функцию, которая высчитывает сумму всех элементов массива,
// которые делятся без остатка на 3 (три).
// В случае пустого массива функция должна вернуть 0 (для этого в коде можно использовать guard expression).

export default (arr) => {
    const uniqNumbers = [];
    let sum;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            uniqNumbers.push(arr[i])
        }
    }

    if (arr.length > 0 && uniqNumbers.length > 0) {
        sum = uniqNumbers.reduce((total, amount) => total + amount);
    }
    else {
        sum = 0;
    }

    return sum;
}