
/*  5.	Realizar una función que reciba como parámetro un string 
 y validar el formato email del mismo , retornando true o false 
 según cumpla o no con la validación. Recuerde que el formato de 
 email solo acepta letras minúsculas a-z, números 0-9 y puntos(.) .
 */

const validacion =(email)=>{
    const regEx = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

   return regEx.test(email)

}

console.log(
    validacion("svkenier@gmail.com")
)