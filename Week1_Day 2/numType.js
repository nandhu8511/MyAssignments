function numType()
{
     const input = -1   

    if (input > 0) {
        
        let result = "The number " + input +" is positive";
        console.log (result)
        
    } 
    else if (input < 0)
    {

        let result = "The number " + input + " is negative"
        console.log (result)
        
    }

    else
    {
        let result = "The number is " + input + " equal to zero"
        console.log (result)
    }

    
}

numType();
