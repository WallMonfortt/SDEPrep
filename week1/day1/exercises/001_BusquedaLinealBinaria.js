import { runTests } from "../../../../utils/testRunner.js";

/**
 * Ejercicio 1: Implementación de algoritmos de búsqueda
 * 
 * En este ejercicio implementaremos dos algoritmos fundamentales de búsqueda:
 * 1. Búsqueda Lineal - O(n)
 * 2. Búsqueda Binaria - O(log n)
 */

/**
 * Búsqueda Lineal
 * @param {Array} arr - Array donde buscar
 * @param {*} target - Elemento a buscar
 * @return {number} - Índice del elemento o -1 si no se encuentra
 * 
 * Complejidad Temporal: O(n) - En el peor caso recorre todo el array
 * Complejidad Espacial: O(1) - No requiere memoria adicional
 */
function busquedaLineal(arr, target) {
  // TODO: Implementa la búsqueda lineal
  // Recorre el array elemento por elemento
  // Si encuentras el elemento objetivo, devuelve su índice
  // Si terminas de recorrer el array sin encontrarlo, devuelve -1
}

/**
 * Búsqueda Binaria (requiere array ordenado)
 * @param {Array} arr - Array ordenado donde buscar
 * @param {*} target - Elemento a buscar
 * @return {number} - Índice del elemento o -1 si no se encuentra
 * 
 * Complejidad Temporal: O(log n) - Divide el espacio de búsqueda a la mitad en cada iteración
 * Complejidad Espacial: O(1) - Versión iterativa
 */
function busquedaBinaria(arr, target) {
  // TODO: Implementa la búsqueda binaria iterativa
  // Define los índices izquierdo y derecho
  // Mientras el índice izquierdo sea menor o igual al derecho:
  //   Calcula el índice medio
  //   Si el elemento en el índice medio es el objetivo, devuelve el índice
  //   Si el elemento es menor que el objetivo, actualiza el índice izquierdo
  //   Si el elemento es mayor que el objetivo, actualiza el índice derecho
  // Si terminas el bucle sin encontrar el elemento, devuelve -1
}

/**
 * Búsqueda Binaria (versión recursiva)
 * @param {Array} arr - Array ordenado donde buscar
 * @param {*} target - Elemento a buscar
 * @param {number} izq - Índice izquierdo del subarray actual
 * @param {number} der - Índice derecho del subarray actual
 * @return {number} - Índice del elemento o -1 si no se encuentra
 * 
 * Complejidad Temporal: O(log n)
 * Complejidad Espacial: O(log n) - Por las llamadas recursivas
 */
function busquedaBinariaRecursiva(arr, target, izq = 0, der = arr.length - 1) {
  // TODO: Implementa la búsqueda binaria recursiva
  // Caso base: si izq > der, el elemento no está en el array
  // Calcula el índice medio
  // Si el elemento en el índice medio es el objetivo, devuelve el índice
  // Si el elemento es menor que el objetivo, llama recursivamente con el subarray derecho
  // Si el elemento es mayor que el objetivo, llama recursivamente con el subarray izquierdo
}

// Casos de prueba

console.log("=== Test cases Búsqueda Lineal ===");
const busquedaLinealTestCases = [
  {
    input: [[1, 3, 5, 7, 9], 5],
    expected: 2
  },
  {
    input: [[1, 3, 5, 7, 9], 6],
    expected: -1
  },
  {
    input: [[], 5],
    expected: -1
  },
  {
    input: [[5], 5],
    expected: 0
  }
]

const linearMethods = [{name: 'lineal', func: busquedaLineal}]

runTests({
  testCases: busquedaLinealTestCases,
  methods: linearMethods,
  compareFunction: (result, expected) => result === expected
})

console.log("\n=== Pruebas de Búsqueda Binaria ===");
const busquedaBinariaTestCases = [
  {
    input: [[1, 3, 5, 7, 9], 5],
    expected: 2
  },
  {
    input: [[1, 3, 5, 7, 9], 6],
    expected: -1
  },
  {
    input: [[], 5],
    expected: -1
  },
  {
    input: [[5], 5],
    expected: 0
  }
]

const binaryMethods = [{name: 'Binary Search', func: busquedaBinaria}]

runTests({
  testCases: busquedaBinariaTestCases,
  methods: binaryMethods,
  compareFunction: (result, expected) => result === expected
})

console.log("\n=== Pruebas de Búsqueda Binaria Recursiva ===");
const busquedaBinariaRecursivaTestCases = [
  {
    input: [[1, 3, 5, 7, 9], 5],
    expected: 2
  },
  {
    input: [[1, 3, 5, 7, 9], 6],
    expected: -1
  },
  {
    input: [[], 5],
    expected: -1
  },
  {
    input: [[5], 5],
    expected: 0
  }
]

const binaryRecursiveMethods = [{name: 'Binary Search Recursive', func: busquedaBinariaRecursiva}]

runTests({
  testCases: busquedaBinariaRecursivaTestCases,
  methods: binaryRecursiveMethods,
  compareFunction: (result, expected) => result === expected
})

