function updateText(){
    document.getElementById("heading").innerHTML = "Kiantae's Words To Live By";
}
function checkForPalindrome()
{
    // Do the palindrome check
    
    let inputField = document.getElementById("palindromeField");

    let results = document.getElementById("palindromeResults");

    //let inputValue = inputField.getAttribute("value");
    
    // Get the value property of the element
    let inputValue = inputField.value;

    let stringLength = inputValue.length;

    if (stringLength > 0)
    {
        let iterationCount = Math.floor(stringLength/2);

        let lastCharacterIndex = inputValue.length - 1;

        let palindromeCheckResult = true;

        //Allowed to continue our palindrome check
        for(let i=0; i < iterationCount; i++)
        {
            if (inputValue[i] != inputValue[lastCharacterIndex-i])
            {
                results.innerHTML = "Not a Palindrome!!";
                palindromeCheckResult = false;
                break;
            }
        }    
        if (palindromeCheckResult)
        {
            results.innerHTML = "This is a palindrome!!";

        }
    }   
}

function userInfoValidation()
{
    // Do the user info validation

    console.log("Checking user info");

    let firstNameField = document.getElementById("firstNameField");

    let lastNameField = document.getElementById("lastNameField");

    let zipCodeField = document.getElementById("zipField");

    let results = document.getElementById("userInfoResults");

    let firstNameValue = firstNameField.value;

    let lastNameValue = lastNameField.value;

    let zipValue = zipField.value;

    //concatenation
    let firstLastName = firstNameValue + " " + lastNameValue;

    console.log(firstLastName);

    if (firstLastName.length > 20)
    {
        results.innerHTML = "Chillax, only 20 characters!!";

        return;
    }

    let zipRegex = /^\d{5}$/

    if (!zipRegex.test(zipValue))
    {
        results.innerHTML = "Incorrect format! 5 digits mate!!";

        return;
    }

    results.innerHTML = "You've made it!!";

    console.log("Input Validated");
}