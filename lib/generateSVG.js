function shapeData(data) {
    if (data.shape === "circle") {
        return `circle cx="150" cy="100" r="80"`
    }
    if (data.shape === "triangle") {
        return `polygon points="150,20 245,180 55,180"`
    }
    else {
        return `rect x="70" y="20" width="160" height="160"`
    }
}


function generateSVG(data) {
    let shapeData1 = shapeData(data);

    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 <${shapeData1} fill="${data.scolor}" />

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.tcolor}">${data.text}</text>

</svg>`
}

module.exports = generateSVG;