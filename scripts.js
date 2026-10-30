const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em Reak
    
    const currencyValueConverted = document.querySelector(".currency-value") //Outras moedas
    
    console.log(currencySelect.value)
    const dolarToday = 5.4
    const euroToday = 6
    const libraToday = 7.3
    const bitcoinToday = 419307.25

    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    
    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
    }).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency:"GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if(currencySelect.value == "bit"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 4
        }).format(inputCurrencyValue / bitcoinToday) + " BTC";
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency:"BRL"
    }).format(inputCurrencyValue)

    
}

convertButton.addEventListener("click", convertValues)

