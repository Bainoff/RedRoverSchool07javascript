// Задания на закрепление (можно и нужно обсуждать в группе):
// Часть 1 (!!! У вас будет отдельная запись для первой части, там говорится, что это задание пятое, не обращайте внимания, просто идем чуть быстрее)

// Нарисуйте ромб

//          1
//         121
//        12321
//       1234321
//      123454321
//     12345654321
//    1234567654321
//   123456787654321
//  12345678987654321
// 1234567890987654321
//  12345678987654321
//   123456787654321
//    1234567654321
//     12345654321
//      123454321
//       1234321
//        12321
//         121
//          1
// let size = 10
// for (let line = 1; line < size; line++) {
//     let str = ""
//     for (let space = size; space > line; space--) {
//         str += " "
//     }
//     let col = 1
//     for (col = 1; col < line; col++){
//         str += col
//     }
//     for (col; col > 0; col--) {
//         str += col
//     }
//     if (lin)
//     console.log(str);
//     for ( let space = 1; space < size; space++) {
        
//     }
// }

let arr = [1,2,3,4,5,6,7,8,9,0]
for (let line = 1; line < (arr.length*2); line++){
    let str = ""
    let counter = Math.abs(arr.length-line)
    for (let space = counter; space > 0; space--) str += " "
    let col = 0
    for (col = 0; col < (arr.length-counter-1); col++) str += arr[col]
    for (col; col >= 0; col--) str += arr[col]
    console.log(str);
}

// 2. Нарисуйте елочку
//     *
//    ***
//   *****
//  *******
// *********

console.log()
let spruceSize = 5
for (let line = 0; line <= spruceSize; line++){
    let str = ""
    for (let space = spruceSize-line; space > 0; space--) str += " "
    for (let aster = 0; aster < (line*2-1); aster ++) str += "*" 
    console.log(str)
}
    
// 3. Нарисуйте треугольник*
// 1 
// 2 6 
// 3 7 10 
// 4 8 11 13 
// 5 9 12 14 15

console.log()
let triangleSize = 5
for (let line = 1; line <= triangleSize; line++){
    let str = line
    let strNum = line
    for (col = 1; col < line; col++) {
        strNum += triangleSize-col
        str += " "
        str += strNum
}
console.log(str)
}

// 4. Усовершенствуйте решение задачи про улитку с помощью  наиболее подходящего цикла. 

console.log()
let height = 0;
let days = 0;
let wall = 5;
let progress = 3
let regress = 2
while (height <= wall) {
    days++;
    height += progress;
    if (height >= wall) break;
    height -= regress;
}
console.log(`Snail task: ` + days + ` days to the top of the wall`)

// 5. Задача с интервью*
// У вас есть массив с тремя видами скобок, предположим 
// [ '{', ')’, '(', ')’, ')’, '}, '[', ']’, ')’] . Количество элементов и последовательность может быть разной.
// Нужно выяснить, все ли скобки являются парными  в правильной последовательности (открывающая и затем закрывающая).
// Также, скобки могут быть вложенными, но тем не менее, если последовательность соблюдена, то они считаются парными.
//  Пример:
// [ ')’, '{', '(’, '(', ')’, ')’, '}, '[', ']’, '(' ] - у двух нет пары (нарушена последовательность)
// [ '{', '(’, '(', ')’, ')’, '}, '[', ']’ ] - у всех есть пара
// [ '{', '(’, '(', ')’, ')’, '}, '[', '[’, ')’ ] - у трех нет пары

// let arrBrackets = []
// let arrBrackets = [ '{', ')', '(', ')', ')', '}', '[', ']', ')'] // brackets are not paired or sequence is corrupted
// let arrBrackets = [ ')', '{', '(', '(', ')', ')', '}', '[', ']', '('] // brackets are not paired or sequence is corrupted
// let arrBrackets = [ '{', '(', '(', ')', ')', '}', '[', ']'] // array is perfectly paired!
// let arrBrackets = [ '{', '(', '(', ')', ')', '}', '[', '[', ')'] // brackets are not paired or sequence is corrupted
// let arrBrackets = [ '{', '(', '}', '(', ')', ')', '[', ']' ] // sequence is corrupted
// let arrBrackets = [ '{', '}', '(', ')', '[', ']' ] // array is perfectly paired!


let curly = 0
let round = 0
let square = 0
let i = 0
if (arrBrackets.length == 0 || arrBrackets == null) {
    console.log("please, provide correct array")
}
for (i = 0; i < arrBrackets.length; i++) {
    if ((arrBrackets[0] == '}' || arrBrackets[0] == ']' || arrBrackets[0] == ')') ||
    (arrBrackets[arrBrackets.length-1] == '{' || arrBrackets[arrBrackets.length-1] == '[' ||
    arrBrackets[arrBrackets.length-1] == '(') || arrBrackets.length % 2 != 0) {
        console.log("brackets are not paired or sequence is corrupted")
        break
    } else {
        switch (arrBrackets[i]){
            case '{': if (arrBrackets[i+1] == ')' || arrBrackets[i+1] == ']') {
                console.log("sequence is corrupted1")
                break
            }
            case '(': if (arrBrackets[i+1] == '}' || arrBrackets[i+1] == ']') {
                console.log("sequence is corrupted2")
                break
            }
            case '[': if (arrBrackets[i+1] == '}' || arrBrackets[i+1] == ')') {
                console.log("sequence is corrupted3")
                break
            }
        }
        console.log(curly, round, square)
        switch (arrBrackets[i]){
            case "{": curly++
            case "(": round++
            case "[": square++
            case "}": curly--
            case ")": round--
            case "]": square--
        }    
    }
}
if (i == (arrBrackets.length-1) && curly+round+square == 0) console.log("array is perfectly paired!")

// Креативное задание*(не показываем решение до понедельника):
// Внедрите в свой код про кофе цикл, там, где это может понадобиться. Добавьте комментарии в код с пояснениями изменений,
// зачем они нужны.
// Продумайте на будущее план развития своего кода с кофе, где в реальной жизни он мог бы быть использован.
// Начните создавать мини-документацию к своему проекту. Пропишите требования так, как вы хотели бы их видеть на своем проекте и чтобы посторонний человек мог в них разобраться. Скорее всего, что-то придется добавить или изменить позже.
// Очень полезно, если вы сможете работать парами и проверять друг у друга.
//  (это вам поможет впоследствии писать тест кейсы, тестировать документацию и требования)
// ( P.s. “Продумайте код для создания сэндвичей с 3-мя начинками и выставите цену в зависимости от вида начинки.
//     Используйте while and do.. while loops” - это задание с предыдущего потока, его разбор есть в видео, можете не делать,
//     по желанию)

// 1// let vegetables1 = ['Капуста', 'Репа', 'Редиска', 'Морковка’ , 'лук', 'картошка'];
//вывести строки содержащие буквы и 'а’ и 'о’ слова не должны повторятся
// 2/// let arr1 = ['mama’, 1000, 'Sunday’, 3, 'my’,true,'limit’, null,15, 'elite’, undefined, 100, 'destruction’, 313,'abc’, 425, 'apples’];
//вывести строки с четным индексом и четной длиной
//* только первое слово
// 3/// let arr1 = ['mama’, 1000, 'Sunday’, 3, 'my’,true,'limit’, null,15, 'elite’, undefined, 100, 'destruction’, 313,'abc’, 425, 'apples’];
//вывести строки с четным индексом и четной длиной в обратном порядке
//* только первое слово
//4// // let numbers = [ 3, 5, 25, 70,  171,200,326, 345, 999, 1000, 1005]
// найти сумму всех чисел
//5//let arr1 = ['mama’, 1000, 'Sunday’, 3, 'my’,true,'limit’, null,15, 'elite’, undefined, 100, 'destruction’, 313,'abc’, 425, 'apples’];
// найти сумму всех чиселб выведите в формате 'The sum of all numbers is: 25’
//6// let arr1 = ['mama’, 1000, 'Sunday’, 3, 'my’,true,'limit’, null,15, 'elite’, undefined, 100, 'destruction’, 313,'abc’, 425, 'apples’];
// получите массив [1000, 3, true, null, 15, undefined, 100, 313, 425];
