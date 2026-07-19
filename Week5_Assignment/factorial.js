var factorial = function (n) {
    if (n < 0) {
        console.log("Negative numbers are not valid", n);
        return 0;
    }
    else {
        var n1 = 1;
        for (var i = 1; i <= n; i++) {
            n1 = n1 * i;
        }
        return n1;
    }
};
console.log(("The factorial is:"), factorial(3));
