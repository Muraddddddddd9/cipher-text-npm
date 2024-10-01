function createRandomText(arrChar, arrNumber, arrSpecialChar = "", size) {
    const charLatinTest = /^[A-Za-z]+$/;
    const numberTest = /^[0-9]+$/;
    const specialCharTest = /^[!#$%&()?@]+$/;

    const arrNumberToString = arrNumber.toString();

    try {
        if (arrChar === null || arrChar.length < 5 || !charLatinTest.test(arrChar)) {
            throw new Error("Invalid input for the first array (arrChar). It must contain at least 5 Latin letters.");
        }

        if (arrNumberToString === null || arrNumberToString.length < 2 || !numberTest.test(arrNumberToString)) {
            throw new Error("Invalid input for the second array (arrNumber). It must contain at least 2 digits.");
        }

        if (arrSpecialChar.length > 0 && !specialCharTest.test(arrSpecialChar)) {
            throw new Error("Invalid input for the third array (arrSpecialChar). Only the following characters are allowed: ! # $ % & ( ) ? @.");
        }

        if (size < 3) {
            throw new Error("Invalid input for the size parameter. It must be at least 3.");
        }

        if (new Set(arrChar).size !== arrChar.length) {
            throw new Error("The array arrChar contains duplicate characters.");
        }

        if (new Set(arrNumberToString).size !== arrNumberToString.length) {
            throw new Error("The array arrNumber contains duplicate digits.");
        }

        if (arrSpecialChar.length > 0 && new Set(arrSpecialChar).size !== arrSpecialChar.length) {
            throw new Error("The array arrSpecialChar contains duplicate characters.");
        }

        let textChar = '';
        let textNumber = '';
        let textSpecialChar = '';

        for (let i = 0; i < size; i++) {
            const char = Math.floor(Math.random() * arrChar.length);
            const number = Math.floor(Math.random() * arrNumberToString.length);

            textChar += arrChar[char];
            textNumber += arrNumberToString[number];

            if (arrSpecialChar.length > 0) {
                const specChar = Math.floor(Math.random() * arrSpecialChar.length);
                textSpecialChar += arrSpecialChar[specChar];
            }
        }

        const fullText = textChar + textNumber + (arrSpecialChar.length > 0 ? textSpecialChar : "");
        let resultText = '';
        for (let i = 0; i < size; i++) {
            const text = Math.floor(Math.random() * fullText.length);
            resultText += fullText[text];
        }

        return resultText;
    } catch (err) {
        console.log(err.stack);
    }
}

function encryptionText(text, steps, userGenerData) {
    try {
        if (steps < 0) {
            throw new Error('Steps must be positive');
        }
        
        if (steps > userGenerData.size / 2) {
            throw new Error('Steps must be less than half the size of the generated text');
        }
        
        const length = text.length;
        let hiddenResults = '';

        for (let i = 0; i < length; i++) {
            const finalIndex = (i + steps) % length;
            hiddenResults += text[finalIndex];
        }

        return hiddenResults;
    } catch (err) {
        console.log(err.stack);
    }
}

function deEncryptionText(text, steps, userGenerData) {
    try {
        if (steps < 0) {
            throw new Error('Steps must be positive');
        }

        if (steps > userGenerData.size / 2) {
            throw new Error('Steps must be less than half the size of the generated text');
        }

        const length = text.length;
        let hiddenResults = '';

        for (let i = 0; i < length; i++) {
            const finalIndex = (i - steps + length) % length;
            hiddenResults += text[finalIndex];
        }

        return hiddenResults;
    } catch (err) {
        console.log(err.stack);
    }
}

module.exports = {
    createRandomText,
    encryptionText,
    deEncryptionText
}
