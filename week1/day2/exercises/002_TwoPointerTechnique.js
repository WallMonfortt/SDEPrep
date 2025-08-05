import { runTests } from "../../../utils/testRunner.js";

/**
 * Día 2: Two-Pointer Technique
 * 
 * La técnica de dos punteros es un patrón algorítmico que utiliza dos referencias (punteros)
 * para recorrer una estructura de datos, generalmente un array o una lista enlazada.
 * 
 * INSTRUCCIONES:
 * Implementa las siguientes funciones utilizando la técnica de dos punteros.
 */

/**
 * Two Sum
 * 
 * Dado un array de números y un valor objetivo, encuentra dos números en el array
 * que sumen el valor objetivo.
 * 
 * Ejemplo:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [2, 7] (porque 2 + 7 = 9)
 * 
 * Restricciones:
 * - Debes usar la técnica de dos punteros
 * - El array puede estar desordenado
 * - Si no hay solución, devuelve null
 * 
 * @param {number[]} nums - Array de números
 * @param {number} target - Valor objetivo
 * @return {number[]} - Par de números que suman el objetivo, o null si no existe
 */
function twoSum(nums, target) {
  // Tu código aquí
}

/**
 * Eliminar Duplicados de un Array Ordenado
 * 
 * Dado un array ordenado, elimina los duplicados in-place y devuelve la nueva longitud.
 * No debes asignar espacio extra para otro array, debes modificar el array de entrada
 * con O(1) de memoria extra.
 * 
 * Ejemplo:
 * Input: nums = [1, 1, 2, 2, 3, 4, 4, 5]
 * Output: 5 (y nums ahora es [1, 2, 3, 4, 5, ...])
 * 
 * @param {number[]} nums - Array ordenado con posibles duplicados
 * @return {number} - Longitud del array sin duplicados
 */
function removeDuplicates(nums) {
  // Tu código aquí

  return []
}

/**
 * Par más Cercano a un Valor Objetivo
 * 
 * Dado un array de números y un valor objetivo, encuentra el par de números
 * cuya suma sea más cercana al valor objetivo.
 * 
 * Ejemplo:
 * Input: nums = [1, 3, 4, 7, 10], target = 15
 * Output: [4, 10] (suma 14, diferencia 1)
 * 
 * @param {number[]} nums - Array de números
 * @param {number} target - Valor objetivo
 * @return {number[]} - Par de números cuya suma es más cercana al objetivo
 */
function findClosestPair(nums, target) {
  // Tu código aquí

  return []
}

/**
 * Tripletes con Suma Cero
 * 
 * Dado un array de números, encuentra todos los tripletes únicos que sumen cero.
 * 
 * Ejemplo:
 * Input: nums = [-1, 0, 1, 2, -1, -4]
 * Output: [[-1, -1, 2], [-1, 0, 1]]
 * 
 * @param {number[]} nums - Array de números
 * @return {number[][]} - Array de tripletes que suman cero
 */
function threeSum(nums) {
  // Tu código aquí
return [[]]
}

/**
 * Verificar Palindromo
 * 
 * Dado un string, determina si es un palíndromo considerando solo caracteres alfanuméricos
 * e ignorando mayúsculas/minúsculas.
 * 
 * Ejemplo:
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 * 
 * Input: "race a car"
 * Output: false
 * 
 * @param {string} s - String a verificar
 * @return {boolean} - true si es palíndromo, false en caso contrario
 */
function isPalindrome(s) {
  // Tu código aquí

  return true
}

/**
 * Container With Most Water
 * 
 * Dado un array de alturas, encuentra dos líneas que junto con el eje x
 * formen un contenedor que pueda almacenar la mayor cantidad de agua.
 * 
 * Ejemplo:
 * Input: height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
 * Output: 49 (entre las alturas 8 y 7)
 * 
 * @param {number[]} height - Array de alturas
 * @return {number} - Máxima área de agua que se puede contener
 */
function maxArea(height) {
  // Tu código aquí

  return 0
}

// Casos de prueba para cada función

// Two Sum
const twoSumTests = [
  {
    input: [[2, 7, 11, 15], 9],
    expected: [2, 7]
  },
  {
    input: [[3, 2, 4], 6],
    expected: [2, 4]
  },
  {
    input: [[3, 3], 6],
    expected: [3, 3]
  },
  {
    input: [[1, 2, 3, 4], 10],
    expected: null
  }
];

// Remove Duplicates
const removeDuplicatesTests = [
  {
    input: [[1, 1, 2, 2, 3, 4, 4, 5]],
    expected: [1, 2, 3, 4, 5]
  },
  {
    input: [[1, 1, 1, 1]],
    expected: [1]
  },
  {
    input: [[1, 2, 3, 4, 5]],
    expected: [1, 2, 3, 4, 5]
  }
];

// Closest Pair
const findClosestPairTests = [
  {
    input: [[1, 3, 4, 7, 10], 15],
    expected: [4, 10]
  },
  {
    input: [[1, 2, 3, 4, 5], 10],
    expected: [4, 5]
  }
];

// Three Sum
const threeSumTests = [
  {
    input: [[-1, 0, 1, 2, -1, -4]],
    expected: [[-1, -1, 2], [-1, 0, 1]]
  },
  {
    input: [[0, 0, 0]],
    expected: [[0, 0, 0]]
  }
];

// Is Palindrome
const isPalindromeTests = [
  {
    input: ["A man, a plan, a canal: Panama"],
    expected: true
  },
  {
    input: ["race a car"],
    expected: false
  }
];

// Max Area
const maxAreaTests = [
  {
    input: [[1, 8, 6, 2, 5, 4, 8, 3, 7]],
    expected: 49
  },
  {
    input: [[4, 3, 2, 1, 4]],
    expected: 16
  }
];

console.log("\n=== Pruebas de Two Sum ===");
runTests({
  testCases: twoSumTests,
  methods: [{ name: 'Two Sum', func: twoSum }],
  compareFunction: (result, expected) => JSON.stringify(result) === JSON.stringify(expected)
});

console.log("\n=== Pruebas de Remove Duplicates ===");
runTests({
  testCases: removeDuplicatesTests,
  methods: [{
    name: 'Remove Duplicates', 
    func: removeDuplicates}],
  compareFunction: (result, expected) => JSON.stringify(result) === JSON.stringify(expected)
});

console.log("\n=== Pruebas de Closest Pair ===");
runTests({
  testCases: findClosestPairTests,
  methods: [{ name: 'Closest Pair', func: findClosestPair }],
  compareFunction: (result, expected) => JSON.stringify(result) === JSON.stringify(expected)
});

console.log("\n=== Pruebas de Three Sum ===");
runTests({
  testCases: threeSumTests,
  methods: [{ name: 'Three Sum', func: threeSum }],
  compareFunction: (result, expected) => JSON.stringify(result) === JSON.stringify(expected)
});

console.log("\n=== Pruebas de Is Palindrome ===");
runTests({
  testCases: isPalindromeTests,
  methods: [{ name: 'Is Palindrome', func: isPalindrome }],
  compareFunction: (result, expected) => JSON.stringify(result) === JSON.stringify(expected)
});

console.log("\n=== Pruebas de Max Area ===");
runTests({
  testCases: maxAreaTests,
  methods: [{ name: 'Max Area', func: maxArea }],
  compareFunction: (result, expected) => JSON.stringify(result) === JSON.stringify(expected)
});

