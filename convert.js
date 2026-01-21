function main() {
    const input = require("sync-input");

    const currencies = {
        USD: 1.0,
        EUR: 0.85,
        GBP: 0.75,
        JPY: 157.9,
        AUD: 1.35
    }

    console.log("Welcome to Currency Converter!");
    console.log("")
    console.log(`Available Currencies:`)

    console.log(`USD: ${currencies.USD} \nEUR: ${currencies.EUR} \nGBP: ${currencies.GBP} \nJPY: ${currencies.JPY} \nAUD: ${currencies.AUD}`);
    console.log("")

    console.log("What do you want to do? ");
    console.log("")
    console.log("1. Convert Currencies");
    console.log("2. Exit program");
    console.log("")

    const choice = input("Enter your choice? ")

    if (choice == 1) {
        const result = convetor(input, currencies)
        console.log("")
        console.log(`Converted Currency: ${result}`)
    } else {
        console.log("")
        console.log("GoodBye!")
        process.exit
    } 
}

function convetor(input, currencies) {
    console.log("")
    const fromCurrency = input("From Currency: ").toUpperCase();
    const toCurrency = input("To Currency: ").toUpperCase();
    const amount = input("Enter the amount: ");

    const fromRate = currencies[fromCurrency];
    const toRate = currencies[toCurrency];

    const convertedCurrency = (toRate / fromRate) * amount;

    return `${convertedCurrency}${toCurrency}`
}

main();
