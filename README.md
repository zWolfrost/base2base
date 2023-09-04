# base2base
A node.js typescript function to convert any string/number, **from** & **to** all the bases ranging between 2-36 **and** base64.

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
- **v1.1.0**
<br>- Added strict mode for base64 as well.

&nbsp;
## Found a bug and/or need help?
Please [open an issue](https://github.com/zWolfrost/base2base/issues) on GitHub to request a change, report a bug or ask for help about something and i will gladly look into it.

If you like this library, consider giving it a star on [GitHub](https://github.com/zWolfrost/base2base). It means a lot :)