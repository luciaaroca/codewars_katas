/*Cree una función que acepte tres argumentos:

Un valor que se evaluará para determinar su veracidad.
Una función que se ejecutará si el primer argumento es veraz.
Una función que se ejecutará si el primer argumento es falso.
Si el primer argumento se evalúa como verdadero, se llama al segundo argumento (una función). Si se evalúa como falso, se llama al tercer argumento (también una función).

En lenguajes de tipado estático, el primer argumento será un booleano. En lenguajes de tipado dinámico que atribuyen un valor de verdad a todas las expresiones, este puede ser de cualquier tipo. */


//mi solución--MAL
//En JS, no necesitas escribir if (x === true) porque todos los valores se evalúan automáticamente como verdadero o falso cuando los usas en un if.
function _if(bool, func1, func2) {
  if (typeof bool ==="true"){
    return func1()
  }else {
    return func2()
  }
}

//Solución correcta
function _if(bool, func1, func2) {
 if (bool) {
  func1();
} else {
  func2();
}
}
//Evalúa bool
//Si es truthy, entra al bloque if → ejecuta func1()
//Si es falsy, entra al bloque else → ejecuta func2()