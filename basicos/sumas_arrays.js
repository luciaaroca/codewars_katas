//1- Recibe un array de números y devuelve la suma de todos sus elementos.
//FOR
const arr1 = [1, 2, 3, 4];
function sumArray1(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray1(arr1));

// FOR EACH
const arr = [1, 2, 3, 4];
function sumArray(arr) {
  let sum = 0;
  arr.forEach(num => sum += num);
  return sum;
}
console.log(sumArray(arr));
//REDUCE
const arr2 = [1, 2, 3, 4]
const sumArray2 = (arr) => arr.reduce((acc, val) => acc + val, 0);
console.log(sumArray2(arr2))

// acc → acumulador que empieza en 0
// val → cada elemento del array
// acc + val → suma cada elemento al acumulador

//////////////////////////////////////////////////////

//2- Sumar varios arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
//FOR..OF
const allArrays1= [array1, array2, array3];
function sumAllArrays (allArrays1){
    let sum = 0;
    for(const arr of allArrays1){
        for(const num of arr){
            sum = sum + num
        }
    }
    return sum
}
console.log(sumAllArrays(allArrays1))
//FLAT + REDUCE
const allArrays2= [array1, array2, array3];
const sumAllArrays2 = allArrays2
    .flat()
    .reduce((acc,val)=> acc + val, 0)
console.log(sumAllArrays2)

//////////////////////////////////////////////////////

//3- Crear un nuevo array con la suma de los índices de varios arrays
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];

//map + reduce
const arrays = [a, b, c];

const sumByIndex = a.map((_, i) => 
  arrays.reduce((acc, arr) => acc + arr[i], 0)
);

console.log(sumByIndex); // [12, 15, 18]

//clasica
const arrays2 = [a, b, c];
const result = [];

for (let i = 0; i < a.length; i++) {       // recorre los índices
  let sum = 0;
  for (const arr of arrays2) {              // recorre cada array
    sum += arr[i];                         // suma los elementos en el mismo índice
  }
  result.push(sum);                        // guarda el resultado en el nuevo array
}

console.log(result); // [12, 15, 18]

