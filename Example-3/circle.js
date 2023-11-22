function circleArea(r)
{
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${Math.PI * (r * r)}`);
}

function circleCircumference(r)
{
    console.log(`Yarıçapı ${r} olan dairenin cevresi: ${2 * Math.PI * r}`);
}

module.exports = {
    circleArea,
    circleCircumference
}