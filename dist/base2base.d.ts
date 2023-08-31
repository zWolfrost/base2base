/**
 * Converts a string (or number) from a given base to a given base. Supports conversion FROM & TO all the bases ranging from 1-36 AND base 64.
 * @param {string | number} str The string (or number) to convert.
 * @param {object} opts An object of the starting base ("from") and the ending base ("to").
 * @param {number} opts.from The base of the given string. By default, strings with a prefix of "0x" are considered hexadecimal. All other strings are considered decimal. If 64, will ignore "to" option.
 * @param {number} opts.to The base to convert the given string to (default: 10). If 64, will ignore "from" option (unless "from" is 64).
 * @param {boolean} opts.strict If true, will return NaN if some characters don't satisfy the given starting base. If false, or the starting base is unspecified, it will only convert eligible characters instead.
 * @returns {string | number} The converted string. Returns "NaN" (number) if the string doesn't satisfy the given starting base or if the given bases were out of the supported range.
 */
declare const _default: (str: string | number, { from, to, strict }?: {
    from?: number | undefined;
    to?: number | undefined;
    strict?: boolean | undefined;
}) => string | number;
export = _default;
//# sourceMappingURL=base2base.d.ts.map