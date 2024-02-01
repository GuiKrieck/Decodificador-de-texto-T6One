const regex = /^[a-z\s]+$/; //regex to verify the usage of anything aside from a-z characters

//getting html elements.
let userText = document.getElementById('text-to-treat');
let divToHide = document.getElementById('div-to-hide');
let divToShow = document.getElementById('div-to-show');
let finalTextArea = document.getElementById('final-text-output');
let switchTheme = document.getElementById('switch-theme');
let lightTheme = true;
console.log(switchTheme);


// decrypted text and encrypted text work together, ex. e when encrypted becomes enter, vice versa, that is why they have the same index. 
//so if you want to add a new letter to it, add the letter on decrypted and the result on encrypted (it's important that these arrays have the same length)
let decryptedText = ['e','i','a','o','u'];
let encryptedText = ['enter','imes','ai','ober','ufat'];


//get the text from document
function acquireText(callButton){
    let textToTreat = userText.value;
    let finalText;
    
    //verify if the text is valid
    if (verifyText(textToTreat)){
        if(callButton === 'encrypt'){ //treat the text
            finalText = treatText(textToTreat, decryptedText, encryptedText);
        } else{
            finalText = treatText(textToTreat, encryptedText, decryptedText);
        }
        showTextOnScreen(finalText); //show the text on screen
    }

}

function treatText(text, baseArray, keyArray){
    let finalText = text;

    for(i = 0; i < baseArray.length; i++){
        finalText = finalText.replaceAll(baseArray[i],keyArray[i]);   
    }
    return finalText
}

function verifyText(text){
    
    if(text === ""){
        alert('Por favor, digite um texto');
        return false;
    } else if(!regex.test(text)){
        alert('Digite apenas letras minúsculas, sem acentos ou caracteres especiais')
        return false;
    } else{
        return true
    }
}

function showTextOnScreen(text){
    divToHide.className = 'hide';
    divToShow.removeAttribute('style');
    finalTextArea.innerText = text;
}

function copyButton(){
    let copyText = finalTextArea.value;
    navigator.clipboard.writeText(copyText);
    userText.focus();
    userText.select();
}

function changeTheme(){
    if(lightTheme){
        switchTheme.href = "./assets/styles/darkstyle.css";
        lightTheme = false;
    } else {
        switchTheme.href = "./assets/styles/style.css";
        lightTheme = true;
    }
}