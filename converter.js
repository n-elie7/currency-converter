// function main() {
//     const input = require("sync-input");

//     const currencies = {
//         USD: 1.0,
//         EUR: 0.92,
//         GBP: 0.79,
//         JPY: 149.50,
//         AUD: 1.52,
//         CAD: 1.36,
//         CHF: 0.88,
//         CNY: 7.24,
//         INR: 83.12,
//         RWF: 1320.00
//     };

//     console.log("Welcome to Currency Converter!");
//     console.log("")
//     console.log(`Available Currencies:`)

//     console.log(`USD: ${currencies.USD} \nEUR: ${currencies.EUR} \nGBP: ${currencies.GBP} \nJPY: ${currencies.JPY} \nAUD: ${currencies.AUD}`);

//     console.log("")
//     for(const [key, value] of Object.entries(currencies)) {
//         console.log(`${key}: ${value}`)
//     }

//     console.log("")

//     console.log("What do you want to do? ");
//     console.log("")
//     console.log("1. Convert Currencies");
//     console.log("2. Exit program");
//     console.log("")

//     const choice = input("Enter your choice? ")

//     if (choice == 1) {
//         const result = convetor(input, currencies)
//         console.log("")
//         console.log(`Converted Currency: ${result}`)
//     } else {
//         console.log("")
//         console.log("GoodBye!")
//         process.exit
//     } 
// }

function convertor() {
    const currencies = {
         USD: 1.0,
         EUR: 0.92,
         GBP: 0.79,
         JPY: 149.50,
         AUD: 1.52,
         CAD: 1.36,
         CHF: 0.88,
         CNY: 7.24,
         INR: 83.12,
         RWF: 1320.00
    };

    const fromCurrency = document.getElementById("fromCurrency");
    const toCurrency = document.getElementById("toCurrency");
    let amount = document.getElementById("amount");
    let convertedCurrencyResult = document.getElementById("convertedAmount");
    const swapButton = document.getElementById("swapButton");
    const rateInfo = document.getElementById("rateInfo");

    const currencyOptions = [fromCurrency, toCurrency];

    let fromRate = currencies[fromCurrency.value];
    let toRate = currencies[toCurrency.value];

    rateInfo.innerText = `${fromRate} ${fromCurrency.value} = ${toRate} ${toCurrency.value}`;
    
    currencyOptions.forEach((option) => {
        option.addEventListener("change", () => {
            fromRate = currencies[fromCurrency.value];
            toRate = currencies[toCurrency.value];

            rateInfo.innerText = `${fromRate} ${fromCurrency.value} = ${toRate} ${toCurrency.value}`;
        });
    })
    
    amount.addEventListener("change", () => {
        fromRate = currencies[fromCurrency.value];
        toRate = currencies[toCurrency.value];

        convertedCurrencyResult.value = ((toRate / fromRate) * amount.value).toFixed(2);
    })

    swapButton.addEventListener("click", () => {
        fromRate = currencies[toCurrency.value];
        toRate = currencies[fromCurrency.value];

        convertedCurrencyResult.value = ((toRate / fromRate) * amount.value).toFixed(2);

        rateInfo.innerText = `${fromRate} ${toCurrency.value} = ${toRate} ${fromCurrency.value}`;

        let from = fromCurrency.value;
        let to = toCurrency.value;

        [from, to] = [to, from];

        fromCurrency.value = from;
        toCurrency.value = to;
    })
}

convertor();
