//https://www.w3schools.com/js/js_object_definition.asp

// ========== COMPARE ARRAYS =================
// ======== incorrect  ==; ===
// let arr = [1, 2];
// let arr1 = [1, 2]

// console.log(arr.length == arr1.length);
//  console.log(arr > arr1);
//  console.log(arr < arr1);

const a = [1, 2, 3];
const b = [1, 2, 3];

const a1 = [1, 2, 7];
const b1 = [1, 2, 7];
// a[5] = "K"
// console.log(b1)
//==== correct === var 1
// let newstr1 = JSON.stringify(a1);
// console.log(JSON.stringify(a1), typeof newstr1, newstr1.length);
// console.log(JSON.stringify(a1) === JSON.stringify(b1)) // compare string

//=== var 2
// let newstr2 = a.toString();
// console.log(a.toString(), typeof newstr2, newstr2.length );
// console.log(b.toString() === a.toString());

// === var 3
// let newstr3 = String(a);
// console.log(String(a), typeof newstr3, newstr3.length);
// console.log(String(a) == String(b));





// ============= Objects =================================
/**
 * In JavaScript, objects are king. If you understand objects, you understand JavaScript.

In JavaScript, almost "everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects
All JavaScript values, except primitives, are objects.

Objects are variablrs!
It is a common practice to declare objects with the const keyword.
 */


//  ======= examples:

//{key : values,} -property

const person = {
  name: "Ivan",
  surname: "Petrov",
  age: 33,
  job: "QA engineer",
  isAdmin: false
}
//  let person4 = [["name", 'Olya']["age", 22]]
//  person4[0][1]
//  person.age
// const person2 = {
//     id: '02',
//     personalInfo: {
//        fullName: {
//           firstName: 'Jane',
//           lastName: 'Dow',
//        },
//       dob: '01/01/1990',
//       "contactInfo": {
//         phone: '+123456789',
//         email: null,
//         address: {
//           city: "Boston",
//           state: "M"
//         }
//       },
//     },
//    purchases: null,
//    car: "Suzuki"
//   }
// console.log(person2['personalInfo']['fullName'].lastName);
// //show dot notation
// console.log(person2.personalInfo.fullName.lastName)

// console.log(typeof person2);

// const arr = [1];
// console.log(typeof arr);


// ===================  Обьявление обьекта  ===========================

 //let obj = new Object();
//  let user = {};

// let obj = {
//   name: 'Bob',
//   "age": 21,
//   "isAdult": true,
//   "salary": undefined,
//   4: null,
//   address: [],
//   myObj: {},
// };
// console.log(obj);

// Последнее свойство объекта (property) может заканчиваться запятой ",".

// =========================================

// ключ может состоять из нескольких слов, но тогда он
// _обязательно_ должен быть заключен в кавычки:
// let number
// number = 9

// let user = new Object()
// let user1 = {
//   name: "John",
//   age: 30,
//  'high school': true,
//   name: 'Anna'
// }

//  console.log("original user1 ", user1 );

// // value of age и name изменено:
// //  user1.age = 20;
// //  user1.name = 'Bill';
// //  console.log("modified " + user1);
// // // console.log(user1[0])


// //  добавлено свойство address:
// user1.address = {
//   city: 'SF',
//   state: 'CA',
//   country: 'USA',
// }
// user1.city = "Hi"
 //console.log("added new key - address and hello ", user1);
 //console.log(user1.address.city);

// ============= оператор delete ===============================

//  delete user1.address.country;     //удаление свойства country
//  console.log("country deleted  ", user1 );


// ====================  обращение к свойствам  =============================

// Для обращения к свойствам используется запись «через точку»: person.name, person.age.
//  или через [ ] :       person['name'], person["age"]

// const person3 = {
//   age: 30,
//   "likes cats": true,
//    name: 'Joey',
// };

//выведение значения

//  console.log(person3.name);
//  console.log(person3.age);

//let arr = [4, "g", 66]
//  console.log(person3["name"]); //arr[0]
//  console.log(person3['age']);
//  console.log(person3["likes cats"]);


// ==================  Добавление свойства(property)  ================================


// // === создаем объект
// const obj = {};
// console.log(obj)

// // === присваиваем значения
// obj.name = 'Jess'; 
// obj['age'] = 55;
// console.log(obj);

// obj['likes read'] = true; //через скобки []
// console.log(obj);

//  obj['age'] = 28;
//  console.log(obj);

// let carModel = 'car' ; //через переменную
// let model = 3
// obj[carModel] = model;
// console.log(obj)
// obj['carModel'] = 'Toyota';
// console.log(obj)
// console.log(typeof obj.car);


// =================  Изменение свойства(property)  ===================================

// obj.name = "Bill";           //через точку
// obj['likes read'] = false;     //через скобки []
// obj[carModel] = 5;           //через переменную

//  console.log(obj);

// =========== Создание объекта с использованием переменной  =====

// const item = "ball";
// let age = 17
// const user = {
//    [item]: item,
//    age: age 
// };
// console.log(item);
// user[item] = 'doll'
// console.log(user)
// ============= Обращение к свойствам объекта ====================
// 
// let arr = [1,3,5,7]
// const customers = [
//   {               //   !!! Array[0]
//     id: '01',                //
//     personalInfo: {  name: { first: 'John', last: 'Dow'}, },},

//   {                //    !!! Array[1]
//     id: '02',                //
//     personalInfo: {          //
//       name: {                //
//         first: 'Jane',       //
//         last: 'Dow',         //
//       },
//       dob: '01/01/1990',         //
//       "contactInfo": {           //
//         phone: '+123456789',     //
//         email: [3,7,[4,8]],             //
//         address: null,           //
//       },
//     },
//      purchases: [{two: 2},6, 3],           //
//   }];

// 1. Свойства 1-го уровня -array elements
  // console.log(customers.length);
  // console.log(customers[0]);
  // console.log(customers[1]);
  // console.log(customers[2]);

// // 2. Свойства 2-го уровня -from array to object
  // console.log(customers[0].id);
  // console.log(customers[0]['id'])

// // 3. Свойства 3-го уровня
//  console.log(customers[1].personalInfo.dob);
//  console.log(customers[1].personalInfo['dob']);
//  console.log(customers[1]['personalInfo']['dob']);

// 4. Свойства 4-го уровня
//  console.log(customers[1].personalInfo.name.first);
//  console.log(customers[1].personalInfo.contactInfo.email[1]);
//  console.log(customers[1]['personalInfo']['contactInfo']['email'][1]);

// ====================  Проверка существования свойства  ======================================

// ===== проверка с undefined
// В отличие от многих других языков, особенность JavaScript-объектов в том,
// что можно получить доступ к любому свойству. Даже если свойства не существует –
// ошибки не будет!

// При обращении к свойству, которого нет, возвращается undefined.
// Это позволяет просто проверить существование свойства:

// let user = {
//    newKey: 'MY Key',
// };
// console.log(user)
// console.log(user.age);
// console.log(user.newKey);
// console.log(user.name === undefined); // true означает "свойства нет"
// user.name = "Anna"
// console.log(user.name)
// // user.name = " Pavel"
// console.log(user)
// console.log(user.newKey !== undefined)

// ===== через оператор in check the key
// let obj = {
//    firstName: 'Sofia',
//    lastName: 'I.',
//    age: 35,
//    language: 'Java',
//    newKey: undefined,
//    9: false,
//    job: {
//       name1: "Olga",
//       newObj: { age1: 23 }
//    },
// };
// console.log(obj);

//   console.log("firstName" in obj);
//   console.log("first" in obj);
//   console.log(undefined in obj);
//   console.log( 'age1' in obj.job.newObj);  // can't check by value
//   console.log(obj.newKey === undefined);

// ================== Example
// let userInfo = {
//    name: "Anna",
//    age:  30,
//    address : {
//       city: "Boston",
//       street: "Rose Dr."
//    }
// }

// // //Operator in
// if ("name" in userInfo){            // check if key  -name- in object
//    console.log(userInfo.name)
// }

// // //console.log(userInfo.address.street)
// // //опциональная цепочка
//  console.log(userInfo?.address?.street)//hw


// ============================================================ 

// обращение, добавление на примере

// let obj = {
//   firstName: 'Sofia', 
//   lastName: 'I.', 
//   country: 'Argentina', 
//   continent: 'Americas', 
//   age: 35, 
//   language: 'Java'
// };
// let name1 = obj.firstName;
// let language = obj.language;

// console.log(name1," , " , language);

//  let a2 = `Hi ${name1}, Do you like ${obj.language}?`;

//  console.log(a2);

// let newKey = 'hello';
// obj[newKey] = a;      // obj.hello = a;

// console.log(obj);


// =======================  цикл for ... in  =================================== 

// const arr = ['a', 'b', 'c'];
// for (let i = 0; ; i++) {}
// for (let el of arr) {}

// Для итерации по объекту используется цикл for ... in

// for (let key in object) {
//   тело цикла выполняется для каждого свойства объекта
// }

// let obj = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };

// for(let key in obj){
//   // ключи
//   //console.log(key);  // name, age, isAdmin

// // //   // значения ключей
//  // console.log(obj[key]); // John, 30, true   /arr[i]

//   console.log(key + ": " + obj[key]);
//  }


//count salaries
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

//  let sum = 0;
// for(let key in salaries) { 
//    sum += salaries[key];
// }

//  console.log(sum); // 390


// let obj = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyByTwoAllNumeric(obj) {
//   let res = 0;
//   for(let key in obj) {
//      //res += obj[key] * 2;
//     if(typeof obj[key] == 'number'){
//       res += obj[key] * 2;
//    }
//   }
//   return res;
// }
// console.log(multiplyByTwoAllNumeric(obj));



// ============================================================ 

// Объекты – это ассоциативные массивы с рядом дополнительных возможностей.
// Они хранят свойства (пары ключ-значение), где:

// => Ключи свойств должны быть строками (string) или символами (symbol) (обычно строками).
// => Значения могут быть любого типа.
// => Чтобы получить доступ к свойству, мы можем использовать:

// => Запись через точку: obj.key.
// => Квадратные скобки obj["key"]. Квадратные скобки позволяют взять ключ из переменной, например, obj[varWithKey].
// Удаление свойства: delete obj.key.
// Проверка существования свойства: "key" in obj.
// Перебор свойств объекта: цикл for(let key in obj){}.

// ======================  Методы объектов  ====================================== 

// Object.keys, values, entries
// Для простых объектов доступны следующие методы:

// Object.keys(obj) – возвращает массив ключей.
// Object.values(obj) – возвращает массив значений.
// Object.entries(obj) – возвращает массив пар [ключ, значение].


// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
//   language: "JavaScript",
// };

// console.log("Keys: ", Object.keys(user));    //выводит ключи (keys)
 //console.log("Values: ", Object.values(user));  //выводит значения (values)
// console.log(Object.entries(user)); //выводит массив массивов

// ======== перебор в цикле
//console.log('===========');
// let user3 = {
//   name: {name: "Kate", age2 : 22},
//   age: 30,
//   language: 'en',
//   home: 'apartment',
//   number: 6
// }
//  console.log("Values: ", Object.values(user3.name));
// // // перебор значений -checking values
// for (let i of Object.values(user3.name)) {
//   console.log(i); 
// }
