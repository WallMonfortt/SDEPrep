import { runTests } from '../../../../utils/testRunner.js'

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
  // TODO: Implementa la búsqueda de duplicados usando un objeto
  // Crea un objeto para contar ocurrencias
  // Recorre el array y cuenta cada elemento
  // Filtra los elementos que aparecen más de una vez
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
  // TODO: Implementa la búsqueda de duplicados usando Set
  // Crea un Set para almacenar elementos vistos
  // Crea un Array vacio para almacenar duplicados
  // Recorre el array y verifica si cada elemento ya ha sido visto
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
  // TODO: Implementa la búsqueda de duplicados usando filter e indexOf
  // Usa filter para encontrar elementos cuyo primer índice no coincide con su índice actual
  // Elimina duplicados del resultado usando Set o filter
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
  // TODO: Implementa la búsqueda de duplicados usando la técnica de marcado
  // Para cada número en el array, marca su posición correspondiente como negativa
  // Si ya está marcado como negativo, es un duplicado
  // Restaura el array a su estado original y devuelve los duplicados
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
});