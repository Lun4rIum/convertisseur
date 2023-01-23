var farenheight;
var celcius;
var kelvin;


function convertCel(){

    var celciusContent = document.getElementById("celcius").value

    if (celciusContent != ''){

        farenheight = parseInt(celciusContent)*(9/5)+32
        kelvin = parseInt(celciusContent)+273.15

        document.getElementById("farenheight").value = farenheight
        document.getElementById("kelvin").value = kelvin
    }
}

function convertFar(){

    var farenheightContent = document.getElementById("farenheight").value

    if (farenheightContent != ''){

        celcius = (parseInt(farenheightContent)-32)*5/9
        kelvin = (parseInt(farenheightContent)-32)*5/9+273.15

        document.getElementById("celcius").value = celcius
        document.getElementById("kelvin").value = kelvin
    }
}

function convertKev(){

    var kelvinContent = document.getElementById("kelvin").value

    if (kelvinContent != ''){

        farenheight = (parseInt(kelvinContent)-273.15)*9/5+32
        celcius = parseInt(kelvinContent)-273.15

        document.getElementById("celcius").value = celcius
        document.getElementById("farenheight").value = farenheight
    }
}