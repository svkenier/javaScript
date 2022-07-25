/* Escribe la función camelize(str) que convierta palabras separadas 
por guión como “mi-cadena-corta” en palabras con mayúscula “miCadenaCorta”.
Esto sería: remover todos los guiones y que cada palabra después de un guión 
comience con mayúscula. */

const camelizeConverter = (str) => {
    const arr = str.split("-")
    const arrmod = arr.map((item, index) => index == 0 ? item : item[0]
    .toUpperCase() + item.slice(1))
    const result = arrmod.join("")

    return result
}

console.log(camelizeConverter("mi-cadena-corta"))

/* 
comentario: use el split para convertir en array el string separando cada 
elemento por guiones luego mapie el array y por medio de un ternario valide
que si index es igual acero devuelve el mismo item de lo contrario le aplicamos 
un toUpperCase() al elemento 0 de item y concatenamos de elemento 1 en asta el 
final de el item y luego con join() lo volvemos un string  sin espacios 
*/