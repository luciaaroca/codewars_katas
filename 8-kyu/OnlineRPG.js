/*Imaginemos un popular juego de rol en línea. Un jugador comienza con una puntuación de 0 en la clase E5. A1 es el nivel más alto que puede alcanzar.

Supongamos que el jugador quiere ascender a la clase E4. Para ello, necesita obtener al menos 100 puntos para acceder a la fase clasificatoria.

Escriba un script que compruebe si el jugador ha obtenido al menos 100 puntos en su clase. De ser así, accede a la fase clasificatoria.

En ese caso, devolvemos: "¡Bien hecho! Has avanzado a la fase clasificatoria. Gana 2 de tus próximas 3 partidas para ascender".

De lo contrario, devolvemos Falso/Falso (según el lenguaje utilizado).

NOTA

Recuerde que en C# debe convertir el valor de salida al tipo Objeto. */

//SOLUCIÓN MIA BUENA
function playerRankUp (points) {
    return points>100 ? `Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.` : false
}