//hacer una fincion que muestr el elemento de un array su posicion

const positionOfElements = (arr) => {
    arr.forEach((item, index) => (
        console.log(`${item} se encuentra en la posicion ${index}`))
    );

    return "resultados"
}

console.log(positionOfElements(["a", "b", "c", "d"])) 

/* 
use el forEach() para recorrer el array y con un console.log() mostre un estring
que indica el item y su posicion en el array y dado que el forEach() no retona 
nada y solo se usa para recorrer el array retorne la palabra resultados para que 
la funcion no diera undefine 
*/