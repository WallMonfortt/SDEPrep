// Performance and Resource Measurement
export function measureResourceUsage(func, ...args) {
    // Memory usage measurement
    const startMemory = process.memoryUsage();

    // CPU usage tracking
    const startCPU = process.cpuUsage();

    // High-resolution time tracking
    const startTime = process.hrtime();

    // Execute the function
    const start = performance.now();
    const result = func(...args);
    const end = performance.now();

    // Measure final resources
    const endMemory = process.memoryUsage();
    const endCPU = process.cpuUsage();
    const endTime = process.hrtime(startTime);

    return {
        result,
        performance: {
            executionTime: end - start,
            hrTime: {
                seconds: endTime[0],
                nanoseconds: endTime[1]
            }
        },
        memory: {
            rss: {
                before: startMemory.rss,
                after: endMemory.rss,
                difference: endMemory.rss - startMemory.rss
            },
            heapUsed: {
                before: startMemory.heapUsed,
                after: endMemory.heapUsed,
                difference: endMemory.heapUsed - startMemory.heapUsed
            }
        },
        cpu: {
            user: endCPU.user - startCPU.user,
            system: endCPU.system - startCPU.system
        }
    };
}