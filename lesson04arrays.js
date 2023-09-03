const arr = [1, 2, 3, 4, 5]

console.log(arr)
console.log(arr.length)
console.log(arr[0])
console.log(arr[arr.length-1])
console.log(arr.at(-1))

const arrayFruit = ["apple", "kiwi"]
const arrayVegetables = ["potato", "onion"]
const bag = [...arrayFruit, arrayVegetables] //...-spread

console.log(bag)

const arrNums = [1, 2, 3, 4, 5, 6]
const lastEl = arrNums.pop() //removes LAST element form array and writes it into variable
console.log(lastEl)

const firstEl = arrNums.shift()  //removes LAST element form array and writes it into variable
console.log(firstEl)

arrNums.push(7, 8, 9, 10) //adds elements at the end of array
console.log(arrNums)

arrNums.unshift(-3, -2, -1, 0) //adds elements at the end of array
console.log(arrNums)

for(let i of arrNums)
console.log(i)