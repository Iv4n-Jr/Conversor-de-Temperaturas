let resposta = document.getElementById('resposta')

function Conversao(){
    let celsius = Number(document.getElementById('celsius').value)
    if (!isNaN(celsius) && celsius >= -273.15){
        let fahrenheint = ((celsius * 9 / 5) + 32).toFixed(2)
        let kelvin = (celsius + 273.15).toFixed(2)
        resposta.innerHTML = `Sua temperatura em Fahrenheint é ${fahrenheint}°F e em Kelvin ${kelvin} K`
    } else {
        window.alert('Por favor, insira um valor válido')
    }

    if (celsius <= 0){
        document.body.style.backgroundColor = '#d9d9d9'
    } else if (celsius >=1 && celsius <=20) {
        document.body.style.backgroundColor = '#919191'
    } else if (celsius >=21 && celsius <=24) {
        document.body.style.backgroundColor = '#3cff00'
    } else if (celsius >= 25 && celsius <= 29){
        document.body.style.backgroundColor = '#ffa600'
    } else if (celsius >=30 && celsius <= 34){
        document.body.style.backgroundColor = '#ff4800'
    } else {
        document.body.style.backgroundColor = '#ff0000'
    }
            
}