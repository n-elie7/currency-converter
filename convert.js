const input = require("sync-input");

function main() {
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

    console.log("Welcome to Currency Converter!");
    console.log("")
    console.log(`Available Currencies:`)

    // console.log(`USD: ${currencies.USD} \nEUR: ${currencies.EUR} \nGBP: ${currencies.GBP} \nJPY: ${currencies.JPY} \nAUD: ${currencies.AUD}`);

    console.log("")
    for(const [key, value] of Object.entries(currencies)) {
        console.log(`${key}: ${value}`)
    }

    while (true) {
        console.log("")

        console.log("What do you want to do? ");
        console.log("")
        console.log("1. Convert Currencies");
        console.log("2. Exit program");
        console.log("")

        const choice = input("Enter your choice? ")

        if (choice === "1") {
            const result = convertor(currencies)
            console.log("")
            console.log(`Converted Currency: ${result}`)
        } else if (choice === "2") {
            console.log("")
            console.log("GoodBye!")
            break
        } else {
            console.log("")
            console.log("Invalid choice. Please try again.")
            continue
        }
    }
    
}

function convertor(currencies) {
    console.log("")
    const fromCurrency = input("From Currency: ").toUpperCase();
    const toCurrency = input("To Currency: ").toUpperCase();
    const amount = input("Enter the amount: ");

    const fromRate = currencies[fromCurrency];
    const toRate = currencies[toCurrency];

    const convertedCurrency = ((toRate / fromRate) * amount).toFixed(2);

    return `${convertedCurrency} ${toCurrency}`
}

main();
