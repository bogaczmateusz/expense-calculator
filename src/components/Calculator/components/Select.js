import React from 'react';

function Select(props) {
    const {value, changeHandler} = props;

    return (
        <select name="tip" value={value} onChange={changeHandler}>
            <option value="0">Wybierz wielkość napiwku</option>
            <option value="0.05">5%</option>
            <option value="0.1">10%</option>
            <option value="0.15">15%</option>
            <option value="0.2">20%</option>
        </select>
    );
}

export default Select;
