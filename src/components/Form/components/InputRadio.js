import React from 'react';

function InputRadio(props) {
    const { name, value, checked, handleChange } = props;

    return (
        <label className="form-checkable">
            <input type="radio" name={name} value={value} onChange={handleChange} checked={checked} />
            {value}
        </label>
    );
}

export default InputRadio;