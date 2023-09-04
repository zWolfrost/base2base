"use strict";
function satisfiesBase(str, base = Infinity) {
    let baseChars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    switch (base) {
        case 64:
            baseChars += "+/=_-";
            break;
        default: baseChars = baseChars.slice(0, base);
    }
    let satisfies = str.toString().split("").every(char => baseChars.includes(char));
    return satisfies;
}
module.exports = function base2base(str, { from, to, strict = false } = {}) {
    const invalidReturnType = NaN;
    str = str.toString();
    //Strictly checking all string characters
    if (strict && from && satisfiesBase(str, from) == false)
        return invalidReturnType;
    //Converting from given base to base 10 (case)
    switch (from) {
        case 64: return Buffer.from(str, "base64").toString();
    }
    //Converting from base 10 to given base (case)
    switch (to) {
        case 64: return Buffer.from(str).toString("base64");
    }
    //Converting from given base to base 10 (general)
    const base10 = parseInt(str, from);
    if (isNaN(base10))
        return invalidReturnType;
    //Converting from base 10 to given base (general)
    const res = base10.toString(to);
    return res;
};
