//  hacer una funcion que resiba un array y retorne un array con un conteo
// de los elementos

const counterElement = (arr) => {
    const arrResult = []
    arr.forEach((_, index) => arrResult.push(`element ${index + 1}`))
    return arrResult
}

console.log(counterElement([1, 2, 3, 4])) 

/* 
cree un array vacio y use el metodo forEach() para recorrer el array de 
 parametro de la funcion y empuje en el array vacio usando push() un 
 string con palabra element y concatene el index +1 de el elento en cada
 iteracion para que retone un array igual a este
  output => ["element 1","lement 2" ...] 
*/
