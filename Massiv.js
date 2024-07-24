function countEvenOdd(arr) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;

    arr.forEach(element => {
        // Проверяем, является ли элемент числом
        if (typeof element === 'number') {
            if (element === 0) {
                zeroCount++;
            } else if (element % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
    });

    console.log(`Чётные: ${evenCount}`);
    console.log(`Нечётные: ${oddCount}`);
    console.log(`Нули: ${zeroCount}`);
}