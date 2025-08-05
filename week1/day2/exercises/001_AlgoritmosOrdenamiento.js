import { runTests } from "../../../utils/testRunner.js";

/**
 * Día 2: Algoritmos de Ordenamiento
 * 
 * En este ejercicio, implementaremos varios algoritmos de ordenamiento
 * y compararemos su rendimiento.
 * 
 * INSTRUCCIONES:
 * 1. Implementa los siguientes algoritmos de ordenamiento:
 *    - Bubble Sort
 *    - Selection Sort
 *    - Insertion Sort
 *    - Merge Sort
 *    - Quick Sort
 * 
 * 2. Cada función debe recibir un array y devolver una copia ordenada del mismo.
 * 
 * 3. Al final, implementa una función para medir el tiempo de ejecución
 *    de cada algoritmo con diferentes tamaños de entrada.
 */

/**
 * Implementa el algoritmo Bubble Sort.
 * Complejidad temporal: O(n²) en el peor caso, O(n) en el mejor caso.
 * Complejidad espacial: O(1)
 * 
 * @param {Array} arr - El array a ordenar
 * @return {Array} - Una copia ordenada del array
 */
function bubbleSort(arr) {
  // Tu código aquí
}

/**
 * Implementa el algoritmo Selection Sort.
 * Complejidad temporal: O(n²) en todos los casos.
 * Complejidad espacial: O(1)
 * 
 * @param {Array} arr - El array a ordenar
 * @return {Array} - Una copia ordenada del array
 */
function selectionSort(arr) {
  // Tu código aquí
}

/**
 * Implementa el algoritmo Insertion Sort.
 * Complejidad temporal: O(n²) en el peor caso, O(n) en el mejor caso.
 * Complejidad espacial: O(1)
 * 
 * @param {Array} arr - El array a ordenar
 * @return {Array} - Una copia ordenada del array
 */
function insertionSort(arr) {
  // Tu código aquí
}

/**
 * Implementa el algoritmo Merge Sort.
 * Complejidad temporal: O(n log n) en todos los casos.
 * Complejidad espacial: O(n)
 * 
 * @param {Array} arr - El array a ordenar
 * @return {Array} - Una copia ordenada del array
 */
function mergeSort(arr) {
  // Tu código aquí
}

// Función auxiliar para merge sort
function merge(left, right) {
  // Tu código aquí
}

/**
 * Implementa el algoritmo Quick Sort.
 * Complejidad temporal: O(n log n) en el caso promedio, O(n²) en el peor caso.
 * Complejidad espacial: O(log n)
 * 
 * @param {Array} arr - El array a ordenar
 * @return {Array} - Una copia ordenada del array
 */
function quickSort(arr) {
  // Crea una copia del array para no modificar el original
  const result = [...arr];

  // Tu código aquí para implementar quickSort

  return result;
}

// Función auxiliar para quick sort
function partition(arr, low, high) {
  // Tu código aquí
}

// Casos de prueba para los algoritmos de ordenamiento
const sortTestCases = [
  {
    input: [[5, 3, 8, 4, 2, 1, 9, 7, 6]],
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    input: [[1, 2, 3, 4, 5]],
    expected: [1, 2, 3, 4, 5]
  },
  {
    input: [[5, 4, 3, 2, 1]],
    expected: [1, 2, 3, 4, 5]
  },
  {
    input: [[1]],
    expected: [1]
  },
  {
    input: [[]],
    expected: []
  }
];

console.log("\n=== Pruebas de Bubble Sort ===");
runTests({
  testCases: sortTestCases,
  methods: [{ name: 'Bubble Sort', func: bubbleSort }],
  compareFunction: (result, expected) => JSON.stringify(result) === JSON.stringify(expected)
});

console.log("\n=== Pruebas de Selection Sort ===");
runTests({
  testCases: sortTestCases,
  methods: [{ name: 'Selection Sort', func: selectionSort }],
  compareFunction: (result, expected) => JSON.stringify(result) === JSON.stringify(expected)
});

console.log("\n=== Pruebas de Insertion Sort ===");
runTests({
  testCases: sortTestCases,
  methods: [{ name: 'Insertion Sort', func: insertionSort }],
  compareFunction: (result, expected) => JSON.stringify(result) === JSON.stringify(expected)
});

console.log("\n=== Pruebas de Merge Sort ===");
runTests({
  testCases: sortTestCases,
  methods: [{ name: 'Merge Sort', func: mergeSort }],
  compareFunction: (result, expected) => JSON.stringify(result) === JSON.stringify(expected)
});

console.log("\n=== Pruebas de Quick Sort ===");
runTests({
  testCases: sortTestCases,
  methods: [{ name: 'Quick Sort', func: quickSort }],
  compareFunction: (result, expected) => JSON.stringify(result) === JSON.stringify(expected)
});