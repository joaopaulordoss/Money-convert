const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    let inputCurrencyValue = document.querySelector(".input-currency").value
    inputCurrencyValue = inputCurrencyValue.replace(",", "."); 
    inputCurrencyValue = Number(inputCurrencyValue); 

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em Reak
    
    const currencyValueConverted = document.querySelector(".currency-value") //Outras moedas

        if (isNaN(inputCurrencyValue) || inputCurrencyValue === 0) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(0);
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(0);
        return;
    }
    
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

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage =document.querySelector(".currency-image")

    if(currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano"
    currencyImage.src = "./assets/dolar.png"
    }
    
    if(currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
    }

    if(currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra Esterlina"
    currencyImage.src = "./assets/libra.png"
    }

    if(currencySelect.value == "bit") {
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./assets/bitcoin.png"
    }


    convertValues()
}    

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)


