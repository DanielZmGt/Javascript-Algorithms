const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";       

function generatePassword(length) {
    let result = "";

    for (let i = 0; i < length; i++) {

       const randomIndex = Math.floor(Math.random() * charset.length);
                result += charset[randomIndex];
    }

    return result;
}

const password = generatePassword(12);

console.log("Generated password: " + password);