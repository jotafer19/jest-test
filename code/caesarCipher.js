export default function caesarCipher(string, key = 0) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const stringToArray = [...string];
    const result = [];

    stringToArray.forEach(character => {
        if (isLetter(character)) {
            const newIndex = (alphabet.indexOf(character) + key) % 26;
            result.push(alphabet[newIndex].toUpperCase());
        } else {
            result.push(character);
        }
    })

    return result.join("");
}

function isLetter(character) {
    return /[A-Za-z]/.test(character);
}