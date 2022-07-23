/*¿Habrá suficiente espacio?

La historia:
Bob trabaja como conductor de autobús. Sin embargo, se ha vuelto extremadamente 
popular entre los residentes de la ciudad. Con tantos pasajeros queriendo subir 
a bordo de su autobús, a veces tiene que enfrentarse al problema de que no queda 
suficiente espacio en el autobús. Quiere que escribas un programa simple que le
 diga si podrá acomodar a todos los pasajeros.

Descripción general de la tarea:
Tienes que escribir una función que acepte tres parámetros:

capes la cantidad de personas que puede llevar el bus excluyendo al conductor.
 ones el número de personas en el autobús excluyendo al conductor.

wait es el número de personas que esperan para subir al autobús sin incluir al 
conductor.

Si hay suficiente espacio, devuelve 0, y si no lo hay, 
devuelve el número de pasajeros que no puede llevar.

Ejemplos de uso:
cap = 10, on = 5, wait = 5 --> 0 
cap = 100, on = 60, wait = 50 --> 10 */

function enough(cap, on, wait) {
  const space = cap - on;

  if (space < wait) {
    const result = wait - space;
    return result;
  } else if (space >= wait) {
    return 0;
  }
}

console.log(enough(25, 20, 50));


/* comentario: practica de conocimiento de condicionales y logica matematica */
