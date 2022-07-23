/* Numero opuesto

Muy simple, dado un número entero o un número de punto flotante,
 encuentre su opuesto.

Ejemplos:
1: -1
14: -14
-34: 34 */

const opposite = (number) => {
  if (number > 0) {
    return number - number * 2;
  } else {
    return number * -1;
  }
};

console.log(opposite());

/* comentario: practica de fundamentos basico con matematica 
simple uso de condicionales  */