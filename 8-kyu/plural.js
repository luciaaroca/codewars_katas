/*Necesitamos una función simple que determine si se necesita un plural. Debe tomar un número y devolver "true" si se debe usar un plural con ese número, o "false" si no. Esto sería útil al imprimir una cadena como "5 minutos", "14 manzanas" o "1 sol".

Solo hay que preocuparse por las reglas gramaticales del inglés para esta kata: cualquier cosa que no sea singular (uno de algo), es plural (no uno de algo).

Todos los valores serán enteros positivos, decimales o cero. */

/*Solucion---BUENA */
function plural(n) {
  if (n===1){
    return false
  }else{
    return true
  }
  
}