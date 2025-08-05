import { runTests } from "../../../utils/testRunner.js";

/**
 * Día 2: Problemas Avanzados de Ordenamiento
 * 
 * En este ejercicio, implementaremos soluciones a problemas más complejos
 * relacionados con ordenamiento y manipulación de arrays.
 */

/**
 * Problema 1: Amazon Warehouse Package Sorting Operations
 * 
 * Un almacén de Amazon recibe paquetes con identificadores únicos del 1 al n.
 * El manager debe ordenar los paquetes siguiendo un proceso específico:
 * - Revisa paquetes de izquierda a derecha
 * - Si encuentra el siguiente número en secuencia (sortedCount + 1), lo "ordena" e incrementa sortedCount
 * - Si no es el siguiente, lo "overlooks" (ignora)
 * - Una operación = revisar todos los paquetes una vez
 * 
 * Objetivo: Determinar el número mínimo de operaciones para ordenar todos los paquetes.
 * 
 * Ejemplo:
 * Input: [3,1,4,2,5]
 * Output: 2
 * - Operación 1: Encuentra 1, luego 2 (sortedCount = 2)
 * - Operación 2: Encuentra 3, luego 4, luego 5 (sortedCount = 5)
 * 
 * @param {number[]} packages - Array de identificadores de paquetes
 * @return {number} - Número mínimo de operaciones para ordenar todos los paquetes
 */

// Implementación básica O(n²) - Simulación directa del proceso
function minOperationsBasic(packages) {
  // Tu código aquí
}

// Implementación optimizada O(n) - Usando el insight clave
function minOperationsOptimized(packages) {
  // Tu código aquí
}

/**
 * Problema 2: Almost Sorted
 * 
 * Determinar si un array puede ordenarse con exactamente una operación:
 * - SWAP: Intercambiar 2 elementos
 * - REVERSE: Invertir un subarreglo contiguo
 * - Ya ordenado: No necesita operaciones
 * 
 * Ejemplo:
 * Input: [1,2,3,4,5]
 * Output: "yes" (ya está ordenado)
 * 
 * Input: [1,5,3,4,2]
 * Output: "yes swap 2 5" (intercambiar elementos en posiciones 2 y 5)
 * 
 * Input: [1,5,4,3,2,6]
 * Output: "yes reverse 2 5" (invertir subarreglo desde posición 2 hasta 5)
 * 
 * Input: [3,1,2]
 * Output: "no" (imposible ordenar con una sola operación)
 * 
 * Nota: Las posiciones se indican en base 1 (no en base 0)
 * 
 * @param {number[]} arr - Array a analizar
 * @return {string} - Resultado del análisis
 */
function almostSorted(arr) {
  // Tu código aquí
}

// Función auxiliar para verificar si un swap ordenaría el array
function checkSwap(arr, sorted, diffPositions) {
  // Tu código aquí
}

// Función auxiliar para verificar si un reverse ordenaría el array
function checkReverse(arr, sorted, diffPositions) {
  // Tu código aquí
}

// Casos de prueba para cada función

// Problema 1: Amazon Warehouse Package Sorting
const warehouseTests = [
  {
    input: [[3, 1, 4, 2, 5]],
    expected: 2
  },
  {
    input: [[1, 2, 3, 4, 5]],
    expected: 1
  },
  {
    input: [[5, 4, 3, 2, 1]],
    expected: 5
  }
];

// Problema 2: Almost Sorted
const almostSortedTests = [
  {
    input: [[1, 2, 3, 4, 5]],
    expected: "yes"
  },
  {
    input: [[1, 5, 3, 4, 2]],
    expected: "yes swap 2 5"
  },
  {
    input: [[1, 5, 4, 3, 2, 6]],
    expected: "yes reverse 2 5"
  },
  {
    input: [[3, 1, 2]],
    expected: "no"
  }
];

console.log("\n=== Pruebas de Amazon Warehouse Package Sorting (Básico) ===");
runTests({
  testCases: warehouseTests,
  methods: [{ name: 'Min Operations Basic', func: minOperationsBasic }],
  compareFunction: (result, expected) => result === expected
});

console.log("\n=== Pruebas de Amazon Warehouse Package Sorting (Optimizado) ===");
runTests({
  testCases: warehouseTests,
  methods: [{ name: 'Min Operations Optimized', func: minOperationsOptimized }],
  compareFunction: (result, expected) => result === expected
});

console.log("\n=== Pruebas de Almost Sorted ===");
runTests({
  testCases: almostSortedTests,
  methods: [{ name: 'Almost Sorted', func: almostSorted }],
  compareFunction: (result, expected) => result === expected
});
