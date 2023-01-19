import React, { Fragment, useState, useEffect } from 'react';

import ListItem from './ListItem';
import ListSummary from './ListSummary';

function IncomesList({ data, removeHandler }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(data)
    }, [data]);

    const displayItems = items.map(item => {
        return (
            <ListItem
                key={`income-${item.id}`}
                id={item.id}
                headline={item.headline}
                amount={item.amount}
                tags={item.tags}
                removeHandler={removeHandler}
                isIncome
            />
        );
    });

    return (
        <Fragment>
            <h2>Przychody</h2>
            <ul>
                {displayItems}
            </ul>
            <ListSummary data={items}/>
        </Fragment>
    );
}

export default IncomesList;