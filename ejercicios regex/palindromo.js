
/* Realizar una función que reciba como parámetro un array de strings y 
retorne como valor un array con todos los strings que son palíndromos 
(un palíndromo es una palabra que se lee igual al derecho y al revés, 
 Ej; oso, arepera, ala.)

Entrada : [“hola”, “oso”, “perro”, “ala”, “2002”, “anitalavalatina”,”mundo”]
Salida: [“oso”,”ala”,”2002”,”anitalavalatina”] */

let palindrome = ["anA", "Oso", "antena", "hola", "anitalavalatina"]

const isPalindrome = (arr) =>  arr.filter(item => new RegExp(item.toLowerCase().split("").reverse().join("")).test(item.toLowerCase()))

console.log(isPalindrome(palindrome))


 
//oliverprada86@gmail.com

