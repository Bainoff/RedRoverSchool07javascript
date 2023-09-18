// Напишите функцию с калькулятором (используйте предыдущий код), в которую, в качестве параметров,
// передаются три переменные, две - числовые и третья отвечает за знак арифметической операции (*, /, -, +).
// Проверьте работу функции.
// example:  function calculate(a, b, operator){}

// let num1 = 10;
// let num2 = 2;
// let oper = "/";

console.log(calculator(10,2,"*"))

function calculator(num1, num2, oper){
    switch (oper) {
        case "+": return addition(num1, num2)
        case "-": return substraction(num1, num2)
        case "*": return multiplication(num1, num2)
        case "/": return division(num1, num2)
        default: "provide correct operation"
    }

    function addition (number1, number2) {
        if (typeof (number1) == 'number' && typeof (number2) == 'number') return number1 + number2
        else return "provide correct numbers"
    }

    function substraction (number1, number2) {
        if (typeof (number1) == 'number' && typeof (number2) == 'number') return number1 - number2
        else return "provide correct numbers"
    }

    function multiplication (number1, number2) {
        if (typeof (number1) == 'number' && typeof (number2) == 'number') return number1 * number2
        else return "provide correct numbers"
    }

    function division (number1, number2) {
        if (number2 == 0) return "division by zero is forbidden"
        else if (typeof (number1) != 'number' || typeof (number2) != 'number') return "provide correct numbers"
     else return number1 / number2
    }
}

// Напишите функцию, которая создает и выводит в консоль кастомное приветствие с именем, которое вы передаете в функцию.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question('what is your name?', name => {
    console.log(`Hello, ${name}!`)
readline.close();
  });
// let window;
// window.alert("hey man")
// window.prompt("some test")