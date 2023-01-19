import React from 'react';

function InputCheckbox(props) {
    const { name, label, checked, handleChange } = props;

    return (
        <label className="form-checkable">
            <input type="checkbox" name={name} onChange={handleChange} checked={checked} />
            {label}
        </label>
    );
}

export default InputCheckbox;