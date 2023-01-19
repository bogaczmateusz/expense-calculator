import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

function ListItem(props) {
    const { headline, amount, tags, removeHandler } = props;

    return (
        <li>
            <div className="expense-calculator-item">
                <h5 className="expense-calculator-item-headline">{headline}<small>tagi: {tags}</small></h5>
                <p className="expense-calculator-item-amount">{Math.round(amount * 100) / 100}</p>
                <button type="button" className="expense-calculator-item-remove" onClick={() => removeHandler(props.id, props.isExpense, props.isIncome)}><FontAwesomeIcon icon={['fas', 'times-circle']} /></button>
            </div>
        </li>
    )
}

export default ListItem;
