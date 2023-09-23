// HOMEWORK 2
// Креативное задание*:
// 2.1 Напишите следующую программу:
// - У клиента должен быть выбор из двух(или трех) видов кофе ( на ваш выбор).
// - Дайте названия вашим видам кофе.
// - Установите цену на кофе в зависимости от величины стаканчика( small, medium, big).
// - Выведите на экран название, затем рецепт выбранного кофе (используйте переменные для изменения рецепта и названия)
// и его стоимость (в зависимости от размера стаканчика). 
// - Компоненты кофе не влияют на стоимость.
// - Используйте подходящую комбинацию условий if, (else if), else для решения задачи.

let latteName = `LATTE`
let cappucchinoName = `CAPPUCCHINO`
let americanoName = `AMERICANO`

let waterPrice = 2
let coffeePrice = 50
let milkPrice = 10
let sugarPrice = 20
let sugarPortion = sugarPrice * 0.005

let smallCoeff = 0.7
let mediumCoeff = 1
let bigCoeff = 1.3

console.log(coffee("cappucchino", "big", 2))

function coffee(drinkType, size, sugarAmount) {
function recipe(drinkType){
    switch (drinkType) {
        case `latte`: return `${latteName}'s, recipe: water, coffee, plenty of milk.`
        case `cappucchino`: return `${cappucchinoName}'s, recipe: water, coffee, some milk.`
        case `americano`: return `${americanoName}'s, recipe: some water, a lot of coffee.`
        default: return "enter correct coffee type"
    }
}    

function calc(drinkType, sugarAmount){
    if (sugarAmount < 0 || typeof(sugarAmount) != "number") return "enter correct sugar amount"
    switch (drinkType) {
        case `latte`: return waterPrice * 0.1 + coffeePrice * 0.01 + milkPrice * 0.09 + sugarPortion * sugarAmount
        case `cappucchino`: return waterPrice * 0.09 + coffeePrice * 0.02 + milkPrice * 0.09 + sugarPortion * sugarAmount
        case `americano`: return waterPrice * 0.1 + coffeePrice * 0.03 + sugarPortion * sugarAmount  
    }
}
function sizeCoeff(drinkType, size) {
    switch (size) {
        case `small`: return calc(drinkType, sugarAmount) * smallCoeff
        case `medium`: return calc(drinkType, sugarAmount) * mediumCoeff
        case `big`: return calc(drinkType, sugarAmount) * bigCoeff
        default: return "enter correct cup size"
    }
}
switch (true){
    case (recipe(drinkType) == "enter correct coffee type"): return "enter correct coffee type"
    case (calc(drinkType, sugarAmount) == "enter correct sugar amount"): return "enter correct sugar amount"
    case (sizeCoeff(drinkType, size) == "enter correct cup size"): return "enter correct cup size"
    default: return `${recipe(drinkType)} \nYour ${size} cup of ${drinkType} with ${sugarAmount} portions of sugar cost is ${sizeCoeff(drinkType, size).toFixed(2)}$`
}
}
// function coffee2(drink, size) {
//     switch (drink) {
//         case `latte`: {
//             console.log(`drink name is ${latteName}, recipe: ${latteRec}`)
//             switch (size) {
//                 case `small`: return console.log(`cost = ` + latteCost*smallCoeff + "$")
//                 case `medium`: return console.log(`cost = ` + latteCost*mediumCoeff + "$")
//                 case `big`: return console.log(`cost = ` + latteCost*bigCoeff + "$")
//                 default: return console.log(`enter correct cup size`)
//             }
//         }    
//         case `cappucchino`: {
//             console.log(`drink name is ${cappucchinoName}, recipe: ${cappucchinoRec}`)
//             switch (size) {
//                 case `small`: return console.log(`cost = ` + cappucchinoCost*smallCoeff + "$")
//                 case `medium`: return console.log(`cost = ` + cappucchinoCost*mediumCoeff + "$")
//                 case `big`: return onsole.log(`cost = ` + cappucchinoCost*bigCoeff + "$")
//                 default: return console.log(`enter correct cup size`)
//             }
//         }
//         case `americano`: {
//             console.log(`drink name is ${americanoName}, recipe: ${americanoRec}`)
//             switch (size) {
//                 case `small`: return console.log(`cost = ` + americanoCost*smallCoeff + "$")
//                 case `medium`: return console.log(`cost = ` + americanoCost*mediumCoeff + "$")
//                 case `big`: return console.log(`cost = ` + americanoCost*bigCoeff + "$")
//                 default: return console.log(`enter correct cup size`)
//             }
//         }    
//         default: console.log(`enter correct coffee type`)
//     }
// }


// HOMEWORK 4
// Внедрите в свой код про кофе цикл, там, где это может понадобиться.
// Добавьте комментарии в код с пояснениями изменений, зачем они нужны.
// Продумайте на будущее план развития своего кода с кофе, где в реальной жизни он мог бы быть использован.

// Начните создавать мини-документацию к своему проекту.
// Пропишите требования так, как вы хотели бы их видеть на своем проекте и чтобы посторонний человек мог в них разобраться.
// Скорее всего, что-то придется добавить или изменить позже.

// HOMEWORK 5
// Внедрите в свой код с Кофе, как минимум 2 функции (на ваше усмотрение) и вызовите их в коде.

// FUNCTIONS
// Доработайте свой код с кофе и продумайте бизнес модель для своего кода.

// HOMEWORK 6
// Пересмотрите код с кофе и замените методами, если возможно