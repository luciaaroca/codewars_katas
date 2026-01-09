/*Cree una función close_compare que acepte 3 parámetros: a, b y un margen opcional. La función debe indicar si a es menor, cercano o mayor que b.

Tenga en cuenta lo siguiente:

Cuando a esté cerca de b, devuelva 0.
Para este desafío, a se considera "cerca de" b si el margen es mayor o igual a la distancia absoluta entre a y b.
De lo contrario...

Cuando a sea menor que b, devuelva -1.

Cuando a sea mayor que b, devuelva 1.

Si no se especifica el margen, trátelo como si fuera cero.

Supongamos: margen >= 0

Consejo: Algunos lenguajes permiten que los parámetros sean opcionales. */

//Mi solución --> MAL
function closeCompare(a, b, margin){
  const distanciaAbsoluta = a - b;
  if(margin >= distanciaAbsoluta){
    return 0
  }else if(a<b){
    return -1
  }else{
    return 1
  }
}

//Solucion Buena
function closeCompare(a, b, margin=0){
const distanciaAbsoluta = Math.abs(a - b);
  if(margin >= distanciaAbsoluta){
    return 0
  }else if(a<b){
    return -1
  }else{
    return 1
  }
}