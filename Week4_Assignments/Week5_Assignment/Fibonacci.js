var fibonacci = function (n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    var n1 = 0;
    var n2 = 1;
    for (var i = 2; i <= n; i++) {
        var next = n1 + n2;
        n1 = n2;
        n2 = next;
    }
    return n2;
};
console.log(fibonacci(8));
