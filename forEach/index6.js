// Cuente el número de duplicados Escriba una función que devuelva el recuento 
// de caracteres alfabéticos y dígitos numéricos distintos que no distinguen 
// entre mayúsculas y minúsculas que aparecen más de una vez en la cadena de 
// entrada. Se puede suponer que la cadena de entrada contiene solo letras 
// (tanto mayúsculas como minúsculas) y dígitos numéricos. 
// Ejemplo:

// "abcde" -> 0 # ningún carácter se repite más de una vez 
// "aabbcde" -> 2 # 'a' y 'b' 
// "aabBcde" -> 2 # 'a' ocurre dos veces y 'b' dos veces (`b` y `B`) 
// "indivisibilidad" -> 1 # 'i' aparece seis veces 
// "Indivisibilidades" -> 2 # 'i' ocurre siete veces y 's' ocurre dos veces 
// "aA11" -> 2 # 'a' y '1' "ABBA" -> 2 # 'A' y 'B' cada uno ocurre dos veces

const characterCounter = (str) => {
    const arr = str.split("")
    const obj = {}
    arr.forEach((el) => !obj[el] ? obj[el] = 1 : obj[el]++)
    return Object.values(obj).filter((item) => item > 1).length
}

console.log(characterCounter("Indivisibilidades"))

/*
converti el string de el parametro de la funcion de array de caracteres 
usando el split("") declare un ojeto vacio y iterar el array de caracteres 
con un forEach() y con un ternario poner la condicion de que si el objeto
no contiene una key igual al elemento de el forEach() crealo con valor 1
y en caso de que existe incrementa uno a la propiedad luego use el 
Object.values() para generar un array con los valores de el objeto luego
filtre todos los que fueran mayores a 1 co un filter y use un length para
contar los elementos que cunplan la condicion y retorne el resultado 
*/