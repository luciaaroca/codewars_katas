/*El objetivo de Pato, pato, ganso es caminar en círculo, tocando la cabeza de cada jugador hasta que uno sea elegido.

Tarea:

Dada un array de objetos Jugador y una posición (la primera posición es 1), devuelve el nombre del jugador elegido.
El nombre es una propiedad de los objetos Jugador, p. ej. Jugador.nombre*/


//SOLUCIÓN -> yo no llegue 
function duckDuckGoose(players, goose) {
  const index = (goose - 1) % players.length; // índice circular
  return players[index].nombre;
}
//goose-1 -> empieza desde 1 y hay que restarle 1 realmente ya que los arrays empiezan en 0
//% players.length → asegura que si goose es mayor que el número de jugadores, vuelve al inicio del array