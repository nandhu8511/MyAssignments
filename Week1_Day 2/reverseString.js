function reverseString(input) {

   
    
    const chars = input.split('');

    let reverse = '';

   
    for (let i = chars.length - 1; i >= 0; i--) {
        
        reverse = reverse + chars[i];
    }

     console.log("Reversed String:", reverse);

    return reverse;
}

function isPalindrome(input) {
    
    const reverse = reverseString(input);
    
    if (input === reverse) {
        return true;
    } else {
        return false;
    }
}

 const input = "nanthini";
 console.log("Is Palindrome:", isPalindrome(input)); 