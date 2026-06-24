function launchBrowser()
{

    const browserName ="Safari";

    if (browserName === "Chrome")
    {
        console.log("Lanuch " + browserName);
    }

    else
    {
        console.log("Launch " + browserName );
    }

}

launchBrowser()

function runTests()
{

const testType = "end"

switch (testType) {
    case "smoke":
        console.log( testType+ " type testing is in progress")
        break;

    case "sanity":
        console.log( testType+ " type testing is in progress")
        break;

    case "regression":
        console.log( testType+ " type testing is in progress")
        break;

    default:
        console.log( testType+ " is in progress")
}

}

runTests()