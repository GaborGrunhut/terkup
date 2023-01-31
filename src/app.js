const radiusElem = document.querySelector('#radius');
const heightElem = document.querySelector('#height');
const calcButton = document.querySelector('#calcButton');
const areaElem = document.querySelector('#area');

calcButton.addEventListener('click', () => {
    // console.log('működik') --> teszt;
    // értékek kiszedése
    let radius = Number(radiusElem.value);
    let height = Number(heightElem.value);
    let area = calcArea(radius, height);
    // console.log(area) --> teszt;
    areaElem.value = area;

})

    // függvény. Számítsa ki egy kör alapú kúp térfogatát. V = 1/3*(r*r)*PI*h

function calcArea(radius, height) {
    let area = (1.0/3.0)*Math.pow(radius, 2) * Math.PI * height;
    return area;
}