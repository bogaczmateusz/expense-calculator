import React from 'react';

function Result({ value }) {
    if (value !== 0 && !isNaN(value)) {
        return (
            <p className="calculator-result">Kwota brutto po przeliczeniu: <span>{value}zł</span></p>
        );
    }

    return null;
}

export default Result;