export default function capitalize(string) {
    let result = '';
    result += string.slice(0, 1).toUpperCase();
    for (let i = 1; i < string.length; i++) {
        result += string[i].toLowerCase();
    }

    return result;
}