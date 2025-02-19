function isPalindrome(string) {
    for (let i = 0; i < string.length / 2; i++)
    {
        if (string[i] != string[string.length - 1 - i]) return false;
    }
    return true;
}

function answer () {
    let string = document.getElementById("text-input").value;

    if (string.length == 0) 
    {
        alert("Please input a value");
        return;
    }
    let resultDiv = document.getElementById("result");
    resultDiv.replaceChildren();
    let cleanString = "";
    let originalString = string;
    string = string.toLowerCase();
    for (let c of string) {
        if (c >= "a" && c <= "z") cleanString += c;
        if (c >= "0" && c <= "9") cleanString += c;
    }
    let message;
    if (isPalindrome(cleanString)) {
        message = `${originalString} is a Palindrome`;
    } else {
        message = `${originalString} is not a Palindrome`;
    }
    let result = document.createElement("p");
    result.innerText = message;
    resultDiv.append(result);

    resultDiv.classList.remove("hidden");
}

let button = document.getElementById("check-btn");
button.onclick = answer;
