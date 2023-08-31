# base2base
A node function to convert any number, FROM & TO all the bases ranging from 1-36 AND base 64.

&nbsp;
## How to use
```js
const base2base = require("base2base")


let binary = base2base(314159, {to: 2})
console.log(binary)
// "1001100101100101111"

let hex = base2base(binary, {from: 2, to: 16})
console.log(hex)
// "4cb2f"

let base64 = base2base(hex, {to: 64})
console.log(base64)
// "NGNiMmY="

let hexDecoded = base2base(base64, {from: 64})
console.log(hexDecoded)
// "4cb2f"


let invalidBinary = base2base("1010ab", {from: 2, to: 2})
console.log(invalidBinary)
// "1010"

let invalidBinaryStrict = base2base("1010ab", {from: 2, to: 2, strict: true})
console.log(invalidBinaryStrict)
// NaN
```

&nbsp;
## Changelog & Breaking Changes

- **v1.0.0**
<br>- First commit.
  - v1.0.1
  <br>- Fixed bug where Intellisense wouldn't work.

&nbsp;
## Found a bug and/or need help?
Please [open an issue](https://github.com/zWolfrost/base2base/issues) on Github to request a change, report a bug or ask for help about something and i will gladly look into it.

If you like this library, consider giving it a star on [Github](https://github.com/zWolfrost/base2base). It means a lot :)