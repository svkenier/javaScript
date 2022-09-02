//* metodo .at() este metodo nos muestra el elemento en el indice que le pasemos, soporta valores negativos.

/* const atMethod = (arr) => {
	return arr.at(-1);
};

console.log(atMethod(['a', 'b', 'c', 'd'])); */

//* el metodo "concat" une uno o varios arrays que deseemos fucionar

/* let arr1 = ['peras', 'arroz', 'mango', 'mandarina'],
	arr2 = ['pato', 'perro', 'gato', 'tortuga'],
	arr3 = arr1.concat(arr2);

console.log(arr3); */

//* copyWithin()

/* let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.copyWithin(0, 2, 2)); */

//* metodo .entries() el metodo devuelve pares con clave(indice del array) valor (elemento del array) en un array bidimencional

/* let arr = [1, 2, 3, 4];
let obj = Object.fromEntries(arr.entries());
console.log(obj); */

//* metodo .every(callback) este metodo recibe un callback para verificar si cumplen la condicion que se le pase los elementos en el array. devuelve true de cumplirlo en caso contrario reortna false.

/* let arr = [1, 2, 3, 4, 5, 6];

console.log(arr.every((item) => item < 3));
// retorna un false porque hay elementos mayores a 3 */

//* metodo .fill(value, start, end) recibe una 3 parametros donde el primero es el valor con el cual se reemplazaran los elementos del arry y start es desde el indice donde se quiere empezar y end donde se quiera terminar.

/* let arr = [1, 2, 3, 4, 5, 6];

console.log(arr.fill('a', 3)); */

//* metodo .filter(callback) el metodo recibe una funcion de callback y toma como argumentos (item, index, array) devuelve como resultado un array con los elementos que cumplan la condicion true, si ningun elemento cumple dicha condicion devuelve un array vacio.
/* let arr = [-1, -2, -3, 4, 5, 6];
console.log(arr.filter((item) => item > 10)); 
console.log(arr.filter((item) => item % 2 === 0)); */

//* metodo .find(callback) devuelve El valor del primer elemento del array que cumple la con la condicion que se le pasa en el call back; de lo contrario, devuelve undefined.

/* let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.find((item) => item < 10)); */

//* metodo .findIndex(callback) devuelve el indice donde se encuentra el valor que haya pasado la condicion del callback.

/* let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.findIndex((item) => item === 'a')); */

//* metodo .findLast(callback) devuelve el indice donde se encuentra el valor que haya pasado la condicion del callback (pero empieza de derecha a izquierda la busqueda.) ******

/* let arr = ['a', 'b', 'c', 'd', 'a'];

console.log(arr.findLast((item) => item === 'a')); */

//* método .findLastIndex(callback) devuelve el índice del último elemento de un array que satisface la validación proporcionada ****

/* let arr = ['a', 'b', 'c', 'd', 'a'];
console.log(arr.findLastIndex((item) => item === 'a')); */

//* método .flat([depth]) devuelve un array plano que contenga sub-arrays dentro del mismo. depth: El nivel de profundidad que especifica qué tan profunda debe aplanarse una estructura de matriz anidada. El valor predeterminado es 1.

/* let arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat(2));
 */

//* método .flatMap(callback) devuelve un array plano que contenga sub-array dentro del mismo, solo maneja 1 nivel de profundidad.

/* let arr = [[1], [2], [3], [4], [5], [6]];
console.log(arr.flatMap((item) => item * 2)); */

//* método .forEach(callback) ejecuta la función callback una vez por cada elemento presente en el array en orden ascendente, el forEach no retorna nada, hay que guardar lo que se quiera retornar en una variable y se retorna la misma.

/* let arr = ['a', 'b', 'c', 'd', 'a'];
let counter = 0;
arr.forEach((item) => {
	if (item === 'a') {
		counter++;
	}
});

console.log(counter);
 */

//* método Array.from(objeto iterable) devuelve en un array todo lo que sea iterable.

/* let str = 'hola mis amigos como estan ustedes';
console.log(Array.from(str)); */

//* El método includes()determina si un array incluye un elemento determinado, devuelve trueo falsesegún corresponda.

/* let arr = ['a', 'b', 'c', 'd', 'a'];
console.log(arr.includes('a')); */

//* El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.

/* let arr = ['a', 'b', 'c', 'd', 'a'];
console.log(arr.indexOf('a')); */

//* el método isArray(element) devuelve true o false si el elemente del array es o no un array.-

/* let arr = ['a', 'b', 'c', 'd', 'a'];
console.log(Array.isArray(arr)); */

//* El método join([separador]) une todos los elementos de una matriz en una cadena y devuelve esta cadena.

/* let arr = ['a', 'b', 'c', 'd', 'a'];
console.log(arr.join(',')); */

//* El método lastIndexOf(element) devuelve el último índice en el que un cierto elemento puede encontrarse en el arreglo, ó -1 si el elemento no se encontrara. El arreglo es recorrido en sentido contrario

/* let arr = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(arr.lastIndexOf('Dodo')); */

//* metodo array.keys() ***

/* const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();
console.log(iterator); */

//* el método map(callback), mapea un array y modifica cada uno de sus elementos y retorna un array nuevo sin modificar el array original.

/* let arr = ['a', 'b', 'c', 'd', 'a'];
console.log(arr.map((item) => item + 'Hello')); */

//* El método Array.of(element) crea una nueva instancia Array con un número variable de elementos pasados como argumento, independientemente del número o del tipo. (es como el constructor de Array()) la diferencia es que si le pasas un numero entero te lo coloca dentro del array, el constructor devolvera "x" números de espacios vacios dentro del array.

/* console.log(Array.of('holaMcbo', 8, 3450));
console.log('ejemplo del método constructor', Array(7)); */

//* El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.

/* let arr = ['a', 'b', 'c', 'd', 'a'];
let newArr = arr.pop();
console.log(arr); */

//* El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
/* let arr = ['a', 'b', 'c', 'd', 'a'];
console.log(arr.push('z')); */

//* método reduce(callback)
/* let arr = [
	[0, 1],
	[2, 3],
	[4, 5],
];

console.log(
	arr.reduce((prev, act) => {
		return prev.concat(act);
	})
); */

//* método reduceRigth

/* let integrado = [
	[0, 1],
	[2, 3],
	[4, 5],
];
console.log(
	integrado.reduceRight((prev, act) => {
		return prev.concat(act);
	})
); */

//* El método values() devuelve un nuevo objeto Array Iterator que contiene los valores para cada índice del array. ****
/* 
let arr = ['w', 'y', 'k', 'o', 'p'];
console.log(arr.values()); */

//* El método reverse() invierte el orden de los elementos de un array, El primer elemento pasa a ser el último y el último pasa a ser el primero.

/* let arr = ['w', 'y', 'k', 'o', 'p'];
console.log(arr.reverse()); */

//* El método shift() elimina el primer elemento del array y lo retorna. El método modifica el array original

/* let arr = ['w', 'y', 'k', 'o', 'p'];
console.log(arr, '<-------array original, método ---->', arr.shift()); */

//*El método slice(inicio, [fin]) devuelve una copia de una parte del array dentro de un nuevo array. El array original no se modificará. se le pasara el indice donde se quiere empezar la extrancción y opcional también se le puede pasar el fin donde se quiere terminar.
/* 
let arr = ['w', 'y', 'k', 'o', 'p'];
console.log(arr.slice(1, 4)); */

//* El método some(callback) comprueba si al menos un elemento del array cumple con la condición implementada por el callback proporcionada. Devuelve true o false si cumple o no algun elemento con la condición que se le pasa.

/* let arr = [1, 2, 3, 4, 5];

console.log(arr.some((element) => element % 2 === 0)); */

//* El método sort([callback]) ordena los elementos de un arreglo (array) devuelve el arreglo ordenado.El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode. (para ordenar número habrá que pasarle el callback y colocando el orden que se desea ordenar, porque sino tomará el primer valor de cada numero y lo ordenara según el valor unicode de string)

/* let arr = [101, 24, 38, 44, 588];
console.log(arr.sort()); */

//* El método splice(start, deleteCount, [elementos que se insertaran en el arreglo.]) cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. start es donde queremos iniciar, el deletecount es cuantos elementos removeremos a partir de la posicion (start) y [elemtos] son los elementos que desemos añadir. El método hace lo que uno desee o elimina o inserta.

/* let arr = ['josue', 'quevedo', 'theBest', 'Developer'];

// console.log(
// 	'remover elementos del indice 1, remover 1 elemeto, ',
// 	'valor devuelto por el splice --->',
// 	arr.splice(1, 1),
// 	', así queda el array ---->',
// 	arr
// );

// console.log(
// 	'remover elementos del indice 1, remover 2 elemeto, ',
// 	'valor devuelto por el splice --->',
// 	arr.splice(1, 2),
// 	', así queda el array ---->',
// 	arr
// );

// console.log(
// 	'desde el indice 2, remover 0 elemetos, insertar la palabra `isNot` ',
// 	'valor devuelto por el splice --->',
// 	arr.splice(2, 0, 'isNot'),
// 	', así queda el array ---->',
// 	arr
// );
 */

//* El método toString() devuelve una cadena de caracteres representando el array especificado y sus elementos.

/* let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.toString());
 */

//* El método unshift(element) agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
/* let arr = [1, 2, 3, 4, 5, 6];

console.log(
	'valor devuelto por el método ----> ',
	arr.unshift('those are numbers'),
	', como queda el array --->',
	arr
);
 */
