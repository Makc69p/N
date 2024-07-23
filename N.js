const power = (x, n) => {
    if (n < 0) {
        throw new Error("n должно быть натуральным числом");
    }
    return n === 0 ? 1 : x * power(x, n - 1);
};