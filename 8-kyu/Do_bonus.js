
/*¡Llegó la hora de las bonificaciones en la gran ciudad! Los ricos se frotan las patas con anticipación... pero ¿quién ganará más dinero?

Construye una función que acepte dos argumentos (salario, bonificación). Salario será un entero y bonificación un booleano.

Si la bonificación es verdadera, el salario debe multiplicarse por 10. Si la bonificación es falsa, el rico no ganó suficiente dinero y debe recibir solo su salario declarado. */

//SOLUCIÓN
function bonusTime(salary, bonus) 
{
  if(bonus)
  {
    return "£" + (salary*10)
  }
  return "£" + salary
}
