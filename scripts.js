const convertButton = document.querySelector(".convert-button")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em Reak
    
    const currencyValueConverted = document.querySelector(".currency-value") //Outras moedas
    
    const dolarToday = 5.4

    const convertedValue = inputCurrencyValue / dolarToday

    currencyValueToConvert.innerHTML = inputCurrencyValue
    currencyValueConverted.innerHTML = convertedValue

    console.log (convertedValue)
}

convertButton.addEventListener("click", convertValues)

