import { runTests } from "../../../utils/testRunner.js";

/**
 * Práctica Adicional: Recursión
 * 
 * La recursión es una técnica de programación donde una función se llama a sí misma
 * para resolver un problema. Toda función recursiva debe tener:
 * 
 * 1. Caso base: La condición que detiene la recursión
 * 2. Caso recursivo: Donde la función se llama a sí misma con un problema más pequeño
 * 
 * INSTRUCCIONES:
 * Implementa las siguientes funciones utilizando recursión.
 */

/**
 * Ejercicio 1: Factorial
 * 
 * El factorial de un número n (representado como n!) es el producto de todos
 * los enteros positivos menores o iguales a n.
 * 
 * Ejemplos:
 * factorial(0) = 1
 * factorial(1) = 1
 * factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
 * 
 * @param {number} n - Número entero no negativo
 * @return {number} - Factorial de n
 */
function factorial(n) {
  // Tu código aquí
  if (n === 0) return 1; //Caso base

  return n * factorial(n - 1); //Caso recursivo
}

/**
 * Ejercicio 2: Suma de Array
 * 
 * Calcula la suma de todos los elementos de un array utilizando recursión.
 * 
 * Ejemplos:
 * sumaArray([]) = 0
 * sumaArray([1, 2, 3, 4]) = 10
 * 
 * @param {number[]} arr - Array de números
 * @return {number} - Suma de todos los elementos
 */
function sumaArray(arr) {
  // Tu código aquí

  // Caso base
  if(arr.length === 0) return 0;

  // Caso recursivo
  return arr[0] +  sumaArray(arr.slice(1)); // E.j =. 1 + sumaArray([2,3,4]) , despues 2 + sumaArray([3,4]) , despues 3 + sumaArray([4]) , despues 4 + sumaArray([]) , despues 0

  //  Y en reversa seria 0 + 4 + 3 + 2 + 1 = 10
}

/**
 * Ejercicio 3: Fibonacci
 * 
 * La secuencia de Fibonacci es una serie donde cada número es la suma
 * de los dos anteriores, comenzando con 0 y 1.
 * 
 * Ejemplos:
 * fibonacci(0) = 0
 * fibonacci(1) = 1
 * fibonacci(2) = 1
 * fibonacci(3) = 2
 * fibonacci(4) = 3
 * fibonacci(5) = 5
 * fibonacci(6) = 8
 * 
 * @param {number} n - Posición en la secuencia (comenzando desde 0)
 * @return {number} - Número de Fibonacci en la posición n
 */
function fibonacci(n) {
  // Tu código aquí

  // Caso base
  if(n < 2) return n;

  // Caso recursivo
  return fibonacci(n - 1) +  fibonacci(n - 2)
}

/**
 * Ejercicio 4: Potencia
 * 
 * Calcula x elevado a la potencia n utilizando recursión.
 * 
 * Ejemplos:
 * potencia(2, 0) = 1
 * potencia(2, 3) = 8
 * potencia(5, 2) = 25
 * 
 * @param {number} base - Base
 * @param {number} exponente - Exponente (entero no negativo)
 * @return {number} - nase elevado a la exponente
 */
function potencia(base , exponente) {
  // Tu código aquí

  if (exponente === 0) return 1; // Caso base: cualquier número elevado a la 0 es 1

  return base * potencia(base, exponente - 1); // Llamada recursiva
  
}

/**
 * Ejercicio 5: Contar Elementos
 * 
 * Cuenta cuántas veces aparece un elemento en un array utilizando recursión.
 * 
 * Ejemplos:
 * contarElemento([1, 2, 3, 2, 4, 2], 2) = 3
 * contarElemento([1, 2, 3, 4], 5) = 0
 * 
 * @param {Array} arr - Array de elementos
 * @param {*} elemento - Elemento a contar
 * @return {number} - Número de veces que aparece el elemento
 */
function contarElemento(arr, elemento) {
  // Tu código aquí
  if (arr.length === 0) return 0;

  if (arr[0] === elemento) return 1 + contarElemento(arr.slice(1), elemento);

  return contarElemento(arr.slice(1), elemento);
}

/**
 * Ejercicio 6: Invertir String
 * 
 * Invierte un string utilizando recursión.
 * 
 * Ejemplos:
 * invertirString("hola") = "aloh"
 * invertirString("recursion") = "noisrucer"
 * 
 * @param {string} str - String a invertir
 * @return {string} - String invertido
 */
function invertirString(str) {
  // Tu código aquí
  // Caso base
  if (str.length === 1) return str

  return invertirString(str.slice(1)) + str[0]  // Caso recursivo


}

/**
 * Ejercicio 7: Es Palíndromo
 * 
 * Determina si un string es un palíndromo utilizando recursión.
 * Un palíndromo es una palabra que se lee igual de izquierda a derecha y de derecha a izquierda.
 * 
 * Ejemplos:
 * esPalindromo("ana") = true
 * esPalindromo("reconocer") = true
 * esPalindromo("hola") = false
 * 
 * @param {string} str - String a verificar
 * @return {boolean} - true si es palíndromo, false en caso contrario
 */
function esPalindromo(str) {
  // Tu código aquí
}

/**
 * Ejercicio 8: Aplanar Array
 * 
 * Aplana un array anidado utilizando recursión.
 * 
 * Ejemplos:
 * aplanarArray([1, [2, 3], 4, [5, [6]]]) = [1, 2, 3, 4, 5, 6]
 * aplanarArray([1, 2, 3]) = [1, 2, 3]
 * 
 * @param {Array} arr - Array posiblemente anidado
 * @return {Array} - Array aplanado
 */
function aplanarArray(arr) {
  // Tu código aquí
}

/**
 * Ejercicio 9: Máximo Común Divisor (MCD)
 * 
 * Calcula el máximo común divisor de dos números utilizando
 * el algoritmo de Euclides de forma recursiva.
 * 
 * Ejemplos:
 * mcd(48, 18) = 6
 * mcd(17, 5) = 1
 * 
 * @param {number} a - Primer número entero positivo
 * @param {number} b - Segundo número entero positivo
 * @return {number} - Máximo común divisor
 */
function mcd(a, b) {
  // Tu código aquí
}

/**
 * Ejercicio 10: Torres de Hanoi
 * 
 * Resuelve el problema de las Torres de Hanoi utilizando recursión.
 * Imprime los movimientos necesarios para mover n discos desde la torre origen
 * a la torre destino, utilizando una torre auxiliar.
 * 
 * @param {number} n - Número de discos
 * @param {string} origen - Torre de origen
 * @param {string} auxiliar - Torre auxiliar
 * @param {string} destino - Torre de destino
 * @return {Array} - Array con los movimientos realizados
 */
function torresHanoi(n, origen = 'A', auxiliar = 'B', destino = 'C') {
  // Tu código aquí
  // Debe retornar un array de strings con los movimientos
  // Ejemplo: ["Mover disco 1 de A a C", "Mover disco 2 de A a B", ...]
}




// Casos de prueba para cada función

// Factorial
const factorialTests = [
  {
    input: [0],
    expected: 1
  },
  {
    input: [1],
    expected: 1
  },
  {
    input: [5],
    expected: 120
  }
];

// Suma de Array
const sumaArrayTests = [
  {
    input: [[]],
    expected: 0
  },
  {
    input: [[1, 2, 3, 4]],
    expected: 10
  }
];

// Fibonacci
const fibonacciTests = [
  {
    input: [0],
    expected: 0
  },
  {
    input: [1],
    expected: 1
  },
  {
    input: [6],
    expected: 8
  }
];

// Potencia
const potenciaTests = [
  {
    input: [2, 0],
    expected: 1
  },
  {
    input: [2, 3],
    expected: 8
  },
  {
    input: [5, 2],
    expected: 25
  }
];

// Contar Elemento
const contarElementoTests = [
  {
    input: [[1, 2, 3, 2, 4, 2], 2],
    expected: 3
  },
  {
    input: [[1, 2, 3, 4], 5],
    expected: 0
  }
];

// Invertir String
const invertirStringTests = [
  {
    input: ["hola"],
    expected: "aloh"
  },
  {
    input: ["recursion"],
    expected: "noisrucer"
  }
];

// Es Palíndromo
const esPalindromoTests = [
  {
    input: ["ana"],
    expected: true
  },
  {
    input: ["reconocer"],
    expected: true
  },
  {
    input: ["hola"],
    expected: false
  }
];

// Aplanar Array
const aplanarArrayTests = [
  {
    input: [[1, [2, 3], 4, [5, [6]]]],
    expected: [1, 2, 3, 4, 5, 6]
  },
  {
    input: [[1, 2, 3]],
    expected: [1, 2, 3]
  }
];

// MCD
const mcdTests = [
  {
    input: [48, 18],
    expected: 6
  },
  {
    input: [17, 5],
    expected: 1
  }
];

// Torres de Hanoi
const torresHanoiTests = [
  {
    input: [2],
    expected: [
      "Mover disco 1 de A a B",
      "Mover disco 2 de A a C",
      "Mover disco 1 de B a C"
    ]
  }
];

// Función para ejecutar todas las pruebas

console.log("\n=== Pruebas de Factorial ===");
runTests({
  testCases: factorialTests,
  methods: [{ name: 'Factorial', func: factorial }],
  compareFunction: (result, expected) => result === expected
});

console.log("\n=== Pruebas de Suma de Array ===");
runTests({
  testCases: sumaArrayTests,
  methods: [{ name: 'Suma Array', func: sumaArray }],
  compareFunction: (result, expected) => result === expected
});

console.log("\n=== Pruebas de Fibonacci ===");
runTests({
  testCases: fibonacciTests,
  methods: [{ name: 'Fibonacci', func: fibonacci }],
  compareFunction: (result, expected) => result === expected
});

console.log("\n=== Pruebas de Potencia ===");
runTests({
  testCases: potenciaTests,
  methods: [{ name: 'Potencia', func: potencia }],
  compareFunction: (result, expected) => result === expected
});

console.log("\n=== Pruebas de Contar Elemento ===");
runTests({
  testCases: contarElementoTests,
  methods: [{ name: 'Contar Elemento', func: contarElemento }],
  compareFunction: (result, expected) => result === expected
});

console.log("\n=== Pruebas de Invertir String ===");
runTests({
  testCases: invertirStringTests,
  methods: [{ name: 'Invertir String', func: invertirString }],
  compareFunction: (result, expected) => result === expected
});

console.log("\n=== Pruebas de Es Palíndromo ===");
runTests({
  testCases: esPalindromoTests,
  methods: [{ name: 'Es Palíndromo', func: esPalindromo }],
  compareFunction: (result, expected) => result === expected
});

console.log("\n=== Pruebas de Aplanar Array ===");
runTests({
  testCases: aplanarArrayTests,
  methods: [{ name: 'Aplanar Array', func: aplanarArray }],
  compareFunction: (result, expected) => JSON.stringify(result) === JSON.stringify(expected)
});

console.log("\n=== Pruebas de MCD ===");
runTests({
  testCases: mcdTests,
  methods: [{ name: 'MCD', func: mcd }],
  compareFunction: (result, expected) => result === expected
});

console.log("\n=== Pruebas de Torres de Hanoi ===");
runTests({
  testCases: torresHanoiTests,
  methods: [{ name: 'Torres de Hanoi', func: torresHanoi }],
  compareFunction: (result, expected) => JSON.stringify(result) === JSON.stringify(expected)
});

