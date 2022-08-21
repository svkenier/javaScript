//hacer una funcion que reciba un array como argumento y retorne un estring 
// que diga si la mayoria  de numeros de el array son negativos o positivos

const positiveAndNegative = (arr) => {
    let pos = 0
    let neg = 0

    arr.forEach(item => item > 0 ? pos++ : neg++);

    if (pos > neg) {
        return "hay mas elementos positivos"
    }
    else if (pos < neg) {
        return "hay mas elentos negativos"
    }
    else if (pos = neg) {
        return "hay la cantidad de elementos es la misma"
    }

}

console.log(positiveAndNegative([1, 2, 5, -3, 5, -7]))

/* 
cree dos variables que hacen de contadores una de numeros positivos y otra 
de negativos recorri el array con el forEach() y con un ternario  incremento
un contador o el otro dependiendo de que item de el forEach() sea mayor o menor 
que 0  y luego con unos condicionales muestro un mensaje que indica si hay mas 
positivos , mas negativos o son la misma cantidad
*/