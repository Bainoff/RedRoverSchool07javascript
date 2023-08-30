// 1.1 Напишите программу по согласованию отпуска в зависимости от месяца.
// Если месяц “July” или “August”, то программа должна показать - ‘approved’,
// если другие месяцы, то - “denied”.

let month = `August`
if (month == `July` || month == `August`) {
    console.log(`approved`)
} else {
    console.log(`denied`)
}

// 1.2 Напишите простенький калькулятор (*, /, +, -).
// Проверьте ваш код на охват исключений для арифметических операций.
// У вас должны быть две переменные для исходных чисел и одна для оператора.
// В зависимости от оператора, должно происходить то или иное арифметическое действие
// и выводиться результат в консоль.

let number1 = 10;
let number2 = 3;
let oper = `/`;
if (oper != `+` && oper != `-` && oper != `/` && oper != `*`) {
    console.log(`enter correct operation sign`)
} else if (oper == `/` && number2 == 0) {
    console.log(`division by zero is forbidden`)
} else if (typeof (number1) != `number` || typeof (number2) != `number`) {
    console.log(`enter correct numbers`)
} else if (oper == `+`) {
    console.log(number1 + number2)
} else if (oper == `-`) {
    console.log(number1 - number2)
} else if (oper == `*`) {
    console.log(number1 * number2)
} else if (oper == `/`) {
    console.log(number1 / number2)
}

// 1.3 Решите задачу с помощью пройденных тем (исключительно с помощью пройденных тем):
// «Улитка ползёт вверх по стене высотой 5 метров.
// Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра.
// За сколько дней она доползёт до вершины стены.»

let height = 0;
for (i = 1; i < 5; i++) {
    height += 3;
    if (height >= 5) {
        console.log(i + ` days to the top of the wall`)
        break;
    }
    height -= 2;
}

// Креативное задание*:
// 2.1 Напишите следующую программу:
// - У клиента должен быть выбор из двух(или трех) видов кофе ( на ваш выбор).
// - Дайте названия вашим видам кофе.
// - Установите цену на кофе в зависимости от величины стаканчика( small, medium, big).
// - Выведите на экран название, затем рецепт выбранного кофе (используйте переменные для изменения рецепта и названия)
// и его стоимость (в зависимости от размера стаканчика). 
// - Компоненты кофе не влияют на стоимость.
// - Используйте подходящую комбинацию условий if, (else if), else для решения задачи.

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
    if (size == `small`) console.log(`cost = ` + latteCost*smallCoeff)
    else if (size == `medium`) console.log(`cost = ` + latteCost*mediumCoeff)
    else if (size == `big`) console.log(`cost = ` + latteCost*bigCoeff)
    else console.log(`enter correct cup size`)
} else if (coffee == `cappucchino`) {
    console.log(`drink name is ${cappucchinoName}, recipe: ${cappucchinoRec}, `)
    if (size == `small`) console.log(`cost = ` + cappucchinoCost*smallCoeff)
    else if (size == `medium`) console.log(`cost = ` + cappucchinoCost*mediumCoeff)
    else if (size == `big`) console.log(`cost = ` + cappucchinoCost*bigCoeff)
    else console.log(`enter correct cup size`)
} else if (coffee == `americano`) {
    console.log(`drink name is ${americanoName}, recipe: ${americanoRec}, `)
    if (size == `small`) console.log(`cost = ` + americanoCost*smallCoeff)
    else if (size == `medium`) console.log(`cost = ` + americanoCost*mediumCoeff)
    else if (size == `big`) console.log(`cost = ` + americanoCost*bigCoeff)
    else console.log(`enter correct cup size`)
} else console.log(`enter correct coffee type`)
