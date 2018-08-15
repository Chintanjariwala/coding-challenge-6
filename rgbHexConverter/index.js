const hexToRgb = hex =>
    hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
}).join('')

const rgbHexConversion = (hexR = 0, g = 0, b = 0) => {
    if (typeof hexR === 'string') {
        return hexToRgb(hexR)
    } else {
        return rgbToHex(hexR, g, b)
    }
}

module.exports = rgbHexConversion;

//rgbHexConversion("#ea2291")