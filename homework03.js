// 1. Напишите программу калькулятора со switch, обработайте возможные ошибки ввода
let a = 5;
let b = 55;
let oper = '*';
if (b == 0 && oper == '/') {
    console.log('division by zero is forbidden');
} else {
    switch (oper) {
        case '+':
            console.log(`${a} + ${b} = ` + a + b);
            break;
        case '-':
            console.log(`${a} - ${b} = ` + a - b);
            break;
        case '*':
            console.log(`${a} * ${b} = ` + a * b);
            break;
        case '/':
            console.log(`${a} / ${b} = ` + a / b);
            break;
        default: console.log("enter correct operation")
    }
}

// Попробуйте внедрить в свою программу с кофе вложенный if

let coffee = `americano`
let size = `big`

let latteName = `LATTE`
let cappucchinoName = `CAPPUCCHINO`
let americanoName = `AMERICANO`
let latteRec = `water, coffee, plenty of milk`
let cappucchinoRec = `water, coffee, some milk`
let americanoRec = `some water, a lot of coffee`
let smallCoeff = 0.7
let mediumCoeff = 1
let bigCoeff = 1.3
let latteCost = 7
let cappucchinoCost = 6
let americanoCost = 5
if (coffee == `latte`) {
    console.log(`drink name is ${latteName}, recipe: ${latteRec}, `)
    if (size == `small`) console.log(`cost = ` + latteCost * smallCoeff)
    else if (size == `medium`) console.log(`cost = ` + latteCost * mediumCoeff)
    else if (size == `big`) console.log(`cost = ` + latteCost * bigCoeff)
    else console.log(`enter correct cup size`)
} else if (coffee == `cappucchino`) {
    console.log(`drink name is ${cappucchinoName}, recipe: ${cappucchinoRec}, `)
    if (size == `small`) console.log(`cost = ` + cappucchinoCost * smallCoeff)
    else if (size == `medium`) console.log(`cost = ` + cappucchinoCost * mediumCoeff)
    else if (size == `big`) console.log(`cost = ` + cappucchinoCost * bigCoeff)
    else console.log(`enter correct cup size`)
} else if (coffee == `americano`) {
    console.log(`drink name is ${americanoName}, recipe: ${americanoRec}, `)
    if (size == `small`) console.log(`cost = ` + americanoCost * smallCoeff)
    else if (size == `medium`) console.log(`cost = ` + americanoCost * mediumCoeff)
    else if (size == `big`) console.log(`cost = ` + americanoCost * bigCoeff)
    else console.log(`enter correct cup size`)
} else console.log(`enter correct coffee type`)

// При помощи цикла for выведите чётные числа от 2 до 10

for (i = 2; i <= 10; i = i + 2) console.log(i)

// У вас есть массив со скобками, предположим 
// [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] . Количество элементов и последовательность может быть разной.
// Нужно выяснить, равно ли количество открывающих и закрывающих скобок одного типа. Последовательность не важна.
let countLeft = 0;
let countRight = 0;
let array = ['(', ')', '(', ')', ')']
for (let i of array) {
    if (i == '(') countLeft++;
    else if (i == ')') countRight++;
    else console.log('give correct array')
}
console.log('number of brackets is equal - ' + (countLeft == countRight))

// Решите задачу с улиткой, используя for loop.*
// Поправка, отложите задачу до следующего урока. Там решение с другим циклом

let height = 0;
let days = 0;
for (i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
    days++;
    height += 3;
    if (height >= 5) break;
    height -= 2;
}
console.log(days + ` days to the top of the wall`)

// Креативное задание*(не показываем решение до понедельника):
// Имеется зашифрованное предложение 
// “Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
// мы знаем, что оно означает “You are the best QA ever”.
// Нам нужно придумать программу дешифратор.

let str = 'Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr';
str = str.replaceAll('br', '')
console.log(str);

let str2 = 'Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr';
let Sentence = "";
for (let i=0; i < str2.length; i= i + 3) {
    Sentence = Sentence + str2[i];
}
console.log(Sentence)

// Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему

let str3 = "You are the best QA ever";
let j = '';
let str4 = "";
for (i = 0; i < str3.length; i++) {
str4 = str4 + "TT" + str3[i]
}
console.log(str4)