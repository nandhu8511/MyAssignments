const nums = [12,45,8,67,23,90,34];
let num1 = 13;

for (let i = 0; i < nums.length ; i++)
{
    if (nums[i] > num1)
    {
        num1 = nums[i];
        
    }
}

console.log(num1);
