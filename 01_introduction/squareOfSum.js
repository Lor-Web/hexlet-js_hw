//Реализуйте функцию squareOfSum(), которая принимает на вход два числа и возвращает квадрат суммы этих чисел.
// Для вычисления значения используйте формулу из курса алгебры: a² + 2 * a * b + b².

//Примеры использования
//squareOfSum(2, 3) // 25
//squareOfSum(1, 10) // 121

//Как решил:
const squareOfSum = (firstNum, secondNum) => {
    const firstSum = firstNum ** 2;
    const secondSum = secondNum ** 2;

    return firstSum + 2 * firstNum * secondNum + secondSum;
}
