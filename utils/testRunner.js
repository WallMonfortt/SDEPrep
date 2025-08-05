import { measureResourceUsage } from "./trackers.js";

function deepEqual(a, b) {
    if (a === b) return true;
    if (typeof a !== typeof b) return false;
    if (typeof a !== 'object' || a === null || b === null) return false;
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    for (let key of keysA) {
        if (!keysB.includes(key)) return false;
        if (!deepEqual(a[key], b[key])) return false;
    }
    return true;
}

export function runTests({
    testCases,
    methods,
    compareFunction = (result, expected) => {
        if (typeof result === 'object' && result.hasOwnProperty('result')) {
            result = result.result;
        }
        if (Array.isArray(result) && Array.isArray(expected)) {
            return JSON.stringify(result) === JSON.stringify(expected);
        }
        return result === expected;
    },
    useDeepEqual = false
}) {
    let summary = {};
    methods.forEach(method => {
        summary[method.name] = { passed: 0, failed: 0, memory: 0, time: 0, total: 0 };
    });

    testCases.forEach((testCase, index) => {
        console.log(`\n${"=".repeat(40)}\nTest Case #${index + 1}\nInput: ${JSON.stringify(testCase.input)}\nExpected: ${JSON.stringify(testCase.expected)}\n${"-".repeat(40)}`);
        methods.forEach(method => {
            const result = measureResourceUsage(() =>
                method.func(...testCase.input)
            );
            let passed;
            if (useDeepEqual) {
                passed = deepEqual(result.result, testCase.expected);
            } else {
                passed = compareFunction(result.result, testCase.expected);
            }
            summary[method.name][passed ? "passed" : "failed"] += 1;
            summary[method.name].memory += result.memory.heapUsed.difference / 1024;
            summary[method.name].time += result.performance.executionTime;
            summary[method.name].total += 1;

            const status = passed ? `✅ ${coloredText('PASSED')}` : `❌ ${coloredText('FAILED')}`;
            console.log(`\n[${coloredText(method.name)}] ${status}`);
            console.log(`Result:   ${JSON.stringify(result.result)}`);
            console.log(`Time:     ${result.performance.executionTime.toFixed(4)} ms`);
            console.log(`Memory:   ${(result.memory.heapUsed.difference / 1024).toFixed(2)} KB`);
            console.log(`CPU sys:  ${result.cpu.system} ms`);
        });
        console.log("=".repeat(40));
    });

    // Print summary
    console.log(`\n${coloredText('RESUMEN DE RESULTADOS')}\n`);
    Object.entries(summary).forEach(([method, { passed, failed, memory, time, total }]) => {
        const avgMem = total ? (memory / total).toFixed(2) : "N/A";
        const avgTime = total ? (time / total).toFixed(2) : "N/A";
        console.log(`[${method}] -> ${passed} ${coloredText('PASSED')}, ${failed} ${coloredText('FAILED')} | Average memory: ${avgMem} KB | Average time: ${avgTime} ms`);
    });
}

function coloredText(text) {
    const colors = {
        red: '\x1b[31m',
        green: '\x1b[32m',
        magenta: '\x1b[35m',
        reset: '\x1b[0m'
    };

    if (text === 'PASSED') {
        return colors.green + text + colors.reset;
    } else if (text === 'FAILED') {
        return colors.red + text + colors.reset;
    } else {
        return colors.magenta + text + colors.reset;
    }
}