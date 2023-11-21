function circleArea(r)
{
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${Math.PI * (r * r)}`);
}
circleArea(process.argv[2] * 1);