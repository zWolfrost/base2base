/**
 * Converts a string (or number) from a given base to a given base. Supports conversion FROM & TO all the bases ranging from 1-36 AND base 64.
 * @param {string | number} str The string (or number) to convert.
 * @param {object} opts An object of the starting base ("from") and the ending base ("to").
 * @param {number} opts.from The base of the given string. By default, strings with a prefix of "0x" are considered hexadecimal. All other strings are considered decimal. If 64, will ignore "to" option.
 * @param {number} opts.to The base to convert the given string to (default: 10). If 64, will ignore "from" option (unless "from" is 64).
 * @param {boolean} opts.strict If true, will return NaN if some characters don't satisfy the given starting base. If false, or the starting base is unspecified, it will only convert eligible characters instead.
 * @returns {string | number} The converted string. Returns "NaN" (number) if the string doesn't satisfy the given starting base or if the given bases were out of the supported range.
 */
export = function base2base(str: string | number, { from, to, strict=false }: {from?: number, to?: number, strict?: boolean} = {}): string | number
{
   const invalidReturnType = NaN

   str = str.toString()

   //Strictly checking all string characters
   if (strict && from && satisfiesBase(str, from) == false) return invalidReturnType

   //Converting from given base to base 10 (case)
   switch (from)
   {
      case 64: return Buffer.from(str, "base64").toString();
   }
   //Converting from base 10 to given base (case)
   switch (to)
   {
      case 64: return Buffer.from(str).toString("base64");
   }

   //Converting from given base to base 10 (general)
   const base10 = parseInt(str, from);

   if (isNaN(base10)) return invalidReturnType;

   //Converting from base 10 to given base (general)
   const res = base10.toString(to);

   return res;
}


function satisfiesBase(str: string | number, base: number=Infinity): boolean
{
   let baseChars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

   switch (base)
   {
      case 64: baseChars += "+/=_-"; break;
      default: baseChars = baseChars.slice(0, base)
   }

   let satisfies = str.toString().split("").every(char => baseChars.includes(char))

   return satisfies
}