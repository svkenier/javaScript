//hacer una funcion que resiba un string como argumento y retorne la cantidad de
//vocales y de consonantes que posee 

const counterLetters = (str) => {
    const arrletters = str.split("")
    let vowels = 0
    let consonants = 0
    const allVowels = "aeiouAEIOU"
    arrletters.forEach(item => {
        if (allVowels.indexOf(item) !== -1) {
            return vowels++
        } else {
            return consonants++
        }

    });
    return `el texto tiene ${consonants} consonantes y ${vowels} vocales `
}

console.log(counterLetters("muercielago"))

/* 
converti el string de el parametro de la funcion en un array de letras luego 
cree una constante con un string con todas las vocales y 2 variables que use 
de contadores una de vocales y otra de consonantes , recorri el array de letras
con un forEach() y con indexOf() dije que buscara el item en el estring con 
todos las vocales y como indexOf() devuelve -1 cada vez que no encuentra el 
elemento con un un condicional dije que aumentara el contador de vocales cada
vez el retorno de indexOf() fuera distinto de -1  y incrementara el contador de
consonantes cada vez que se era igual a -1   
*/