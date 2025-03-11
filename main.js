// Возведение числа в степень

function degree(numb, exp) {
    if (exp === 0) {
        return 1; // Любое число в нулевой степени равно 1
    }

    let result = 1;
    for (let i = 0; i < exp; i++) {
        result *= numb; // Умножаем базу на себя exponent раз
    }

    return result;
}

console.log(degree(7, 2));
console.log(degree(2, 2));


//НОД  по алгоритму Эвклида

function greatestDivisor(a, b) {
    while (a !== 0 && b !== 0) {
        if (a >= b) {
            a = a - b
        }
        else {
            b = b - a
        }

    }
    console.log('НОД: ' + Math.max(a, b))

}
greatestDivisor(18, 12)

//Поиск максимальной цифры в числе

function degreesMax(userNum) {
    const numStr = userNum.toString()  // превращаем в строку
    let maxDigit = 0
    for (let i = 0; i < numStr.length; i++) {
        const digit = parseInt(numStr[i], 10);    // преобразуем текущую цифру в число, проходясь по каждой цифре в строке
        if (digit > maxDigit) {
            maxDigit = digit;
        }
    }
return maxDigit;
}

console.log('Максимальная цифра: ' + degreesMax(4569))

//Задание 4: функция, которая определяет простое ли переданное число

function isSimple(num) {
    // Проверяем, что число больше 1
    if (num <= 1) {
        return false; // Числа 1 и меньше не простые
    }

    for (let i = 2; i < num; i++) {
        // Если num делится на i без остатка, то это не простое число
        if (num % i === 0) {                    
            return false; // Число не простое, так как есть делитель
        }
    }

    // Если не нашли делителей, число простое
    return true;
}

const isNumberSimple = 29; // Проверяем, простое ли число
const result = isSimple(isNumberSimple);
console.log(`${isNumberSimple} простое число? : ${result}`);


//Задание 5: функция для вывода всех множителей переданного числа в порядке возрастания - 
// Множители — это числа, на которые данное число делится без остатка.

function getFactors(num) {
    // Создаем массив для хранения множителей
    const factors = [];

    for (let i = 1; i <= num; i++) {
        // Если num делится на i без остатка, добавляем i в массив множителей
        if (num % i === 0) {
            factors.push(i);
        }
    }

    // Возвращаем массив множителей
    return factors;
}

// Пример использования
const number = 48; // Замените на любое число, для которого хотите найти множители
const results = getFactors(number);
console.log(`Множители числа ${number}:`, results);



//Задание 6: написать функцию, которая возвращает число фибоначчи по переданному порядковому номеру
function fibonacci(n) {
    if (n < 0) {
        throw new Error("Порядковый номер не может быть отрицательным");  // инструкция throw для генерирования исключений
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    let a = 0;
    let b = 1;
    let fib = 1;

    for (let i = 2; i <= n; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }

    return fib;
}

const index = 10; // Порядковый номер
const fibNumber = fibonacci(index);
console.log('Число Фибоначчи: ' + fibNumber); 