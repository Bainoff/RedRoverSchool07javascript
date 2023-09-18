num = 2

console.log(typeof num)

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('какое у вас время (в часах)?', time => {
  
        if (time >= 6  && time < 12 ) {
           console.log( 'Доброе утро' );
        } else if (time >=  12 && time < 18 ) {
           console.log( 'Добрый день' );
        } else {
           console.log( 'Добрый вечер' );
        }   

  readline.close();
});11