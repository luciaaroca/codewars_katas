// La rana de boca ancha está particularmente interesada en los hábitos alimenticios de otras criaturas.

// No puede dejar de preguntar a las criaturas que encuentra qué les gusta comer. ¡Pero entonces conoce al caimán, al que le ENCANTA comer ranas de boca ancha!

// Cuando se encuentra con el caimán, este forma una boca diminuta.

// El objetivo en esta kata es crear el método mouth_size completo. Este método toma un argumento animal 
// que corresponde al animal que encontró la rana. Si este es un caimán (sin distinguir entre mayúsculas y minúsculas), 
// devuelve small; de lo contrario, devuelve wide.

/*En ingles:
Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which 
corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small
otherwise return wide.*/
function mouthSize(animal) {
  // code here
}
//->
function mouthSize(animal) {
  if (animal.toLowerCase() === "alligator"){
    return "small"
  }else {
    return "wide"
  }
}