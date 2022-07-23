/* Realizar función que reciba como parámetro un string y devuelva 
true o false validando el string como un pangrama (un pangrama es 
una oración que contienen todas las letras del abecedario), Ej :

	Entrada: “Hola como estan ”
	Salida : false

	Entrada : “Benjamín pidió una bebida de kiwi y fresa. 
  Noé, sin vergüenza, la más exquisita champaña del menú.”
  Salida: true
 */



const frase = "abcdefghijklmnñopqrstuvwxyz" 
const frase2 = "hola como estan"
const frase3="Benjamín pidió una bebida de kiwi y fresa. Noé, sin vergüenza, la más exquisita champaña del menú." 


const abc = (str)=>{
  const regEx = /([a-z])(?!.*\1)/gi
   return str.match(regEx).length === 26

}

console.log(abc(frase2))