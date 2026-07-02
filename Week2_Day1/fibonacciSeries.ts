const fibonacci = (n:number)=> {

    let n1 = 0;
    let n2 = 1;

    for (let i = 2; i <= n; i++) {
        let number = n1 + n2;
        n1 = n2;
        n2 = number;


    }

    return n2;

}
console.log(fibonacci(8));