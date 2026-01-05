/*Para este problema, debes crear un programa que indique quién se comió la última galleta. Si la entrada es una cadena, "Zach" se comió la galleta. Si la entrada es un float o un int, "Mónica" se comió la galleta. Si la entrada es cualquier otra, "el perro" se comió la galleta. La forma de devolver la instrucción es: "¿Quién se comió la última galleta? ¡Fue (nombre)!"

Ej: Entrada = "hola" --> Salida = "¿Quién se comió la última galleta? ¡Fue Zach!" (La razón por la que se devuelve Zach es porque la entrada es una cadena).

Nota: Asegúrate de devolver el mensaje correcto con los espacios y la puntuación correctos.

Por favor, deja comentarios sobre esta kata. ¡Saludos!*/

//CONCEPTOS
//int (interger -> numero entero sin decimales)
//float (numero decimal)
//tdos son number

//Mi solucion----MAL

function cookie(x){
if (x === string){
  return "Who ate the last cookie? It was Zach!"
}if (x ===number){
  return "Who ate the last cookie? It was Monica!"
}else{
   return "Who ate the last cookie? It was the dog!"
} 
 }
//En JS string y number no son valores, son tipos.
//Para comprobar el tipo de variable hay que usar typeof.
//Mala estructura del condicional

//Solución ---BIEN
function cookie(x) {
  if (typeof x === "string") {
    return "Who ate the last cookie? It was Zach!";
  } else if (typeof x === "number") {
    return "Who ate the last cookie? It was Monica!";
  } else {
    return "Who ate the last cookie? It was the dog!";
  }
}