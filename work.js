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
function firstToLast(str,c){
   if (!str.includes('c')) return -1
   if (str.indexOf('c') == str.lastIndexOf('c')) return 0
   else return str.lastIndexOf('c') - str.indexOf('c')
   
 }
console.log(firstToLast("ababc","a"))
firstToLast("ababc","c")
firstToLast("ababc","d")