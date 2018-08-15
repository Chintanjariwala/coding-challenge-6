# RGB-HEX Conversion

Script that can convert RGB values into a HEX code, and vice versa.

To install, run:
```
npm install @chintanjariwala/hexrgbconversion
```

A sample usage:
```
const { rgbHexConversion } = require('@chintanjariwala/hexrgbconversion')

let rgb = rgbHexConversion("#ea2291")           // [ 234, 34, 145 ]
let hex = rgbHexConversion(234, 34, 145)     // #ea2291
```
