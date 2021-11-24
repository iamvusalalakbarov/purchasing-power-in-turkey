"use strict";

const minimumWage = [
    {
        year: 2005,
        wage: 350.15,
        dollarRate: 1.3355
    },
    {
        year: 2006,
        wage: 380.46,
        dollarRate: 1.3228
    },
    {
        year: 2007,
        wage: 403.02,
        dollarRate: 1.4065
    },
    {
        year: 2008,
        wage: 481.55,
        dollarRate: 1.1715
    },
    {
        year: 2009,
        wage: 527.13,
        dollarRate: 1.6433
    },
    {
        year: 2010,
        wage: 576.57,
        dollarRate: 1.4970
    },
    {
        year: 2011,
        wage: 629.95,
        dollarRate: 1.6045
    },
    {
        year: 2012,
        wage: 701.13,
        dollarRate: 1.7761
    },
    {
        year: 2013,
        wage: 773.01,
        dollarRate: 1.7569
    },
    {
        year: 2014,
        wage: 846.00,
        dollarRate: 2.2595
    },
    {
        year: 2015,
        wage: 949.07,
        dollarRate: 2.4452
    },
    {
        year: 2016,
        wage: 1300.99,
        dollarRate: 2.9543
    },
    {
        year: 2017,
        wage: 1404.06,
        dollarRate: 3.7724
    },
    {
        year: 2018,
        wage: 1603.12,
        dollarRate: 3.7543
    },
    {
        year: 2019,
        wage: 2020.00,
        dollarRate: 5.1606
    },
    {
        year: 2020,
        wage: 2324.00,
        dollarRate: 5.9812
    },
    {
        year: 2021,
        wage: 2825.90,
        dollarRate: 7.3099
    }
];

const yearSpan = document.getElementById("year");
const wageTRY = document.getElementById("wage-TRY");
const wageUSD = document.getElementById("wage-USD");
const percentage = document.getElementById("percentage");

let formatUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});

let formatTRY = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 2
});

minimumWage.forEach(({ year, wage, dollarRate }, i) => {
    setTimeout(() => {
        yearSpan.innerText = year;
        wageTRY.innerText = formatTRY.format(wage).replace(".", "-").replace(",", ".").replace("-", ",");
        wageUSD.innerText = formatUSD.format(wage / dollarRate);
    }, i * 1000)
})