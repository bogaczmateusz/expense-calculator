import React from 'react';

function Input(props) {
    const {value, changeHandler} = props;

    return <input name="amount" type="number" value={value !== 0 && value} onChange={changeHandler} placeholder="Kwota netto" />;
}

export default Input;
