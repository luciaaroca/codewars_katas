/*Se proporciona una función que acepta dos parámetros en el siguiente orden: array, elemento, y devuelve el índice del elemento si se encuentra y "No encontrado" en caso contrario. Su tarea es acortar el código lo máximo posible para cumplir con los requisitos de conteo de caracteres del Kata.

Puede asumir que todos los elementos de la array son únicos.

El límite de caracteres es 60 (CoffeeScript), 85 (JavaScript, Python) y 161 (Java)*/


//Solución mia MAL
function find(array, element) {
     if (element){
         return array.indexOf(element) 
        }else{ "Not found" } 
    }
//Solución BUENA
function find(array, element) {
  const index = array.indexOf(element);
  if (index === -1) {
    return "Not found";
  }

  return index;
}