const buttonConvert = document.querySelector(".button-convert")
const currencySelect = document.querySelector(".currency-select")
const currencySelectTop = document.querySelector(".currency-select-top")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor para converter
    const currencyValueConverted = document.querySelector(".currency-value") //Resultado já convertido

    const dolarToday = 4.92 // Valor ficticio
    const euroToday = 5.37 // Valor ficticio
    const libraToday = 6.23 // Valor ficticio
    const bitcoinToday = 186990.58 // Valor ficticio



    if (currencySelectTop.value == "real-to") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencySelectTop.value == "dolar-to") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencySelectTop.value == "euro-to") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencySelectTop.value == "libra-to") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (currencySelectTop.value == "bitcoin-to") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }



    //  CONVERTENDO REAL PARA OUTRAS MOEDAS
    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencySelect.value == "dolar") { //Se o dolar estiver selecionado entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") { //Se o euro estiver selecionado entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") { //Se a libra estiver selecionada entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") { //Se o bitcoin estiver selecionado entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    //CONVERTER DOLAR PARA OUTRAS MOEDAS

    if (currencySelectTop.value == "dolar-to" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencySelectTop.value == "dolar-to" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * dolarToday)
    }

    if (currencySelectTop.value == "dolar-to" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * 0.92)
    }

    if (currencySelectTop.value == "dolar-to" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * 0.79)
    }

    if (currencySelectTop.value == "dolar-to" && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * 0.000026)
    }

    //EURO PARA OUTRAS MOEDAS

    if (currencySelectTop.value == "euro-to" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencySelectTop.value == "euro-to" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * euroToday)
    }

    if (currencySelectTop.value == "euro-to" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * 1.09)
    }

    if (currencySelectTop.value == "euro-to" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * 0.86)
    }

    if (currencySelectTop.value == "dolar-to" && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * 0.000028)
    }

    //LIBRA PARA OUTRAS MOEDAS

    if (currencySelectTop.value == "libra-to" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (currencySelectTop.value == "libra-to" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * libraToday)
    }

    if (currencySelectTop.value == "libra-to" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * 1.26)
    }

    if (currencySelectTop.value == "libra-to" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * 1.16)
    }

    if (currencySelectTop.value == "libra-to" && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * 0.000033)
    }

    //BITCOIN PARA OUTRAS MOEDAS

    if (currencySelectTop.value == "bitcoin-to" && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }

    if (currencySelectTop.value == "bitcoin-to" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * bitcoinToday)
    }

    if (currencySelectTop.value == "bitcoin-to" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * 38323.60)
    }

    if (currencySelectTop.value == "bitcoin-to" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * 35342.41)
    }

    if (currencySelectTop.value == "bitcoin-to" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * 30378.54)
    }
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "BitCoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValues()
}


function changeCurrencyTop() {
    const currency = document.querySelector(".currency")
    const currencyTopImg = document.querySelector(".currency-top-img")

    if (currencySelectTop.value == "real-to") {
        currency.innerHTML = "Real"
        currencyTopImg.src = "./assets/real.png"
    }

    if (currencySelectTop.value == "dolar-to") {
        currency.innerHTML = "Dólar Americano"
        currencyTopImg.src = "./assets/dolar.png"
    }

    if (currencySelectTop.value == "euro-to") {
        currency.innerHTML = "Euro"
        currencyTopImg.src = "./assets/euro.png"
    }

    if (currencySelectTop.value == "libra-to") {
        currency.innerHTML = "Libra"
        currencyTopImg.src = "./assets/libra.png"
    }

    if (currencySelectTop.value == "bitcoin-to") {
        currency.innerHTML = "BitCoin"
        currencyTopImg.src = "./assets/bitcoin.png"
    }

    convertValues()
}


currencySelectTop.addEventListener("change", changeCurrencyTop)
currencySelect.addEventListener("change", changeCurrency)
buttonConvert.addEventListener("click", convertValues)
