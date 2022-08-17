//hacer una funcion que reciba un sting y retorne un objeto donde las keys 
//sean cada uno de  los caracteres y el valor sea la cantidad de veces que 
//se repita cada uno  de ellos 

const characterCounter =(str)=>{
const arr = str.split("")
const resultado = {}
arr.forEach((el) => !resultado[el]?resultado[el] = 1:resultado[el]++)
return resultado
}

console.log(characterCounter("Indivisibilidades"))

/* 
use el split("") para comvertir el string de el parametro de la funcion en un 
array con cada uno de sus caracteres declare un obj vacio luego recorri el 
array con la palabra usando el forEach() y leugo usando un ternario declare
que si en el objeto no hay un key que sea igual a elemento creala con un valor
igual a 1 y en caso de que exista incrementa 1  
*/