// 1.1 Объявите две переменные: firstName и lastName.
//  1.2 Передайте значение “John”в переменную firstName и значение “Adams”  в переменную lastName.
//  1.3 Выведите на страницу значение firstName и lastName (должно показать John Adams).
// 1.4 Используйте те же переменные (перезапишите) firstName и lastName для того, чтобы вывести новое значение (Anna Karenina).

// В итоге на экране должно быть две строки:
// John Adams
// Anna Karenina


let firstName
let lastName
firstName = 'John'
lastName = 'Adams'
console.log(firstName + " " + lastName)
firstName = "Anna"
lastName = "Karenina"
console.log(firstName + " " + lastName)


// 3  Выведите в консоль тип данных следующих переменных:
// 4 Подумайте, какие переменные логично объявить через const , пропишите их и выведите на экран

let a
const C = 9
let str = "Hi 5!"
let b = true
let y = 9 + '1'
let x = 'a'/6
console.log("a equals " + a + " has type " + typeof (a))
console.log("C equals " + C + " has type " + typeof (C))
console.log("str equals " + str + " has type " + typeof (str))
console.log("b equals " + b + " has type " + typeof (b))
console.log("y equals " + y + " has type " + typeof (y))
console.log("x equals " + x + " has type " + typeof (x))

// Креативное задание*:
//  1.5 Напишите пошаговый алгоритм приготовления кофе и выведите его на экран (страницу).
// Желательно пронумеровать шаги. Каждый шаг должен быть выведен с новой строки.

const HUMID = "water"
let mainComponent = "coffee"
let sweeter = "sugar"
let container = "cup"
let mixer = "spoon"
let step = 1
console.log(step + " take a " + container + '\n' + 
            ++step + " add needed quantity of " + mainComponent + '\n' +
            ++step + " add some " + sweeter + " if you like it " + "\n" + 
            ++step + " fill the " + container + " with " + HUMID + "\n" +
            ++step + " mix the drink with " + mixer + '\n' +
            ++step + " enjoy the result! :)")