import { runTests } from '../../../../utils/testRunner.js'

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
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(element === target) return index
  }

  return -1
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
  let left = 0, rigth = arr.length - 1; 
  // Mientras el índice izquierdo sea menor o igual al derecho:
  while(left <= rigth){
    //   Calcula el índice medio
    const middle = Math.floor((left + rigth) / 2);
    //   Si el elemento en el índice medio es el objetivo, devuelve el índice
    const element = arr[middle]
    if(element == target) return middle
    //   Si el elemento es menor que el objetivo, actualiza el índice izquierdo
    if (element < target) {
      left = middle + 1
    } else {
      //   Si el elemento es mayor que el objetivo, actualiza el índice derecho
      rigth =  middle - 1
    }

  }
  // Si terminas el bucle sin encontrar el elemento, devuelve -1

  return -1;
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
  if( izq > der) return -1;
  // Calcula el índice medio
  const middle = Math.floor((izq + der) /2)
  const middleValue = arr[middle]
  // Si el elemento en el índice medio es el objetivo, devuelve el índice
  if (middleValue === target) return middle;
  // Si el elemento es menor que el objetivo, llama recursivamente con el subarray derecho
  if(middleValue < target ) return busquedaBinariaRecursiva(arr, target, middle + 1, der)
  // Si el elemento es mayor que el objetivo, llama recursivamente con el subarray izquierdo
  if(middleValue > target ) return busquedaBinariaRecursiva(arr, target, izq, middle - 1);
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

