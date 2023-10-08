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

let arr = ["d", "u", "x"]
function numObj(s){
  let arr1 = []
  for (let i in s){
    arr1.push({[i]: String(s[i].charCodeAt(0))})
  }
  return arr1
}

console.log(numObj(arr))