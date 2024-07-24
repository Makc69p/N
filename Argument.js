function createAdder(firstNumber) {
    return function(secondNumber) {
        return firstNumber + secondNumber;
    };
}
