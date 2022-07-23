/* Combinar dos matrices ordenadas en una


Se le dan dos matrices ordenadas que solo contienen números enteros.
 Su tarea es encontrar una manera de fusionarlos en uno solo, ordenados 
 en orden asc. Complete la función mergeArrays(arr1, arr2), donde arr1
  y arr2 son las matrices ordenadas originales.

  No necesita preocuparse por la validación, ya que arr1 y arr2 deben 
  ser matrices con 0 o más enteros. Si tanto arr1 como arr2 están vacíos, 
  simplemente devuelva una matriz vacía.

Nota: arr1 y arr2 pueden clasificarse en diferentes órdenes. También arr1 y arr2
 pueden tener los mismos números enteros. Eliminar duplicado en el resultado
  devuelto.

  Ejemplos (entrada -> salida)

* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] 
-> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12] */

const a1 = [1, 3, 5, 7, 9, 11, 12];
const a2 = [1, 2, 3, 4, 5, 10, 12];
const a3 = [1, 3, 5, 7, 9];
const a4 = [10, 8, 6, 4, 2];
const a5 = [];
const a6 = [];

function mergeArrays(arr1, arr2) {
  const Arr = [...arr1, ...arr2].sort((a, b) => a - b);
  const result = [...new Set(Arr)];
  return result;
}

console.log(mergeArrays(a5, a6));


/* comentario: aprendi el uso del objeto set():se usa para almacenar valores unicos 
en este caso devolviendo un array sin valores repetidos y puse en en practica mi 
conocimiento de el metodo sort() y el spead operator   */