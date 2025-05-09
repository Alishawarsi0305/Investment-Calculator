// - initialInvestment : the initial investment amount
// - annualInvestment : the amount invested every year 
// - expectedReturn : the expected (annual) rate of return
// - duration : the investment duration (time frame)
export function calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
}) {
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
        const interestEarnedInYear = investmentValue * expectedReturn;
        investmentValue += interestEarnedInYear + annualInvestment;
        annualData.push({
            year: i + 1, //year identifier
            interest: interestEarnedInYear, // the amount of interest earned in
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
        });
    }
    return annualData;
}

export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});