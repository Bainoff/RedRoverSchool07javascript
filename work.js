function secondSymbol(s, symbol) {
   let count = 0
   for (let i = 0; i < s.length; i++) {
     if (s.charAt(i) == symbol) count++
     if (count == 2) return i
   }
   if (count < 2) return -1
 }
 console.log(secondSymbol('Hello world!!!','A'))