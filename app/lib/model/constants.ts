/*
* Copyright 2018 PoC-Consortium
*/

export const constants = {
    connectionTimeout: 10000,
    currencies: [
        { code: "AUD", symbol: "$" },
        { code: "BRL", symbol: "R$" },
        { code: "CAD", symbol: "$" },
        { code: "CLP", symbol: "$" },
        { code: "CNY", symbol: "¥" },
        { code: "CZK", symbol: "Kč" },
        { code: "DKK", symbol: "kr" },
        { code: "EUR", symbol: "€" },
        { code: "GBP", symbol: "£" },
        { code: "HKD", symbol: "$" },
        { code: "HUF", symbol: "Ft" },
        { code: "IDR", symbol: "Rp" },
        { code: "ILS", symbol: "₪" },
        { code: "INR", symbol: "₹" },
        { code: "JPY", symbol: "¥" },
        { code: "KRW", symbol: "₩" },
        { code: "MXN", symbol: "$" },
        { code: "MYR", symbol: "RM" },
        { code: "NOK", symbol: "kr" },
        { code: "NZD", symbol: "$" },
        { code: "PHP", symbol: "₱" },
        { code: "PKR", symbol: "₨" },
        { code: "PLN", symbol: "zł" },
        { code: "RUB", symbol: "₽" },
        { code: "SEK", symbol: "kr" },
        { code: "SGD", symbol: "$" },
        { code: "THB", symbol: "฿" },
        { code: "TRY", symbol: "₺" },
        { code: "TWD", symbol: "$" },
        { code: "USD", symbol: "$" },
        { code: "ZAR", symbol: "Rs" }
    ],
    database: "loki.db",
    defaultCurrency: "USD",
    defaultFee: 0.1,
    defaultLanguage: "en",
    defaultNode: "https://wallet.burst.cryptoguru.org:8125/burst",
    defaultTheme: "light",
    documentationUrl: "https://poc-consortium.github.io/burstcoin-mobile/",
    donate: "BURST-RTEY-HUSA-BJG4-EZW9E",
    languages: [
        { name: "shqip", code:"al" },
        { name: "čeština", code: "cs" },
        { name: "Deutsch", code: "de" },
        { name: "Ελληνικά", code: "el" },
        { name: "English", code: "en" },
        { name: "Español", code: "es" },
        { name: "Français", code: "fr" },
        { name: "हिन्द", code: "hi" },
        { name: "Italiano", code: "it" },
        { name: "日本語", code: "jp"},
        { name: "한국어", code: "ko" },
        { name: "Magyar", code: "hu" },
        { name: "Nederlands", code: "nl" },
        { name: "Polski", code: "pl" },
        { name: "Slovensky", code: "sk" },
        { name: "Svenska", code: "sv" },
        { name: "தமிழ", code: "ta" },
        { name: "中文", code: "zh" }
    ],
    marketUrl: "https://api.coinmarketcap.com/v1/ticker/burst",
    minimumFee: 0.00735,
    supportUrl: "https://github.com/poc-consortium/burstcoin-mobile/issues",
    transactionCount: "15",
    transactionUrl: "https://explore.burst.cryptoguru.org/transaction/",
    twitter: "https://twitter.com/PoC_Consortium",
    version: "0.2.2"
}
