
/* Realizar una función que reciba como parámetro un 
string y retorne el string sin caracteres especiales, 
Ej ;

Entrada : “Hola !, como estan# ust%edes muchacho()s””
Salida : “Hola como estan ustedes muchachos” */



const test = "hola! como# estan% muchahco()s"

const simbolos = (str) =>{
const regEx = /[^A-Za-z0-9\s]/gi

 const result = str.replace(regEx,"")

 return result
 
}

    console.log(

        simbolos(test)
        )


