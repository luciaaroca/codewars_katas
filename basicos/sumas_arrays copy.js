//1- Recibe un array de números y devuelve la suma de todos sus elementos.
//FOR
const arr1 = [1, 2, 3, 4];
function sumArr1(arr){
  let sum = 0;
  for(let i= 0; i< arr.length;i++){
    sum += arr[i];
  }
  return sum
}
console.log(sumArr1(arr1)); //10
// FOR EACH
function sumArr2(arr){
  let sum = 0;
  arr.forEach(num => sum += num)
  return sum
}
console.log(sumArr2(arr1))//10
// //REDUCE
const sumwithReduce = (arr) =>{
  return arr.reduce((acc,val)=> acc+val,0) // se necesita un return ya que hemos puesto {}
}
console.log(sumwithReduce(arr1)) //10
// //////////////////////////////////////////////////////

// //2- Sumar varios arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
// //FOR..OF

const allArrays = [array1, array2, array3];
function sumAllArrays1(allArr){
  let sum = 0;
  for (const arr of allArr){
    for (const num of arr){
      sum += num
    }
  }
  return sum
}
console.log (sumAllArrays1(allArrays))

// //FLAT + REDUCE
const sumAllArrays2 = (allArrays) =>{
  return sum = allArrays
  .flat()
  .reduce((acc,val)=> acc+ val , 0)
}
console.log (sumAllArrays2(allArrays))

//////////////////////////////////////////////////////

//3- Crear un nuevo array con la suma de los índices de varios arrays
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];

//map + reduce




// //clasica


