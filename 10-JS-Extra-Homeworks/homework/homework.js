// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  array = [];
  for (property in objeto) {
    array.push([property, objeto[property]]);
  }
  return array;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  arrayletras = [];
  arrayconteo = [];
  objeto = {};
  for (let i = 0; i < string.length; i++) {
    breakout = false;
    for (let k = 0; k < arrayletras.length; k++) {
      if (string[i] === arrayletras[k]) {
        breakout = true;
        continue;
      }
    }
    if (breakout === true) continue;
    arrayletras.push(string[i]);
  }
  arrayletras.sort();
  for (let i = 0; i < arrayletras.length; i++) {
    sumaletras = 0;
    for (let k = 0; k < string.length; k++) {
      if (arrayletras[i] === string[k]) sumaletras += 1;
    }
    arrayconteo.push(sumaletras);
  }
  for (let i = 0; i < arrayletras.length; i++) {
    keyy = arrayletras[i];
    valuee = arrayconteo[i];
    objeto[keyy] = valuee;
  }
  return objeto;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  nuevoorden = "";
  function esMayus(letra) {
    return letra === letra.toUpperCase();
  }
  function esMinus(letra) {
    return letra === letra.toLowerCase();
  }
  for (let i = 0; i < s.length; i++) {
    if (esMayus(s[i])) nuevoorden = nuevoorden + s[i];
  }
  for (let i = 0; i < s.length; i++) {
    if (esMinus(s[i])) nuevoorden = nuevoorden + s[i];
  }
  return nuevoorden;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  strNueva = "";
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === " " || i === str.length) {
      for (let k = i - 1; k >= 0; k--) {
        if (str[k] === " ") break;
        else strNueva += str[k];
      }
      if (i === str.length) break;
      strNueva += " ";
    }
  }
  return strNueva;
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numeroStr = numero.toString();
  numeroStrInverted = "";
  for (let i = numeroStr.length - 1; i >= 0; i--) {
    numeroStrInverted = numeroStrInverted + numeroStr[i];
  }
  if (numeroStrInverted === numeroStr) return "Es capicua";
  if (numeroStrInverted !== numeroStr) return "No es capicua";
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  array = "";
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c") continue;
    else array = array + cadena[i];
  }
  return array;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  (newArr = []), (newNum = []);
  largerWord = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > largerWord) largerWord = arr[i].length;
  }
  for (let k = 0; k <= largerWord; k++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length === k) newArr.push(arr[i]);
    }
  }
  return newArr;
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  newArray = [];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let k = 0; k < arreglo2.length; k++) {
      if (arreglo1[i] === arreglo2[k]) newArray.push(arreglo2[k]);
    }
  }
  return newArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
