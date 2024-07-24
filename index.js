//Random password generator

function generatePassword(lenght,includeLowercase,includeUppercase,includeNumbers,includeSymbols) {
   
    const lowercaseChars = "abcdefghijklmnoprstuvxwyqz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPRSTUVZZWQY";
    const numberChars = "0123456789";
    const symbolsChars = "!@#$%&()_+-=";

    let allowedChars = "";
    let password = "";
   
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolsChars : "";

   if (lenght <= 0 ) {
        return `(password lenght must be at least 1)`;
   } 

   if(allowedChars.length === 0){
        return `(At least 1 set of characters needs to be selected)`;
   }

   for(let i=0; i<lenght; i++){
       
    const randomIndex = Math.floor(Math.random() * allowedChars.length);

    password += allowedChars[randomIndex];
   }

    return  password;
}


const passwordLenght = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(
    passwordLenght,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols);

console.log(`Generated password: ${password}`);