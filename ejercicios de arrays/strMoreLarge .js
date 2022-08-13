//escribe una funcion que tome un array de string como argumento
//y retorne el estring mas largo

 //metodo 1 

const strMoreLarge = (arr) => {
    return arr.reduce((previo, actual) => 
    previo.length > actual.length ? previo : actual, "")
}
console.log(strMoreLarge(["hola", "mundo"])) 



//metodo 2

const wordMoreLarge = (arr) => {
    return arr.map((item) => ({ longitud: item.length, palabra: item }))
    .sort((a, b) => a.longitud - b.longitud).pop().palabra
}

console.log(wordMoreLarge(["hola", "mundo"]))




