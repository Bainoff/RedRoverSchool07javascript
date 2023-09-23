function nthFibo(n) {
   let i = 1
   let predback = 0
   let back = 1
   let fib = 0
   for (i = 1; i < n; i++){
      predback = back
      back = fib
      fib = predback + back
   }
   return fib
 }