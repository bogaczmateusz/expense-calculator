import React from 'react';

function InputContainer({ children, errorLabel }, ref) {
    return (
        <div className="form-control" ref={ref}>
            {children}
            <small>{errorLabel ? errorLabel : 'Pole wymagane.'}</small>
        </div>
    );
}

export default React.forwardRef(InputContainer);