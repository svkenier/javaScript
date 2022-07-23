
//hacer una funcion que reciba como parametro 2 numeros
//comprueba si el primer número es divisible por el segundo,
//es decir que la división no de un número decimal, si la division es correcta debe retornar
//el siguente mensaje "La division entre A y B es N y es un numero Entero. Operación exitosa" 
//de lo contrario debe retornar "La division entre A y B es N y es un numero decimal, operación fallida"

const dvn = (A,B) => {
    const N = A/B

    if (Number.isInteger(A / B)) {
        
        return `La division entre ${A} y ${B} es ${N} y es un numero Entero. Operación exitosa`
    }

    else{
       return `La division entre ${A} y ${B} es ${N} y es un numero decimal, operación fallida`
    }
}
console.log(
    dvn(4,2)
)