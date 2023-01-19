import React, { useEffect, useState, useRef } from 'react';

function Summary({ expenses, incomes }) {
    const [amount, setAmount] = useState(0);
    const summaryContainer = useRef();

    const calculateValue = (expenses, incomes) => {
        let expensesResult = expenses.reduce((acc, val) => +acc + +val, 0);
        let incomesResult = incomes.reduce((acc, val) => +acc + +val, 0);
        let summary = +expensesResult + +incomesResult;

        return summary;
    }

    useEffect(() => {
        let summary = calculateValue(expenses, incomes)
        setAmount(summary);

        summary > 0 ? summaryContainer.current.classList.add('is-above-none') : summaryContainer.current.classList.remove('is-above-none');
        summary === 0 ? summaryContainer.current.classList.add('is-none') :  summaryContainer.current.classList.remove('is-none');
        summary < 0 ? summaryContainer.current.classList.add('is-under-none') : summaryContainer.current.classList.remove('is-under-none');

        if (summary < 0) {

        }
    }, [expenses, incomes]);

    return (
        <div className="expense-calculator-summary" ref={summaryContainer}>Suma: <span>{Math.round(amount * 100) / 100}zł</span></div>
    )
}

export default Summary;
