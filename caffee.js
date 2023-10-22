import {Coffee} from './coffee.js'
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