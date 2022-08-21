//hacer una funcin que reciba un array de booleano como argumento con una 
//cantidad de elementos impar y retornar el valor con mayor cantidad de 
//elementos repetidos en el array  

const counterOfBulean = (arr) => {
    let result
    let verdadero = 0
    let falso = 0
    if (arr.length % 2 !== 0) {

        arr.forEach(item => {
            item === true ? verdadero++ : falso++

            result = verdadero > falso ? true : false
        });
        return result
    }
    else {
        return "la matriz debe tener una cantidad de elementos impar"
    }
}

console.log(counterOfBulean([true, false, true]))

/* 
declare dos variables de contador una true y otra de los false use un condicional 
validar la longitud de el array fuera impar en caso de no ser asi retorn a un 
mensaje de aviso y si cumple la condicion use un forEach() junto a un ternario 
que cada vez que un elemento de array se true incremento el contador de verdadero 
y en caso contrario incremento la el contador de falso y con otro ternario valido
que si el contador de verdadero es mayor que el de falso retorno true en caso 
contrario retorna false  
*/