const fibonacci = (n: number): number => {

    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    let n1: number = 0;
    let n2: number = 1;

    for (let i = 2; i <= n; i++) {
        const next: number = n1 + n2;
        n1 = n2;
        n2 = next;
    }

    return n2;
};

console.log(fibonacci(8));