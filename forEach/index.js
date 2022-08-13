// hacer una funcion que resiba un array y retorne todos los valores 
//multiplicados por 2 


const arrMultiplcate = (arr) => {
   const arrResult = []
   arr.forEach((item) => arrResult.push(item * 2))
   return arrResult
}

console.log(arrMultiplcate([1, 2, 3, 4]))

/*
 cree un array vacio y use el metodo forEach() para recorrer el array de 
 parametro de la funcion y multiplicandolo por 2 y luego usando el metodos 
 push() empujar cada elemnto de el array recorrido en el array vacio 
 
 Nota: imitando la funcion de un metodo Map()
 */










