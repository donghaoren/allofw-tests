let allofw = require("allofw");
let fs = require("fs");

let img = allofw.graphics.loadImageData(fs.readFileSync("images/gradient.png"));
let pixels = img.pixels();

console.log(img.width(), img.height());

for(let i = 0; i < 256; i++) {
    let p1 = pixels.slice(i * 256 * 4)[0];
    let p2 = pixels.slice(i * 256 * 4)[1];
    let p3 = pixels.slice(i * 256 * 4)[2];
    let p4 = pixels.slice(i * 256 * 4)[3];
    console.log(p1, p2, p3, p4);
}