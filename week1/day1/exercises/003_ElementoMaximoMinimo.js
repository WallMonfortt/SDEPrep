import { runTests } from "../../../../utils/testRunner.js";

/**
 * Ejercicio 3: Buscar el elemento máximo/mínimo con diferentes técnicas
 * 
 * En este ejercicio implementaremos diferentes métodos para encontrar
 * el valor máximo y mínimo en un array.
 */

/**
 * Método 1: Usando Math.max y Math.min con spread operator
 * @param {Array} arr - Array de números
 * @return {Object} - Objeto con el máximo y mínimo
 * 
 * Complejidad Temporal: O(n)
 * Complejidad Espacial: O(1)
 */
function encontrarMaxMinConMath(arr) {
  // TODO: Implementa la búsqueda de máximo y mínimo usando Math.max/min
  // Usa el operador spread (...) con Math.max y Math.min
  // Retorna un objeto con las propiedades max y min
  return {}
}

/**
 * Método 2: Usando un bucle for tradicional
 * @param {Array} arr - Array de números
 * @return {Object} - Objeto con el máximo y mínimo
 * 
 * Complejidad Temporal: O(n)
 * Complejidad Espacial: O(1)
 */
function encontrarMaxMinConBucle(arr) {
  // TODO: Implementa la búsqueda de máximo y mínimo usando un bucle
  // Inicializa max y min con el primer elemento del array
  // Recorre el array y actualiza max y min según corresponda
  // Retorna un objeto con las propiedades max y min
}

/**
 * Método 3: Usando reduce
 * @param {Array} arr - Array de números
 * @return {Object} - Objeto con el máximo y mínimo
 * 
 * Complejidad Temporal: O(n)
 * Complejidad Espacial: O(1)
 */
function encontrarMaxMinConReduce(arr) {
  // TODO: Implementa la búsqueda de máximo y mínimo usando reduce
  // Usa reduce para acumular tanto el máximo como el mínimo en un solo recorrido
  // Inicializa el acumulador con el primer elemento como max y min
  // Retorna un objeto con las propiedades max y min
}

/**
 * Método 4: Versión robusta que maneja arrays con valores no numéricos
 * @param {Array} arr - Array que puede contener valores no numéricos
 * @return {Object} - Objeto con el máximo y mínimo
 * 
 * Complejidad Temporal: O(n)
 * Complejidad Espacial: O(1)
 */
function encontrarMaxMinRobusto(arr) {
  // TODO: Implementa una versión robusta que filtre valores no numéricos
  // Filtra el array para quedarte solo con los números
  // Si no hay números válidos, retorna null o un valor por defecto
  // Usa cualquiera de los métodos anteriores para encontrar max y min
}

// Casos de prueba

const testCases = [
  {
    input: [[1, 2, 3, 4, 5]],
    expected: { max: 5, min: 1 }
  },
  {
    input: [[5, 3, 9, 1, 7]],
    expected: { max: 9, min: 1 }
  },
  {
    input: [[-10, -5, 0, 5, 10]],
    expected: { max: 10, min: -10 }
  },
  {
    input: [[100]],
    expected: { max: 100, min: 100 }
  },
  {
    input: [[]],
    expected: { max: null, min: null }
  },
  {
    input: [[1, 'dos', 3, null, 5, 'seis']],
    expected: { max: 5, min: 1 }
  }
];

cconsole.log("=== Pruebas con Math.max/min ===");
const mathMethods = [{ name: 'Math.max/min', func: encontrarMaxMinConMath }]
runTests({
  testCases,
  methods: mathMethods,
  compareFunction: (result, expected) => result.max === expected.max && result.min === expected.min
})

console.log("=== Pruebas con bucle for ===");
const bucleMethods = [{ name: 'Bucle for', func: encontrarMaxMinConBucle }]
runTests({
  testCases,
  methods: bucleMethods,
  compareFunction: (result, expected) => result.max === expected.max && result.min === expected.min
})

console.log("=== Pruebas con reduce ===");
const reduceMethods = [{ name: 'Reduce', func: encontrarMaxMinConReduce }]
runTests({
  testCases,
  methods: reduceMethods,
  compareFunction: (result, expected) => result.max === expected.max && result.min === expected.min
})

console.log("=== Pruebas con versión robusta ===");
const robustMethods = [{ name: 'Robusto', func: encontrarMaxMinRobusto }]
runTests({
  testCases,
  methods: robustMethods,
  compareFunction: (result, expected) => result.max === expected.max && result.min === expected.min
})
