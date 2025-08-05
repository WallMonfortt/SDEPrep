import { runTests } from "../../../utils/testRunner.js";

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
  // Usa el operador spread (...) con Math.max y Math.min
  if(arr.length === 0) return {max: null, min: null};
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  // Retorna un objeto con las propiedades max y min
  return {max, min}
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
  // Inicializa max y min con el primer elemento del array
  if(arr.length === 0) return {max: null, min: null};
  let max = arr[0], min = arr[0];
  // Recorre el array y actualiza max y min según corresponda
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(element < min ) min = element;
    if(element > max ) max = element;
  }
  // Retorna un objeto con las propiedades max y min
  return {max, min}
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
  if(arr.length === 0) return {max: null, min: null};
  // Usa reduce para acumular tanto el máximo como el mínimo en un solo recorrido
  let min = arr[0], max = arr[0];
  // Inicializa el acumulador con el primer elemento como max y min
  arr.reduce((_, element) => {
    if(element < min) min = element;
    if(element > max) max = element;
  })
  // Retorna un objeto con las propiedades max y min
  return {max, min}
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
  // Filtra el array para quedarte solo con los números
  const filteredArr = arr.filter((val) => typeof val === 'number')

  if (filteredArr.length === 0 ) return {max: null, min: null}
  // Si no hay números válidos, retorna null o un valor por defecto

  let min = filteredArr[0], max = filteredArr[0];
  // Usa cualquiera de los métodos anteriores para encontrar max y min
  min = Math.min(...filteredArr)
  max = Math.max(...filteredArr)

  return {max, min}
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
    input: [[1, 2, 3, 3, 5, 6]],
    expected: { max: 6, min: 1 }
  }
];

console.log("=== Pruebas con Math.max/min ===");
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
