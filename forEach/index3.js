 //hacer una funcion que reciba un array de string  retorne un ojecto
 //con el string clave y la longitud como valor 

  const lengthOfElement = (arr)=>{
  const arrLeng = []
   arr.forEach((item)=> arrLeng.push(item.length))
  return   Object.fromEntries(arr.map((item,index)=>[item,arrLeng[index]]))
   
}   

console.log(lengthOfElement(["luke","soy","tu","padre"])) 

/* 
cree un array vacio y use el metodo forEach() para recorrer el array de 
 parametro de la funcion y junto con un length saque las longgitudes de 
 cada elemento de el array con push[] llene el array vacio con esas 
 logitudes luego usando luego usando un map() sobre el array de estring
 genere un sub-array de cada elemento donde el primer elemeento es el item
 y el segundo es el valor de el item equivalente a cada indice de el array
 de logitudes generodo asi un array de sub-array que con el fremEntries()
 se convierte en un objeto 
*/