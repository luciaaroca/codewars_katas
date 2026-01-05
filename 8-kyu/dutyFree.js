// El objetivo de esta kata es calcular cuántas botellas de whisky duty free tendría que comprar para que el ahorro sobre 
// el precio normal en la calle cubra eficazmente el coste de sus vacaciones. Se le indicará el precio normal (precio normal, en libras),
//  el descuento duty free (descuento, en porcentaje) y el coste de las vacaciones (en libras). 
// Por ejemplo, si una botella cuesta 10 libras normalmente y el descuento duty free es del 10%, ahorraría 1 libra por botella. Si sus 
// vacaciones cuestan 500 libras, tendría que comprar 500 botellas para ahorrar 500 libras, por lo que el resultado debería ser 500. 
// Otro ejemplo: si una botella cuesta 12 libras normalmente y el descuento duty free es del 50%, ahorraría 6 libras por botella. 
// Si sus vacaciones cuestan £1000, tendría que comprar 166,66 botellas para ahorrar £1000, por lo que su respuesta debería ser 166 botellas. 
// Todas las entradas serán números enteros. Por favor, devuelva un número entero.
//  Redondee hacia abajo. Ya se que lo que hay que calcular es el dinero de ahorro de cada botella, eso se divide entre el dinero de las vacaciones
//  y nos da las cifras de las botellas que hay que comprar en el dutty free

/*Mi solucion------MAL*/
function dutyFree(normPrice, discount, hol){
  const normPrice=y;
  const discount = x/100;
  const hol = z;
  console.log(hol/normPrice*discount)
  
}

/*Solución BIEN*/
function dutyFree(normPrice, discount, hol){
  const descuentoReal = discount / 100;
  const ahorroPorBotella = normPrice * descuentoReal;
  const botellas = hol / ahorroPorBotella;
  return Math.floor(botellas);
}

//

function dutyFree(normPrice, discount, hol) {
  return Math.floor(hol / (normPrice * discount / 100));
}
