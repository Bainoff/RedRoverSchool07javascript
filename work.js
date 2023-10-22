// function nthFibo(n) {
//    let i = 1
//    let predback = 0
//    let back = 1
//    let fib = 0
//    for (i = 1; i < n; i++){
//       predback = back
//       back = fib
//       fib = predback + back
//    }
//    return fib
//  }



const users = [
  {
      firstName: 'John',
      lastName: 'Caper',
      phone: '7436676737634',
      registrationDate: '12.10.2021'
  },
  {
      firstName: 'Clark',
      lastName: 'Kent',
      phone: '4346676737634',
      registrationDate: '16.09.2021'
  },
  {
      firstName: 'Tony',
      lastName: 'Stark',
      phone: '7436698337634',
      registrationDate: '11.10.2021'
  },
  {
      firstName: 'Bruce',
      lastName: 'Wayne',
      phone: '1111176737634',
      registrationDate: '09.10.2021'
  },
  {
      firstName: 'Star',
      lastName: 'Lord',
      phone: '7439374737634',
      registrationDate: '10.10.2021'
  },
  {
      firstName: 'Kate',
      lastName: 'Bishop',
      phone: '7436693647634',
      registrationDate: '11.10.2021'
  },
  {
      firstName: 'Jerry',
      lastName: 'James',
      phone: '7409048737634',
      registrationDate: '10.10.2021'
  },
  {
      firstName: 'Jeremy',
      lastName: 'Clarkson',
      phone: '743667600289334',
      registrationDate: '16.10.2020'
  },
  {
      firstName: 'Robert',
      lastName: 'Patrik',
      phone: '7436676730093',
      registrationDate: '10.10.2020'
  },
  {
      firstName: 'Jonny',
      lastName: 'Sins',
      phone: '74923982737634',
      registrationDate: '01.01.2021'
  },
  {
      firstName: 'Andrew',
      lastName: 'Garfield',
      phone: '743667988344',
      registrationDate: '09.10.2019'
  },
  {
      firstName: 'Jane',
      lastName: 'Foster',
      phone: '74368783427634',
      registrationDate: '09.10.2019'
  },
  {
      firstName: 'Rick',
      lastName: 'Smith',
      phone: '700000037634',
      registrationDate: '12.10.2021'
  },
];

// Откройте в VSCode task2.json файл.
// Скопируйте из него JSONку, вставьте в свой код
// (присвоив в переменную).

// Дан массив объектов.
// Каждый объект является идентификационной карточкой человека.
// Нам нужно хранить только уникальные значения в этом массиве.
// Реализуйте функцию, которая будет выполнять эту работу.

// const fs = require("fs")
// let arrStrings = []
// const user = JSON.parse(fs.readFileSync("task2.json"))
// for(let i = 0; i < user.length; i++){
//   arrStrings[i] = JSON.stringify(user[i])
// }
// let res = arrStrings.filter(el => arrStrings.indexOf(el) 
//   === arrStrings.lastIndexOf(el))
// let res2 = []
// for (let i = 0; i < res.length; i++) {
//   res2.push(JSON.parse(res[i]))
// }
// console.log(res2)
// console.log("intitial arr " + user.length)
// console.log("resulted arr " + res.length)


//==== correct === var 1
// let newstr1 = JSON.stringify(a1);
// console.log(JSON.stringify(a1), typeof newstr1, newstr1.length);
// console.log(JSON.stringify(a1) === JSON.stringify(b1)) // compare string

// Реализуйте функцию joinNumbersFromRange(),
// которая объединяет все числа из диапазона в строку:

joinNumbersFromRange(1, 1); // 1
joinNumbersFromRange(2, 3); // 23
joinNumbersFromRange(5, 10); // 5678910

function joinNumbersFromRange(a, b){
    let str = ""
for (let i = a; i <= b; i++){
    str += i
}
return str
}

console.log(joinNumbersFromRange(3,2))