function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = args.toString();
        if (cache.has(key)) {
            return cache.get(key);
        }
        cache.set(key, fn(...args))
        return cache.get(key);
    }
}

function multiply(a, b) {
    return a * b * b * b * b;
}

function getTime(fn) {
    console.time();
    console.log(fn());
    console.timeEnd();
}

const memoizeMultiply = memoize(multiply);
getTime(() => memoizeMultiply(1000000000008, 99999999999999));
getTime(() => memoizeMultiply(1000000000008, 99999999999999));


