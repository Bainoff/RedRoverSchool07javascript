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
function sumMul(n,m){
  if ((n+m) <= 0) return "INVALID"
  let sum = 0
  for (let i = n; i < m; i=i+n) {
    sum += i
  }
  return sum
}
console.log(sumMul(2, 9))