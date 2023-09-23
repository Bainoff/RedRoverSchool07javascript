// 1. Задача про Палиндром.
// Палиндром — слово, предложение или последовательность символов,
// которая абсолютно одинаково читается как в привычном направлении,
// так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
// Дана строка; нужно написать функцию, которая позволяет вернуть значение true,
// если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.

console.log(palindrom("Anna"));
console.log(palindrom("table"));
console.log(palindrom("John"));
console.log(palindrom("A roza upala na lapu Azora"));

function palindrom(pal) {
  pal = pal.toLowerCase().split(" ").join("");
  let count = 0;
  for (let i = 0; i < pal.length; i++) {
    if (pal[i] != pal[pal.length - 1 - i]) count++;
  }
  return !count > 0;
}
