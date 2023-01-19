import React from 'react';

function Textarea(props) {
    const { name, value, label, handleChange } = props;

    return (
        <label>
            {label}
            <textarea name={name} value={value} onChange={handleChange} />
        </label>
    );
}

export default Textarea;