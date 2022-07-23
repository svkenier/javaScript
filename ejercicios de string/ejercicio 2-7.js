// dados dos strings, crear una función que los combine 
// en uno solo donde  todas las letras sean mayúsculas, 
// por ejemplo str1 = "hola" str2 = "amigo" la función debe 
// devolver un solo string que diga "HOLA AMIGO"


const str1 = "hola"
const str2 = "amigo"

const comb = (a,b) =>{
   console.log(
       (`${a} ${b}`).toUpperCase()
   )
}

comb(str1,str2)
