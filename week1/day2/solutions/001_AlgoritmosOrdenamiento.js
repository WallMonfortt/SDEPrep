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
  let swapped;

  do {
    swapped = false
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      const next = arr[index + 1]

      if (element > next) {
        [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
        swapped = true
      }

    }

  } while (swapped);

  return arr
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
  for (let index = 0; index < arr.length; index++) {
    const el = arr[index]
    let min = index;

    for (let j = index + 1; j < arr.length; j++) {
      const element = arr[j];
      if (element < arr[min]) {
        min = j
      }
    }

    if (min !== el) {
      [arr[index], arr[min]] = [arr[min], arr[index]]
    }
  }

  return arr
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

  for (let index = 1; index < arr.length; index++) {
    const key = arr[index];
    let j;
    for (j = index - 1; (j >= 0) && arr[j] > key; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = key

  }

  return arr
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
  // Paso 1: Crear una copia del array para no modificar el original
  const result = [...arr];
  
  // Paso 2: Caso base - un array con 0 o 1 elementos ya está ordenado
  if (result.length <= 1) {
    return result;
  }
  
  // Paso 3: Dividir el array en dos mitades (divide)
  const middle = Math.floor(result.length / 2);
  const leftHalf = result.slice(0, middle);  // Primera mitad del array
  const rightHalf = result.slice(middle);    // Segunda mitad del array
  
  // Paso 4: Ordenar recursivamente cada mitad (y conquer)
  // - Llamamos a mergeSort en cada mitad para ordenarlas
  // - Luego combinamos las mitades ordenadas con la función merge
  return merge(
    mergeSort(leftHalf),  // Ordenar mitad izquierda recursivamente
    mergeSort(rightHalf)   // Ordenar mitad derecha recursivamente
  );
}

/**
 * Función auxiliar para merge sort que combina dos arrays ordenados.
 * 
 * @param {Array} left - Primer array ordenado
 * @param {Array} right - Segundo array ordenado
 * @return {Array} - Array combinado y ordenado
 */
function merge(left, right) {
  // Paso 1: Crear un array resultado para almacenar los elementos ordenados
  let result = [];
  
  // Paso 2: Inicializar índices para recorrer ambos arrays
  let leftIndex = 0;   // Índice para el array izquierdo
  let rightIndex = 0;  // Índice para el array derecho
  
  // Paso 3: Comparar elementos de ambos arrays y añadir el menor al resultado
  // Continuamos mientras tengamos elementos en ambos arrays
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      // Si el elemento de la izquierda es menor, lo añadimos al resultado
      result.push(left[leftIndex]);
      leftIndex++; // Avanzamos al siguiente elemento del array izquierdo
    } else {
      // Si el elemento de la derecha es menor o igual, lo añadimos al resultado
      result.push(right[rightIndex]);
      rightIndex++; // Avanzamos al siguiente elemento del array derecho
    }
  }
  
  // Paso 4: Añadir los elementos restantes (si quedan)
  // Si quedan elementos en el array izquierdo, los añadimos todos
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }
  
  // Si quedan elementos en el array derecho, los añadimos todos
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }
  
  // Paso 5: Devolver el array combinado y ordenado
  return result;
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
  // Paso 1: Crear una copia del array para no modificar el original
  const result = [...arr];

  // Paso 2: Llamar a la función auxiliar recursiva
  quickSortHelper(result, 0, result.length - 1);
  
  // Paso 3: Devolver el array ordenado
  return result;
}

/**
 * Función auxiliar recursiva para QuickSort
 * 
 * @param {Array} arr - El array a ordenar
 * @param {number} low - Índice inferior del subarray actual
 * @param {number} high - Índice superior del subarray actual
 */
function quickSortHelper(arr, low, high) {
  // Caso base: si el índice inferior es mayor o igual al superior,
  // significa que el subarray tiene 0 o 1 elementos (ya está ordenado)
  if (low < high) {
    // Paso 1: Obtener el índice de partición (posición final del pivote)
    const pivotIndex = partition(arr, low, high);
    
    // Paso 2: Ordenar recursivamente la parte izquierda (elementos menores que el pivote)
    quickSortHelper(arr, low, pivotIndex - 1);
    
    // Paso 3: Ordenar recursivamente la parte derecha (elementos mayores que el pivote)
    quickSortHelper(arr, pivotIndex + 1, high);
  }
}

/**
 * Función auxiliar para particionar el array alrededor de un pivote.
 * Reorganiza el array de manera que los elementos menores que el pivote
 * estén a la izquierda y los mayores a la derecha.
 * 
 * @param {Array} arr - El array a particionar
 * @param {number} low - Índice inferior del subarray
 * @param {number} high - Índice superior del subarray
 * @return {number} - Índice final del pivote después de la partición
 */
function partition(arr, low, high) {
  // Paso 1: Elegir el pivote (en este caso, el último elemento)
  const pivot = arr[high];
  
  // Paso 2: Inicializar el índice del elemento más pequeño
  // Este índice indica dónde colocaremos el pivote al final
  let i = low - 1;
  
  // Paso 3: Recorrer todos los elementos excepto el pivote
  for (let j = low; j < high; j++) {
    // Si el elemento actual es menor o igual que el pivote
    if (arr[j] <= pivot) {
      // Incrementar el índice del elemento más pequeño
      i++;
      
      // Intercambiar el elemento actual con el elemento en la posición i
      // Esto mueve los elementos menores que el pivote a la izquierda
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  // Paso 4: Colocar el pivote en su posición final
  //los elementos a la izquierda son menores y a la derecha mayores
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  
  // Paso 5: Devolver la posición final del pivote
  return i + 1;
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