/* 
El método Object.assign() copia todas las propiedades enumerables de uno o más objetos fuente a un objeto destino. Devuelve el objeto destino.
*/

/* const obj = { a: 1, b: 2, c: 3 }

let copyObj = Object.assign({}, obj)

console.log(copyObj) */

/* El método Object.create() crea un objeto nuevo, utilizando un objeto existente como el prototipo del nuevo objeto creado. 
 */


/* const person = {
    isHuman: false,
    printIntroduction: function () {
        return `Mi nombre es ${this.name}. Soy humano? ${this.isHuman}`;
    }
};

const newObj = Object.create(person);

newObj.name = 'Matthew'; // "nombre" es una propiedad establecida en "me", pero no en "persona"

newObj.isHuman = true; // las propiedades heredadas se pueden sobrescribir

console.log(newObj.printIntroduction());
*/



/* El metodo Object.defineProperties() define nuevas o modifica propiedades existentes directamente en el objeto, retornando el objeto.
 */

/* let obj = {}

let newObj = Object.defineProperties(obj, {
    "property1": {
        value: true,
        writable: true,
        enumerable: true
    },
    "property2": {
        value: "Hello",
        writable: false,
        enumerable: true
    }
    // etc. etc.
});

console.log(newObj) */

/* El método estático Object.defineProperty() define una nueva propiedad sobre un objeto, o modifica una ya existente, y devuelve el objeto modificado. */

/* let obj = { a: 1, b: 2, c: 3 }

Object.defineProperty(obj, "s", {

    writable: false, // el atributo define si la propiedad es modificable o no

    value: 4, // el valor por defecto de la propiedad

    configurable: false, // el atributo define si la propiedad puede ser eliminada o no y sus atrubutos modificables o no exeto el writable

    enumerable: true // el atributo define si la propiedad se muestra o no
})
delete obj.s
console.log(obj) */


/*El método Object.entries() devuelve una matriz de pares propios de una propiedad enumerable [key, value] de un objeto dado */

/* let obj = { a: 1, b: 2, c: 3 }

const arr = Object.entries(obj)

console.log(arr) */

/* El método Object.freeze() congela un objeto, es decir: impide que se le agreguen nuevas propiedades; impide que se puedan eliminar las propiedades ya existentes; impide que dichas propiedades, o su capacidad de enumeración, configuración, o escritura, puedan ser modificadas; impide también que se pueda modificar su prototipo. El método devuelve el objeto recibido. */

/* let obj = { a: 1, b: 2, c: 3 }
Object.freeze(obj);
obj.c = 4
console.log(obj)
 */

/* El método Object.fromEntries() transforma una lista de pares con [clave-valor] en un objeto. */

/* const arr = [['a', 1], ['b', 2], ['c', 3]]

const obj = Object.fromEntries(arr)

console.log(obj) */


/* El método Object.getOwnPropertyDescriptor() regresa como descripción de propiedad para una propiedad propia (eso es, una presente directamente en el objeto, no presente por la fuerza a través de la cadena de prototipo del objeto) de un objeto dado. */


/* const obj = { a: 1, b: 2, c: 3 }

const description = Object.getOwnPropertyDescriptor(obj, "b")

console.log(description) */

/* El métodoObject.getOwnPropertyDescriptors() regresa todos los descriptores de propiedad propios de un objeto dado. */

/* const obj = { a: 1, b: 2, c: 3 }
const description = Object.getOwnPropertyDescriptors(obj)

console.log(description) */

/* El método Object.getOwnPropertyNames() devuelve un array con todas las propiedades (numerables o no) encontradas en un objeto dado. */

/* const obj = { a: 1, b: 2, c: 3 }
const nameProperty = Object.getOwnPropertyNames(obj)

console.log(nameProperty) */

/* El método Object.getOwnPropertySymbols() regresa una colección de todos las propiedades de los simbolos encontrados directamente en un objeto dado.********* */

 /* const obj = { a: Symbol("foot"), b: "bbb??", c: "ccc$$" }

 const simbols = Object.getOwnPropertySymbols(obj)

 console.log(simbols) */

/*   El método Object.getPrototypeOf() devuelve el prototipo (es decir, el valor de la propiedad interna [[Prototype]]) del objeto especificado. ********* */

/*     const obj = { a: 1, b: 2, c: 3 }
    const proto = Object.getPrototypeOf(obj)
    console.log(proto) */

/*   El método estático Object.hasOwn() devuelve verdadero si el objeto especificado tiene la propiedad indicada como propiedad propia. Si la propiedad se hereda o no existe, el método devuelve falso. 
 
Nota: Object.hasOwn() pretende ser un reemplazo de Object.hasOwnProperty().
*/
/* 
const obj = { a: 1, b: 2, c: 3 }
const result = Object.hasOwn(obj, "c")
console.log(result)
 */

/* El método hasOwnProperty() devuelve un booleano indicando si el objeto tiene la propiedad especificada. */

/* const obj = { a: 1, b: 2, c: 3 }
const result = obj.hasOwnProperty("b")
console.log(result)
 */

/* El método Object.is() determina si dos valores son iguales.*/

/* const obj1 = { a: 1, b: 2, c: 3 }
const obj2 = { a: 1, b: 2, c: 3 }

const result = Object.is(obj1.c, obj2.c);

console.log(result) */

/* El método Object.isExtensible() determina si un objeto es extendible (si puede tener propiedades nuevas agregadas a éste). */

/* const obj = { a: 1, b: 2, c: 3 }
const result = Object.isExtensible(obj)
console.log(result) */

/* El método Object.isFrozen() determina si un objeto está congelado.

Un objeto está congelado si y solo si no es extendible, todas sus propiedades son no-configurables, y todos los datos de sus propiedades no tienen capacidad de escritura. */

/* const obj = { a: 1, b: 2, c: 3 }
const result = Object.isFrozen(obj)
console.log(result) */

/* El método isPrototypeOf() comprueba si un objeto se encuentra en la cadena de prototipado de otro.************ */

/* El método Object.seal() sella un objeto, previniendo que puedan añadirse nuevas propiedades al mismo, y marcando todas las propiedades existentes como no-configurables. Los valores de las propiedades presentes permanecen pudiendo cambiarse en tanto en cuanto dichas propiedades sean de escritura. */

/* const obj = { a: 1, b: 2, c: 3 }
const description = Object.getOwnPropertyDescriptors(obj)
console.log(description)
Object.seal(obj)
const newDescription = Object.getOwnPropertyDescriptors(obj)
console.log(newDescription)
 */


/* El método Object.isSealed() si el objeto está sellado.

Devuelve true si el objeto está sellado, de lo contrario devuelve false. Un objeto está sellado si no es extensible y si todas sus propiedades no se pueden configurar y por lo tanto no removibles (pero no necesariamente no modificables). */

/* const obj = { a: 1, b: 2, c: 3 }
const unlocked = Object.isSealed(obj)
console.log(unlocked)
Object.seal(obj)
const locked = Object.isSealed(obj)
console.log(locked)
 */

/* El método Object.keys() devuelve un array de las propiedades names de un objeto, en el mismo orden como se obtienen en un loop normal */

/* const obj = { a: 1, b: 2, c: 3 }
const arrKey = Object.keys(obj)
console.log(arrKey)
 */

/* El método Object.values() devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto. Las propiedades son devueltas en el mismo orden a como lo haría un bucle for...in (la única diferencia es que un bucle for-in también enumera las propiedades en la cadena de prototipo de un objeto). */

/*  const obj = { a: 1, b: 2, c: 3 }
const arrValues = Object.values(obj)
console.log(arrValues)*/

/* El método Object.preventExtensions() previene que nuevas propiedades sean agregadas a un objeto
 */

/* const obj = { a: 1, b: 2, c: 3 }
 Object.preventExtensions(obj)
 obj.d = 4
console.log(obj)
 */

/* El método propertyIsEnumerable() regresa un Boleano indicando si la propiedad especificada es enumerable.

Todos los objetos tienen un método propertyIsEnumerable. Este método puede determinar si la propiedad especificada en el objeto puede ser enumerada por un ciclo for...in, con la excepción de propiedades heredadas a través de prototype. Si el objeto no tiene la propiedad especificada, este método regresa un valor false.*/

/* const obj = { a: 1, b: 2, c: 3 }
const isEnumerable = obj.propertyIsEnumerable("c")
console.log(isEnumerable) */

/* El método Object.setPrototypeOf() establece el prototipo (p.e., la propiedad interna [[Prototype]]) de un objeto especificado a otro objeto o sino establece null. *********** */