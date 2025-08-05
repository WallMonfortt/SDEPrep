import { runTests } from "../../../utils/testRunner.js";

/**
 * Ejercicio 2: Encontrar elementos duplicados en un array
 * 
 * En este ejercicio implementaremos diferentes métodos para encontrar
 * elementos duplicados en un array.
 */

/**
 * Método 1: Usando un objeto como contador
 * @param {Array} arr - Array donde buscar duplicados
 * @return {Array} - Array con los elementos duplicados
 * 
 * Complejidad Temporal: O(n)
 * Complejidad Espacial: O(n)
 */
function encontrarDuplicadosConObjeto(arr) {
  // Crea un objeto para contar ocurrencias
  const counter = new Map();
  // Recorre el array y cuenta cada elemento
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (counter.has(element)) {
      const currentValue = counter.get(element);
      counter.set(element, currentValue + 1);
    } else {
      counter.set(element, 1);
    }

  }
  // Filtra los elementos que aparecen más de una vez
  const iterator = counter.entries();
  const duplicates = [];

  for (const element of iterator) {
    if (element[1] > 1) {
      const multiplier = element[1]
      for (let j = 0; j < multiplier; j++) {
        duplicates.push(element[0]);
      }
    }
  }

  return duplicates;
}

/**
 * Método 2: Usando Set para encontrar duplicados
 * @param {Array} arr - Array donde buscar duplicados
 * @return {Array} - Array con los elementos duplicados
 * 
 * Complejidad Temporal: O(n)
 * Complejidad Espacial: O(n)
 */
function encontrarDuplicadosConSet(arr) {
  // Crea un Set para almacenar elementos vistos
  let seen = new Set();
  // Crea un Array vacio para almacenar duplicados
  let duplicates = [];
  // Recorre el array y verifica si cada elemento ya ha sido visto

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (seen.has(element)) {
      duplicates.push(element);
    }
    seen.add(element);
  }

  return duplicates;
}

/**
 * Método 3: Usando filter y indexOf
 * @param {Array} arr - Array donde buscar duplicados
 * @return {Array} - Array con los elementos duplicados
 * 
 * Complejidad Temporal: O(n²) - Debido a indexOf
 * Complejidad Espacial: O(n)
 */
function encontrarDuplicadosConFilter(arr) {
  // Usa filter para encontrar elementos cuyo primer índice no coincide con su índice actual
  const duplicates = arr.filter((element, index) => arr.indexOf(element) !== index)
  // Elimina duplicados del resultado usando Set o filter
  const uniqueDuplicates = [...new Set(duplicates)]
  return uniqueDuplicates;
}

/**
 * Método 4: Para arrays de enteros en un rango específico (1 a n)
 * Técnica de marcado de índices (modificando el array original)
 * @param {Array} arr - Array de enteros positivos
 * @return {Array} - Array con los elementos duplicados
 * 
 * Complejidad Temporal: O(n)
 * Complejidad Espacial: O(1) - No usa memoria adicional excepto para el resultado
 * NOTA: Este método modifica el array original
 */
function encontrarDuplicadosConMarcado(arr) { //Nota: esta solución solo funciona para arrays de enteros positivos
  // Para cada número en el array, marca su posición correspondiente como negativa
  // Si ya está marcado como negativo, es un duplicado
  // Restaura el array a su estado original y devuelve los duplicados
  const duplicates = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (arr[Math.abs(element) - 1] < 0) {
      duplicates.push(Math.abs(element));
    } else {
      arr[Math.abs(element) - 1] *= -1;
    }
  }
  return duplicates;
}

// Casos de prueba
const arrays = [
  [1, 2, 3, 4, 5],              // Sin duplicados
  [1, 2, 3, 3, 4, 5],           // Un duplicado
  [1, 2, 2, 3, 3, 4, 5, 5],     // Varios duplicados
  ["a", "b", "c", "a", "d", "b"] // Duplicados de strings
];

console.log("=== Pruebas con Objeto ===");
const objectTestCases = [
  { input: [arrays[0]], expected: [] },
  { input: [arrays[1]], expected: [3, 3] },
  { input: [arrays[2]], expected: [2, 2, 3, 3, 5, 5] },
  { input: [arrays[3]], expected: ["a", "a", "b", "b"] },
]

const methods = [{ name: 'Objeto', func: encontrarDuplicadosConObjeto }]
runTests({
  testCases: objectTestCases,
  methods,
  expected: objectTestCases.map(testCase => testCase.expected)
})

console.log("\n=== Pruebas con Set ===");
const setTestCases = [
  { input: [arrays[0]], expected: [] },
  { input: [arrays[1]], expected: [3] },
  { input: [arrays[2]], expected: [2, 3, 5] },
  { input: [arrays[3]], expected: ["a", "b"] },
]
const methodsSet = [{ name: 'Set', func: encontrarDuplicadosConSet }]
runTests({
  testCases: setTestCases,
  methods: methodsSet,
  expected: setTestCases.map(testCase => testCase.expected)
})

console.log("\n=== Pruebas con Filter ===");
const filterTestCases = [
  { input: [arrays[0]], expected: [] },
  { input: [arrays[1]], expected: [3] },
  { input: [arrays[2]], expected: [2, 3, 5] },
]
const methodsFilter = [{ name: 'Filter', func: encontrarDuplicadosConFilter }]
runTests({
  testCases: filterTestCases,
  methods: methodsFilter,
  expected: filterTestCases.map(testCase => testCase.expected)
})

console.log("\n=== Pruebas con Marcado ===");
const marcadoTestCases = [
  { input: [arrays[0]], expected: [] },
  { input: [arrays[1]], expected: [3] },
  { input: [arrays[2]], expected: [2, 3, 5] },
]
const methodsMarcado = [{ name: 'Marcado', func: encontrarDuplicadosConMarcado }]
runTests({
  testCases: marcadoTestCases,
  methods: methodsMarcado,
  expected: marcadoTestCases.map(testCase => testCase.expected)
})


