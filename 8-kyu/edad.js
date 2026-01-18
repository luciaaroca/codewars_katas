/*Se te asigna una función que toma el parámetro "edad" (que siempre será un entero positivo) y realiza lo siguiente:

Si la edad es de 12 años o menos, devuelve "Eres un niño".
Si la edad está entre 13 y 17 años (inclusive), devuelve "Eres un adolescente".
Si la edad está entre 18 y 64 años (inclusive), devuelve "Eres un adulto".
Si la edad es de 65 años o más, devuelve "Eres un anciano".
Tu tarea es acortar el código lo máximo posible. Ten en cuenta que enviar el código dado no funcionará debido al límite de caracteres de 137.

Te daré algunas pistas:

El título en sí mismo es una pista: si no estás seguro de qué hacer, investiga siempre cualquier terminología desconocida en esta descripción. ¿No te parece muy repetitivo todo eso de "Eres un(a) <insertar_algo_aquí>"? ;) ¿Quizás podríamos acortarlo?
Escribe todo en una sola línea; \n y los demás espacios cuentan.
Hagas lo que hagas, no cambies la función. ¡Mucha suerte! :)*/

const describeAge = age =>
  age <= 12 ? "You're a(n) kid" :
  age <= 17 ? "You're a(n) teenager" :
  age <= 64 ? "You're a(n) adult" :
  "You're a(n) elderly";