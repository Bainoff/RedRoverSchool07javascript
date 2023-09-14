// 1// let vegetables1 = [‘Капуста‘, ‘Репа‘, ‘Редиска‘, ‘Морковка' , ‘лук‘, ‘картошка‘];
//вывести строки содержащие буквы и ‘а' и ‘о' слова не должны повторятся
console.log("-----TASK 1-----")
let vegetables1 = ['Капуста', 'Репа', 'Редиска', 'Морковка' , 'лук', 'картошка']
for (const el of vegetables1) {
    for (i = 0; i < el.length; i++) {
        if (el.charAt(i) == 'а' || el.charAt(i) == 'о') {
            console.log(el)
            break
        }
    }
}
// 2/// let arr1 = [‘mama', 1000, ‘Sunday', 3, ‘my',true,‘limit', null,15, ‘elite', undefined, 100, ‘destruction', 313,‘abc', 425, ‘apples'];
//вывести строки с четным индексом и четной длиной
//* только первое слово
console.log("-----TASK 2-----")
let arr1 = ['mama', 1000, 'Sunday', 3, 'my',true,'limit', null,15, 'elite', undefined, 100, 'destruction', 313,'abc', 425, 'apples'];
for (i = arr1.length-1; i >= 0; i--) {
    if (typeof arr1[i] == "string" && arr1[i].length % 2 == 0) console.log(arr1[i])
}
console.log(arr1[0])
// 3/// let arr1 = [‘mama', 1000, ‘Sunday', 3, ‘my',true,‘limit', null,15, ‘elite', undefined, 100, ‘destruction', 313,‘abc', 425, ‘apples'];
//вывести строки с четным индексом и четной длиной в обратном порядке
//* только первое слово
//4// // let numbers = [ 3, 5, 25, 70,  171,200,326, 345, 999, 1000, 1005]
// найти сумму всех чисел
console.log("-----TASK 3-----")
let numbers = [ 3, 5, 25, 70, 171, 200, 326, 345, 999, 1000, 1005 ]
let sum = 0
for (const el of numbers) sum += el
console.log("sum of all numbers is", sum)
//5//let arr1 = [‘mama', 1000, ‘Sunday', 3, ‘my',true,‘limit', null,15, ‘elite', undefined, 100, ‘destruction', 313,‘abc', 425, ‘apples'];
// найти сумму всех чиселб выведите в формате ‘The sum of all numbers is: 25'
console.log("-----TASK 4-----")
let sum2 = 0
for (const el of arr1) if (typeof el == "number") sum2 += el
console.log("sum of numbers (distinct) is", sum2)
//6// let arr1 = [‘mama', 1000, ‘Sunday', 3, ‘my',true,‘limit', null,15, ‘elite', undefined, 100, ‘destruction', 313,‘abc', 425, ‘apples'];
// получите массив [1000, 3, true, null, 15, undefined, 100, 313, 425];
console.log("-----TASK 5-----")
for (i = 0; i < arr1.length; i++) if (typeof arr1[i] == "string") arr1.splice(i, 1)
console.log(arr1)