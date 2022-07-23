/*¡Convierta una cadena en un número! 

Descripción
Necesitamos una función que pueda transformar una cadena en un número. 
¿Qué formas de lograr esto conoces?

Nota: no se preocupe, todas las entradas serán cadenas 
y cada cadena es una representación perfectamente válida 
de un número entero.

Ejemplos
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7 */

const stringToNumber = function (str) {
  return Number(str);
};

console.log(stringToNumber("32"));

/* comentario: ejercicio simple con el uso de el metodo 
  Number():se usa para convertir valores de otro tipo en 
  numericos */
