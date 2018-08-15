# RGB-HEX Conversion

Script that can convert RGB values into a HEX code, and vice versa.

To install, run:
```
npm install @chintan93/hexrgbconversion
```

A sample usage:
```
const rgbHexConversion = require('@chintan93/hexrgbconversion')

let rgb = rgbHexConversion("#ea2291")           // [ 234, 34, 145 ]
let hex = rgbHexConversion(234, 34, 145)     // #ea2291
```
