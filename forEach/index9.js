//hacer una funcion que tome dos array como argumento y retorne un array con 
// suma de los dos array por su indice es deci sumar elemento 0 + 0 ,1 +1 etc. 

const sumArrayByIndex = (arr1, arr2) => {
    const result = []
    arr1.forEach((item, index) => result.push(item + arr2[index]));
    return result
}
console.log(sumArrayByIndex([1, 2, 3], [1, 2, 3]))

/* 
declare una constante  con un array vacio  con forEach() recorri uno de los dos 
array que se pasan como parametro de la funcion y sume el item de el primer array
mas el elemento el index de segundo array y con el push() ejepuje el resultado 
de cada iteracion en la contante con el array vacio y lo retone
*/