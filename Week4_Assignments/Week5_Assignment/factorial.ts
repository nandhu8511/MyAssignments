const factorial = (n: number): number => {

    if (n < 0) 
    {
       console.log("Negative numbers are not valid",n);
       return 0;      
    }
    else
    {
    let n1: number = 1;
    
    for (let i = 1; i <= n; i++) 
    {
        n1 = n1 * i;
      
    }    
    return n1;
}
};

console.log(("The factorial is:"),factorial(3));