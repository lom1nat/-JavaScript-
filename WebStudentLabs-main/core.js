/** Задание 1. Проверка на целое число */
function isInteger(n) {
    return Number.isInteger(n);
}

/** Задание 2. Массив чётных чисел от 2 до 20 */
function even() {
    const result = [];
    for (let i = 2; i <= 20; i += 2) {
        result.push(i);
    }
    return result;
}

/** Задание 3. Сумма от 1 до n циклом */
function sumTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

/** Задание 4. Сумма от 1 до n рекурсией */
function recSumTo(n) {
    if (n === 1) {
        return 1;
    }
    return n + recSumTo(n - 1);
}

/** Задание 5. Факториал */
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

/** Задание 6. Степень двойки */
function isBinary(n) {
    if (n < 1) {
        return false;
    }
    return (n & (n - 1)) === 0;
}

/** Задание 7. n-е число Фибоначчи */
function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    let prev = 0;
    let curr = 1;
    for (let i = 2; i <= n; i++) {
        [prev, curr] = [curr, prev + curr];
    }
    return curr;
}

/** Задание 8. Функция с накоплением результата */
function getOperationFn(initialValue, operatorFn) {
    if (typeof operatorFn !== 'function') {
        return function () {
            return initialValue;
        };
    }
    let current = initialValue;
    return function (newValue) {
        current = operatorFn(current, newValue);
        return current;
    };
}

/** Задание 9. Генератор арифметической прогрессии */
function sequence(start = 0, step = 1) {
    let value = start;
    return function () {
        const result = value;
        value += step;
        return result;
    };
}

/** Задание 10. Глубокое сравнение */
function deepEqual(firstObject, secondObject) {
    if (Number.isNaN(firstObject) && Number.isNaN(secondObject)) {
        return true;
    }
    if (firstObject === secondObject) {
        return true;
    }
    if (firstObject === null || secondObject === null ||
        typeof firstObject !== 'object' || typeof secondObject !== 'object') {
        return false;
    }
    const firstKeys = Object.keys(firstObject);
    const secondKeys = Object.keys(secondObject);
    if (firstKeys.length !== secondKeys.length) {
        return false;
    }
    return firstKeys.every((key) =>
        Object.prototype.hasOwnProperty.call(secondObject, key) &&
        deepEqual(firstObject[key], secondObject[key])
    );
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
