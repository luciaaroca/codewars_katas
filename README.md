# Teoria JavaScript
## Primitivos:
- string → cadenas de texto
- number → números (enteros y decimales, no hay distinción de tipo como int/float)
- boolean → true / false
null → ausencia de valor
undefined → variable declarada pero sin valor
- NaN → resultado de operaciones matemáticas inválidas
## No primitivos / objetos:
- object → objetos con propiedades {nombre: "Ana"}
- array → lista de elementos [1,2,3]
- function → funciones son también objetos especiales
- Comprobar tipo: typeof variable → devuelve "string", "number", "boolean", "object", "function"
## Valores truthy y falsy
En JS, cualquier valor puede evaluarse como verdadero o falso en un if.
- Falsy: false, 0, "", null, undefined, NaN
- Truthy: todo lo demás (true, números distintos de 0, strings no vacíos, arrays, objetos)
💡 Esto permite hacer condicionales sin necesidad de === true.
## Operadores de comparación
Operador	Qué hace
- =	Asignación
- ==	Comparación con conversión de tipos (coerción automática)
- ===	Comparación estricta (valor y tipo) ✅
- !=	Diferente con conversión
- !==	Diferente estricta
- Tip: Siempre usar === y !== para evitar errores de coerción.
## Operadores matemáticos
- +, -, *, / → operaciones básicas
- % → módulo / resto de división
Muy útil para circularidad, índices que “vuelven al inicio”
- Math.floor(x) → redondea hacia abajo
- Math.ceil(x) → redondea hacia arriba
- Math.round(x) → redondea al entero más cercano
- Math.abs(x-y) -> devuelve el valor absoluto de un número.
## Arrays
- Sintaxis: let arr = [1,2,3];
- Índices empiezan en 0
- Acceso a elemento: arr[0] → primer elemento
- Longitud: arr.length
- Circularidad: arr[index % arr.length]
## Objetos
- Sintaxis: { clave: valor }
- Acceso a propiedad: obj.propiedad o obj["propiedad"]
- Permite agrupar datos relacionados (ej: jugadores, productos, etc.)
## Funciones
- Definición:
function nombre(param1, param2) {
  // código
  return valor;
}
- Pueden recibir funciones como argumentos y ejecutarlas (callback)
- Ejemplo de uso: func1() o func2() dependiendo de una condición
## Condicionales
- if / else if / else → decisiones simples
- if (condicion) → JS evalúa truthy/falsy
- Estructura alternativa: operador ternario condicion ? expr1 : expr2
## Métodos
# map() 
Sirve para crear un nuevo arreglo transformando cada elemento del array original.
- 👉 No busca,
- 👉 no filtra,
- 👉 no modifica el original.
const numeros = [1, 2, 3];

const dobles = numeros.map(n => n * 2);

console.log(dobles); // [2, 4, 6]

# indexOf()
- 👉 Busca un valor exacto
- 👉 Devuelve el índice
- 👉 Devuelve -1 si no lo encuentra

array.indexOf(3);

- ✔️ Ideal para saber si existe
- ❌ No usa condiciones

# filter()
- 👉 Filtra elementos
- 👉 Devuelve un array nuevo (puede ser vacío)

array.filter(x => x > 3);

- ✔️ Selecciona varios
- ❌ No devuelve un solo valor

# find()
- 👉 Devuelve el primer elemento que cumple la condición
- 👉 Devuelve undefined si no encuentra

array.find(x => x > 3);

- ✔️ Se detiene al encontrar
- ❌ No devuelve índice
# .join(' ') 
- une todos los elementos del array con un espacio entre ellos.
# Spread Operator
Desempaqueta los elementos de un array o las propiedades de un objeto en un nuevo array u objeto
-Para arrays, toma todos los elementos y los pone en otro array.
-Para objetos, toma todas las propiedades y las copia en otro objeto.
const items = [{id:1,text:"Hola"}];
const newItem = {id:2,text:"Mundo"};

const updatedItems = [...items, newItem];
console.log(updatedItems);
// [{id:1,text:"Hola"}, {id:2,text:"Mundo"}]