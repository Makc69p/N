function isPrime(num) {
    // Проверяем, что число не больше 1000
    if (num > 1000) {
        console.log("Данные неверны. Введите число не больше 1000.");
        return;
    }

    // Проверяем числа 0 и 1
    if (num <= 1) {
        console.log(num + " не является простым числом.");
        return;
    }

    // Проверяем, является ли число простым
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(num + " не является простым числом.");
            return;
        }
    }

    console.log(num + " является простым числом.");
}