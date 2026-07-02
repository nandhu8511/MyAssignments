/*//Function declaration
function userProfile(name)

{
  console.log("hello",name);
  return name;
}

userProfile("nanthini")

//Arrow Function

const double = (a) => {
    return a*a;
};

console.log(double(10));

// Anonymous Function 

setTimeout(function () 
{
    console.log("This message is delayed by 2 seconds");
}
, 2000);*/

//call back function
function getUserData(x)
{
	setTimeout(function ()  { x(); }, 3000);
}

function setTime()
{
	console.log ("Call Back Function",);
}


getUserData(setTime);