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
switch (coffee) {
    case `latte`: {
        console.log(`drink name is ${latteName}, recipe: ${latteRec}, `)
        switch (size) {
            case `small`: console.log(`cost = ` + latteCost*smallCoeff); break
            case `medium`: console.log(`cost = ` + latteCost*mediumCoeff); break
            case `big`: console.log(`cost = ` + latteCost*bigCoeff); break
            default: console.log(`enter correct cup size`)
        }
        break
    }    
    case `cappucchino`: {
        console.log(`drink name is ${cappucchinoName}, recipe: ${cappucchinoRec}, `)
        switch (size) {
            case `small`: console.log(`cost = ` + cappucchinoCost*smallCoeff); break
            case `medium`: console.log(`cost = ` + cappucchinoCost*mediumCoeff); break
            case `big`: console.log(`cost = ` + cappucchinoCost*bigCoeff); break
            default: console.log(`enter correct cup size`)
        }
        break
    }
    case `americano`: {
        console.log(`drink name is ${americanoName}, recipe: ${americanoRec}, `)
        switch (size) {
            case `small`: console.log(`cost = ` + americanoCost*smallCoeff); break
            case `medium`: console.log(`cost = ` + americanoCost*mediumCoeff); break
            case `big`: console.log(`cost = ` + americanoCost*bigCoeff); break
            default: console.log(`enter correct cup size`)
        }
        break
    }    
    default: console.log(`enter correct coffee type`)
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