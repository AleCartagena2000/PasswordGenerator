const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
"@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",",
"|",":",";","<",">",".","?","/"];
let passwordButton = document.getElementById("pass-btn")
let password1 = document.getElementById("pass1-container")
let password2 = document.getElementById("pass2-container")


function generatePasswords() {
    generatePassword1()
    generatePassword2()
}

function generatePassword1() {
    password1.textContent = ""
    for (let i = 0; i < 15; i++) {
        password1.textContent += randomCharacter();
    }
}

function generatePassword2() {
    password2.textContent = ""
    for (let i = 0; i < 15; i++) {
        password2.textContent += randomCharacter();
    }
}

function randomCharacter() {
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

function copy1() {
    navigator.clipboard.writeText(password1.textContent);
}

function copy2() {
    navigator.clipboard.writeText(password2.textContent);
}
