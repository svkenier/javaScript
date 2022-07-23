// Escriba una función que sea capaz de invertir un string 
// y convertirlo todo a minúscula, por ejemplo, si se le pasa 
// la cadena 'JoSue' la función debe devolver el string 'eusoj'

const inver = (str) => {
    console.log( 
        str.split("").reverse().join("").toLowerCase()

    )
}

    inver("AbCdE")

