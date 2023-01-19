import React from 'react';

function Input(props) {
    const { name, value, label, handleChange } = props;

    return (
        <label>
            {label}
            <input name={name} value={value} onChange={handleChange} />
        </label>
    );
}

export default Input;