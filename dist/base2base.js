"use strict";
function satisfiesBase(str, base) {
    if (base == 64)
        return true;
    const CHARS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const BASE_CHARS = CHARS.slice(0, base);
    let satisfies = Array.from(str).every(char => BASE_CHARS.includes(char));
    return satisfies;
}
module.exports = function base2base(str, { from, to, strict = false } = {}) {
    str = str.toString();
    //Strictly checking all string characters
    if (strict && from && satisfiesBase(str, from) == false)
        return NaN;
    //Converting from given base to base 10 (case)
    switch (from) {
        case 64: return Buffer.from(str, "base64").toString();
    }
    //Converting from base 10 to given base (case)
    switch (to) {
        case 64: return Buffer.from(str).toString("base64");
    }
    //Converting from given base to base 10 (general)
    let base10 = parseInt(str, from);
    if (isNaN(base10))
        return NaN;
    //Converting from base 10 to given base (general)
    let res = base10.toString(to);
    return res;
};
