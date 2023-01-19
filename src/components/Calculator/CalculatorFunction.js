import React, { useState } from 'react';

import './calculator.css';
import Input from './components/Input';
import Select from './components/Select';
import Button from './components/Button';
import Result from './components/Result';

function useInput(initialValue = 0) {
    const [value, setValue] = useState(0);

    const handleChange = e => {
        setValue(e.target.value)
    }

    return [value, handleChange];
}

function CalculatorFunction() {
    const [amount, handleAmountChange] = useInput(0);
    const [tip, handleTipChange] = useInput(0);
    const [result, setResult] = useState(0);

    const handleSubmit = e => {
        e.preventDefault();

        if (amount !== 0 && tip !== 0) {
            let tipAmount = +amount * +tip;
            let resultWithoutTax = +amount + +tipAmount;
            let taxAmount = +resultWithoutTax * 0.23;
            let result = +resultWithoutTax + +taxAmount;

            setResult(Math.round(result * 100) / 100);
        }
    };

    return (
        <form className="calculator" onSubmit={handleSubmit}>
            <h2>Kalkulator rachunku <small>funkcyjny</small></h2>
            <Input value={amount} changeHandler={handleAmountChange} />
            <Select value={tip} changeHandler={handleTipChange} />
            <Button />
            <Result value={result} />
        </form>
    )
}

export default CalculatorFunction;
