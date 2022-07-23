/* Realizar una función que reciba como parámetro un array de strings y
 retorne un array de los string que contengan letras mayúsculas. Ej ;

Entrada: [“Hola”, “perro”, “Piloto”, “mesoNero”, “ventana”, “gatO”]
Salida: [“Hola”, “Piloto”, “mesoNero”, “gatO”]
 */

const entrada = ["Hola", "perro", "Piloto", "mesoNero", "ventana", "gatO"]

const filtmayus = (arr) =>{
    const regEx = /[A-Z]/g 

    return arr.filter((x)=> regEx.test(x))

}

console.log(
    filtmayus(entrada)
    )