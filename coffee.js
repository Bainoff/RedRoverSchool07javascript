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
let sugarPortionPrice = sugarPrice * 0.005
let norm = [] // [water, coffee, milk] quantities

let smallCoeff = 0.7
let mediumCoeff = 1
let bigCoeff = 1.3

console.log(coffee("latte", "big", 2))

function coffee(drinkType, size, sugarAmount) {

function recipe(drinkType){
    let res = ""
    res += `${drinkType.toUpperCase()}'s recipe:
        1. ${norms(drinkType)[0]*1000}g. of water
        2. ${norms(drinkType)[1]*1000}g. of coffee`
    if (norms(drinkType)[2] > 0) res += `
        3. ${norms(drinkType)[2]*1000}g. of milk.`
    return res
}    

function norms(drinkType){
    switch (drinkType) {
        case `latte`: return norm = [0.1, 0.01, 0.09]
        case `cappucchino`: return norm = [0.09, 0.02, 0.09]
        case `americano`: return norm = [0.1, 0.03, 0]
        default: return "enter correct coffee type"
    }
}

function calc(){
    return waterPrice * norms(drinkType)[0] + coffeePrice * norms(drinkType)[1]
         + milkPrice * norms(drinkType)[2] + sugarPortionPrice * sugarAmount
}

function sugar(sugarAmount){
    if (sugarAmount < 0 || typeof(sugarAmount) != "number") return "enter correct sugar amount"
    switch (sugarAmount) {
        case 0: return `without sugar`
        case 1: return `with 1 portion of sugar`
        case 2: return `with double sugar`
        default: return `with ${sugarAmount} portions of sugar`
    }
}

function sizeCoeff(size) {
    switch (size) {
        case `small`: return calc() * smallCoeff
        case `medium`: return calc() * mediumCoeff
        case `big`: return calc() * bigCoeff
        default: return "enter correct cup size"
    }
}
switch (true){
    case (recipe(drinkType) == "enter correct coffee type"): return "enter correct coffee type"
    case (calc(drinkType, sugarAmount) == "enter correct sugar amount"): return "enter correct sugar amount"
    case (sizeCoeff(size) == "enter correct cup size"): return "enter correct cup size"
    case (sugar(sugarAmount) == "enter correct sugar amount"): return "enter correct sugar amount"
    default: return `${recipe(drinkType)} \nYour ${size} cup of ${drinkType} ${sugar(sugarAmount)} cost is ${sizeCoeff(size).toFixed(2)}$`
}
}

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