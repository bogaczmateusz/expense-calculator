import React, { useState, useEffect } from 'react';

import createValuesArray from '../utils/createValuesArray';

function ListSummary({ data }) {
    const [sum, setSum] = useState(0);

    const calculate = data => {
        let values = createValuesArray(data);
        let value = values.reduce((acc, val) => +acc + +val, 0);

        return value;
    }

    useEffect(() => {
        setSum(calculate(data));
    }, [data]);

    return <div className="expense-calculator-column-summary"><span>{Math.round(sum * 100) / 100}zł</span></div>;
}

export default ListSummary;