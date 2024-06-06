/**
 * Transform the given string based on the provided rules.
 * @param {string} str - The input string to transform.
 * @returns {string} The transformed string.
 */
function transformString(str) {
    let result = str;
    const length = str.length;

    if (length % 3 === 0) {
        result = result.split('').reverse().join('');
    }
    if (length % 5 === 0) {
        result = result.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    return result;
}

// Test cases
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
