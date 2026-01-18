/*Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24*/

//Solución correcta

function grow(x){
 const creciente = x.reduce((acc,val)=>acc*val,1)
 return creciente
}

console.log (grow([1,4,5,67]))